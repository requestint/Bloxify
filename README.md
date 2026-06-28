# Bloxify

> Create and manage Discord bots — entirely inside Roblox.

Bloxify is a SaaS platform that lets Roblox developers spin up Discord bots through an in-game UI editor, with zero external dashboards or coding required. Configure commands, set behavior, and go live — all from within your Roblox experience.

---

## How It Works

Requests flow through a multi-layer backend built for reliability and cost efficiency:

```
Roblox (UI/Editor)
    ↓
Cloudflare Workers     — auth, rate limiting, keepalive
    ↓
Railway (Express)      — middleware, plan enforcement, routing
    ↓
Render (Bot Backend)   — Discord bot runtime
    ↓
Neon (Postgres)        — per-game tokens, user data, plan tiers
```

Each game gets its own hashed token stored in Neon. Plan tier enforcement is handled by Railway as the source of truth, with Roblox Open Cloud Subscription Webhooks notifying the backend of plan changes in real time.

---

## Pricing

| Tier       | Price              | Bots | Commands | Branding       |
|------------|--------------------|------|----------|----------------|
| Free       | Free               | 1    | 5        | Bloxify badge  |
| Standard   | 1,000 Robux/month  | 1    | Expanded | Bloxify badge  |
| Pro        | 2,000 Robux/month  | 3    | Unlimited| Removed        |

---

## Features

- **In-game bot editor** — configure your Discord bot entirely within Roblox, no external tools needed
- **Per-game tokens** — each game gets its own isolated, hashed API token
- **Real-time plan sync** — Open Cloud Subscription Webhooks keep plan state up to date automatically
- **Shared backend infrastructure** — multi-tenant architecture designed to scale without per-user server costs
- **$0 baseline cost** — stack runs free until growth justifies paid tiers

---

## Tech Stack

| Layer            | Technology                        |
|------------------|-----------------------------------|
| Game client      | Roblox (Luau)                     |
| Edge / Auth      | Cloudflare Workers                |
| Middleware       | Railway + Express                 |
| Bot runtime      | Render                            |
| Database         | Neon (Postgres, free tier)        |
| Plan management  | Roblox Open Cloud Webhooks        |

---

## Project Status

> Actively in development — solo project by [@requestint](https://github.com/requestint)

---

## Author

**Magic** — solo Roblox developer  
GitHub: [github.com/requestint/Past_work](https://github.com/requestint/Past_work)
