# Cloudflare Pages — build settings

Use these in **Pages → project → Settings → Builds & deployments**:

| Setting | Value |
|--------|--------|
| **Framework preset** | None (or Angular — verify output path below) |
| **Build command** | `npm ci && npm run build` |
| **Build output directory** | `dist/pro-drink-and-drive/browser` |
| **Root directory** | Repository root (or your app folder if the repo is a monorepo) |

### Node.js version

Angular 21 needs **Node 20+**. Cloudflare does not always read `.nvmrc` automatically; set explicitly:

- **Environment variable (recommended):** `NODE_VERSION` = `20` or `22`  
  (Pages → Settings → Environment variables → **Build**)

Or rely on `.nvmrc` in the repo if your Pages setup supports it.

### If the build fails with no useful logs

1. **Open the failed deployment** → click the deployment row → **View build log** (expand steps).
2. **Memory (very common on free tier):** production Angular builds can exceed default RAM. Add a **build** env var:  
   `NODE_OPTIONS` = `--max-old-space-size=4096`  
   If it still dies, try `8192` or build locally and upload only `dist/pro-drink-and-drive/browser` (your README mentioned committing `dist` for this reason).
3. **Wrong output path:** the site must be deployed from **`dist/pro-drink-and-drive/browser`**, not `dist` or `dist/pro-drink-and-drive`.
4. **Dev dependencies missing:** the build must install **devDependencies** (where `@angular/cli` lives). Do **not** set `NODE_ENV=production` for the install step. Use `npm ci` with a committed `package-lock.json`.
5. **Lockfile out of date:** run `npm install` locally, commit **`package-lock.json`**, push, then redeploy.

### SPA routing (separate from build failure)

For client-side routes to work on refresh, add a **Pages → Redirects** rule or `_redirects` / `_routes.json` so all paths serve `index.html` (Angular’s router). Build failing is different from 404s after a successful deploy.
