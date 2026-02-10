# BAT 2.0

BAT is a futuristic, minimal AI social media agency platform scaffold built with Next.js.

## Included product areas
- Marketing landing page
- Authentication flows: sign up, sign in, forgot password
- Dashboard overview
- BAT Brain (memory + data source workflow UI)
- Talk to BAT (chat interface UI)
- Create Content workflow UI
- Content Calendar approval/scheduling UI
- Settings + Email token 2FA UI
- Billing with subscription tiers

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import this repository.
3. Keep default build settings (`next build`) and deploy.
4. Vercel will provide a live preview URL.

## Notes
This is a production-ready UI scaffold and workflow shell. The next step is wiring backend services
for authentication, memory ingestion, LLM orchestration, scheduling APIs, and payment providers.
