# BSP Blueprint

Vite + React + TypeScript app with a pixel-aligned login screen and JWT-based session handling.

## Development

```bash
npm install
npm run dev
```

Set `VITE_API_URL` in `.env` (see `.env.example`) to point at your auth API. In development, if `VITE_API_URL` is unset, login returns a mock JWT for local testing.
