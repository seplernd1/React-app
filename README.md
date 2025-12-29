# Hallo Seple React App

A minimal React + Vite project pinned to Node.js 20. It renders a simple "hallo seple" greeting stylized for a Zoho Catalyst ready deployable bundle.

## Requirements

- Node.js **20.x** (Catalyst runtime) – use `nvm use 20` if you have multiple versions installed
- npm 10+

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173/ to see the greeting.

## Production Build

```bash
npm run build
```

Outputs to `dist/`, which can be served as static assets or uploaded to Zoho Catalyst.

## Zoho Catalyst Deployment Notes

1. Run `npm run build` locally (Catalyst requires pre-built assets).
2. Zip the `dist/` folder (contents only, no parent folder) or upload via Catalyst console under **Web Client**.
3. Ensure the runtime environment is set to **Node 20** to match `package.json` `engines`.
4. If using Catalyst CLI:
   ```bash
   catalyst webclient:deploy ./dist
   ```
5. After deployment, map the web client to your desired domain/stage in Catalyst.

That’s it! The bundle includes only static assets so no additional server configuration is needed.
