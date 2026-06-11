import { SITE_DESCRIPTION, SITE_NAME, SITE_ROUTES, SITE_URL, absoluteUrl } from '@/lib/site';

const UPDATED_AT = new Date().toUTCString();

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const items = SITE_ROUTES.map((route) => {
    const url = absoluteUrl(route.path);

    return `
      <item>
        <title>${escapeXml(route.title)}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description>${escapeXml(route.description)}</description>
        <pubDate>${UPDATED_AT}</pubDate>
      </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${escapeXml(SITE_NAME)}</title>
        <link>${SITE_URL}</link>
        <atom:link href="${absoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml" />
        <description>${escapeXml(SITE_DESCRIPTION)}</description>
        <language>en-gb</language>
        <lastBuildDate>${UPDATED_AT}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
