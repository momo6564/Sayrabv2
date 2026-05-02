<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SAYRAB

A premium apparel fundraising platform for creators and organizations.

## Run Locally

**Prerequisites:** Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Google Sign-In

This app uses the browser-based Google Identity Services flow on the login page.

1. Set `VITE_GOOGLE_CLIENT_ID` in `.env.local`
2. In Google Cloud Console, add these Authorized JavaScript origins to your OAuth web client:
   `http://localhost`
   `http://localhost:3000`

Do not put the Google OAuth client secret in the Vite frontend. A client secret is only for a backend or server-side token exchange flow.
