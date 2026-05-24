## Goal
Regenerate the `public_html/` static bundle (and matching `technodoor_public_html.zip`) so the latest site content — including the recent image swaps (fire, rolling) and any other changes — is ready to upload to cPanel.

## Steps

1. **Clean previous output**
   - Remove old `public_html/` and `dist/` to avoid stale assets.

2. **Production build**
   - Run `bun run build` to produce fresh `dist/client/` assets (hashed JS/CSS/images).

3. **Prerender all routes to static HTML**
   - Start the built worker locally (wrangler dev on port 8788).
   - `curl` each route and save as `index.html` under the matching folder:
     - `/` → `public_html/index.html`
     - `/about` → `public_html/about/index.html`
     - `/products` → `public_html/products/index.html`
     - `/partners` → `public_html/partners/index.html`
     - `/contact` → `public_html/contact/index.html`
     - 404 fallback → `public_html/404.html`
   - Stop the local server.

4. **Copy hashed assets**
   - Copy `dist/client/assets/` → `public_html/assets/` (CSS, JS, images including the updated `fire-*.jpg` and `rolling-*.jpg`).
   - Copy any root static files (favicon, robots.txt, etc.) into `public_html/`.

5. **Write `.htaccess`** for cPanel/Apache
   - UTF-8 default charset
   - gzip/deflate compression for text assets
   - Long-cache headers for `/assets/*` (immutable, 1 year)
   - Short cache for HTML
   - `ErrorDocument 404 /404.html`

6. **Package**
   - Create `technodoor_public_html.zip` containing the contents of `public_html/` for one-click cPanel upload via File Manager.

7. **Report**
   - Confirm the routes generated, asset count, and zip path so you can download and upload to cPanel.

## Technical notes
- Output is fully static — no Node/Worker runtime needed on the cPanel server, just Apache serving files.
- The site has no auth or server functions in use for these pages, so prerendered HTML is sufficient.
- If GitHub sync is connected, the regenerated `public_html/` will push automatically.
