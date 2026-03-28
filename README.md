# Cottage Visit Calendar

A private visit-planning app for one guest cottage, designed for deployment on Vercel with Supabase and optional Resend email notifications.

## What it does
- Shared-password guest access
- Separate admin password
- Calendar from March 27, 2026 to October 30, 2026
- Public statuses: Available, Requested, Unavailable
- Guest request form
- Requested dates expire after 7 days
- Admin controls to mark requested or unavailable and delete requests
- Email notifications to both admins when a request is submitted (optional)

## Quick start (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment template:
   ```bash
   cp .env.example .env.local
   ```
3. Fill values in `.env.local`.
4. Run dev server:
   ```bash
   npm run dev
   ```

## Deploy to Vercel (rookie-friendly)

### 1) Supabase
1. Create a Supabase project.
2. Open **SQL Editor** and run `supabase/schema.sql`.
3. Copy these values from **Project Settings → API**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (or publishable key)
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)

### 2) GitHub
1. Put this project in a GitHub repo.
2. Ensure app files are at the repo root (you should see `package.json`, `app/`, `components/`, etc.).

### 3) Vercel
1. Import the GitHub repo into Vercel.
2. In **Project Settings → Environment Variables**, add all values from `.env.example`.
3. Deploy.

### 4) If Vercel does not redeploy
Push one tiny commit to `main`:
```bash
git add .
git commit -m "Trigger deploy"
git push origin main
```
Then check **Vercel → Deployments**.

## Environment variables
See `.env.example`.

## Notes
- Shared and admin passwords are environment variables, not hard-coded.
- The guest-facing page never shows names.
- Admin mode is unlocked with a separate in-app password.
- Google Calendar sync can be added after initial launch.
