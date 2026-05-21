import { supabase, isSupabaseConfigured } from './supabase';

/**
 * Log a record access event to the audit log.
 * Fire-and-forget — never throws, never blocks the caller.
 *
 * @param {object} opts
 * @param {string} opts.action       - 'upload' | 'download' | 'share_created' | 'share_viewed' | 'share_revoked' | 'delete'
 * @param {string} [opts.userId]     - Privy user ID of the acting user (null for public share views)
 * @param {string} [opts.recordId]   - UUID of the record
 * @param {string} [opts.fileName]   - Original filename
 * @param {string} [opts.fileType]   - MIME type
 * @param {string} [opts.shareToken] - Share link token (for share-related events)
 */
export function logAccess({ action, userId, recordId, fileName, fileType, shareToken } = {}) {
  if (!isSupabaseConfigured) return;
  supabase
    .from('record_access_log')
    .insert({
      action,
      user_id: userId || null,
      record_id: recordId || null,
      file_name: fileName || null,
      file_type: fileType || null,
      share_token: shareToken || null,
    })
    .then(() => {}); // fire and forget
}

/**
 * Fetch the audit log for a user, newest first.
 *
 * @param {string} userId - Privy user ID
 * @param {number} [limit=100]
 * @returns {Promise<{ data: object[], error: object|null }>}
 */
export async function getAccessLog(userId, limit = 100) {
  const { data, error } = await supabase
    .from('record_access_log')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  return { data: data || [], error };
}
