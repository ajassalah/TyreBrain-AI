# TyreBrain AI

Next.js application for the TyreBrain AI marketing site.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and update the public site URL for each environment:

```bash
NEXT_PUBLIC_SITE_URL=https://tyrebrainai.com
```

This value is used for canonical URLs, sitemap entries, RSS links, robots, and JSON-LD.

## SEO Endpoints

- `/sitemap.xml`
- `/robots.txt`
- `/rss.xml`
- `/opengraph-image`
- `/twitter-image`
- `/manifest.webmanifest`

## Production Build

```bash
npm run build
npm run start
```

## Docker Deployment

```bash
docker build -t tyrebrain-ai .
docker run --rm -p 3000:3000 --env-file .env.local tyrebrain-ai
```

The Docker image uses Next.js standalone output.

## Vercel Deployment

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables and deploy with the default Next.js build command:

```bash
npm run build
```
