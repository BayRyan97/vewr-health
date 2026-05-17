import { supabase } from './supabase';

/**
 * Generate a cryptographically random share token.
 */
function generateToken() {
  const bytes = window.crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Create a share link for a record.
 *
 * @param {object} record   - Full record object from Supabase ({id, cid, metadata, uploadedAt})
 * @param {string} userId   - Privy user ID (owner)
 * @param {number} expiryHours - How long the link stays valid (e.g. 24, 168, 720)
 * @returns {Promise<{ data: object|null, error: object|null }>}
 */
export async function createShareLink(record, userId, expiryHours = 24) {
  const token = generateToken();
  const expiresAt = new Date(Date.now() + expiryHours * 60 * 60 * 1000).toISOString();

  const { encryptedKey, iv, originalFileName, originalFileType } = record.metadata || {};

  const { data, error } = await supabase
    .from('share_links')
    .insert({
      record_id: record.id,
      user_id: userId,
      token,
      expires_at: expiresAt,
      revoked: false,
      cid: record.cid,
      encrypted_key: encryptedKey,
      iv,
      file_name: originalFileName || 'Medical Record',
      file_type: originalFileType || 'application/octet-stream',
    })
    .select()
    .single();

  return { data, error };
}

/**
 * Fetch a share link by token and validate it is still active.
 *
 * @param {string} token
 * @returns {Promise<{ link: object|null, error: string|null }>}
 */
export async function getShareLink(token) {
  const { data, error } = await supabase
    .from('share_links')
    .select('*')
    .eq('token', token)
    .single();

  if (error || !data) {
    return { link: null, error: 'Link not found.' };
  }

  if (data.revoked) {
    return { link: null, error: 'This link has been revoked by the owner.' };
  }

  if (new Date(data.expires_at) < new Date()) {
    return { link: null, error: 'This link has expired.' };
  }

  return { link: data, error: null };
}

/**
 * Revoke a share link by its row ID.
 *
 * @param {string} id - UUID of the share_links row
 * @returns {Promise<{ error: object|null }>}
 */
export async function revokeShareLink(id) {
  const { error } = await supabase
    .from('share_links')
    .update({ revoked: true })
    .eq('id', id);

  return { error };
}

/**
 * List all active (non-revoked, non-expired) share links for a record.
 *
 * @param {string} recordId - UUID of the record
 * @param {string} userId   - Privy user ID (safety check)
 * @returns {Promise<{ data: object[], error: object|null }>}
 */
export async function getShareLinksForRecord(recordId, userId) {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from('share_links')
    .select('*')
    .eq('record_id', recordId)
    .eq('user_id', userId)
    .eq('revoked', false)
    .gt('expires_at', now)
    .order('created_at', { ascending: false });

  return { data: data || [], error };
}
