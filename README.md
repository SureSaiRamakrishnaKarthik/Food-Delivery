# Food-Delivery

This workspace contains three apps:

- Admin panel: Vite + React (manages menu, orders)
- Frontend: Vite + React (customer app)
- Backend: Express + MongoDB (API, Stripe)

## Environment Setup

1. Node & npm

- Use a recent LTS of Node (v18+ recommended).

2. Install deps

```bash
cd admin && npm install
cd ../frontend && npm install
cd ../backend && npm install
```

3. Environment files

- Do NOT commit real secrets; use example files as templates.
- Backend example: `backend/.env.example`
- Create `backend/.env` with values:

```
PORT=3000
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<your JWT secret>
STRIPE_SECRET_KEY=<your Stripe secret key>
CLIENT_URL=http://localhost:5173
```

## Running Apps

- Admin (dev):

```bash
cd admin
npm run dev
```

- Frontend (dev):

```bash
cd frontend
npm run dev
```

- Backend (API server):

```bash
cd backend
npm run server
```

## Secrets & Push Protection

GitHub may block pushes if a secret is detected in commits. Follow these steps to resolve:

- Ensure `.env` files are ignored:

  - See [.gitignore](.gitignore) and [backend/.gitignore](backend/.gitignore).
  - Examples (`.env.example`) are allowed so teammates know required variables.

- If a secret was committed:

```bash
git rm --cached backend/.env
# (repeat for any other committed .env)
# Commit the removal and push
```

- Rotate the leaked secret (e.g., Stripe key) in the provider dashboard, then update your local `.env`.

- If push protection still blocks:
  - Rewrite the commit to remove the secret (amend or rebase), then push.
  - See GitHub docs: secret scanning push protection.

## Common Pitfalls

- Admin command `npm run server` does not exist. Use `npm run dev`.
- Frontend redirects after payment are configured in [frontend/src/pages/Verfiy/Verify.jsx](frontend/src/pages/Verfiy/Verify.jsx). Change the `navigate(...)` target if you prefer Home over My Orders.

## Notes

- Images and uploads are served by the backend under `/images`.
- Admin queries the backend via `http://localhost:3000` (configured in [admin/src/App.jsx](admin/src/App.jsx)). Update if your backend runs elsewhere.
