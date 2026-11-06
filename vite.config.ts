import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Dev only: serve /api/roblox-stats from the same handler Vercel runs, so the
 * live Roblox numbers show up under `npm run dev` without `vercel dev`.
 */
function robloxStatsDevApi(): Plugin {
  return {
    name: 'roblox-stats-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/roblox-stats', async (req, res) => {
        const url = new URL(req.url ?? '', 'http://localhost')
        const mod = await server.ssrLoadModule('/api/roblox-stats.ts')
        const shim = {
          status(code: number) {
            res.statusCode = code
            return shim
          },
          setHeader(k: string, v: string) {
            res.setHeader(k, v)
            return shim
          },
          json(body: unknown) {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(body))
            return shim
          },
        }
        await mod.default({ query: Object.fromEntries(url.searchParams) }, shim)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), robloxStatsDevApi()],
})
