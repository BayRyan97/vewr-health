/**
 * Cloudflare Pages Function — /api/npi
 *
 * Server-side proxy for the CMS NPPES registry.
 * The NPPES API does not send CORS headers, so browsers cannot call it
 * directly. This function forwards the request from the edge and adds
 * the appropriate CORS header so the React app can consume the response.
 *
 * Usage: GET /api/npi?number=1234567890
 */
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const npi = url.searchParams.get('number') || '';

  // Validate: NPI must be exactly 10 digits
  if (!/^\d{10}$/.test(npi)) {
    return new Response(JSON.stringify({ error: 'NPI must be exactly 10 digits.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const npesUrl = `https://npiregistry.cms.hhs.gov/api/?number=${npi}&version=2.1`;

  let npesResponse;
  try {
    npesResponse = await fetch(npesUrl, {
      headers: { Accept: 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Could not reach NPPES registry.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data = await npesResponse.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // NPI data changes rarely
    },
  });
}
