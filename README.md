# Zowi Payment Form (with Success Redirect)

This version includes:
- `index.html` → Form to submit payment proof
- `success.html` → Redirect page after successful submission
- `Code.gs` → Google Apps Script backend

## Setup Steps
1. Replace `YOUR_SHEET_ID` and `YOUR_FOLDER_ID` in Code.gs.
2. Deploy Apps Script as Web App (Execute as Me, Anyone access).
3. Replace `YOUR_WEB_APP_URL` in index.html with your script URL.
4. Host files (index.html + success.html) on GitHub Pages.

Result:
- User submits → Data saved in Sheet → File stored in Drive → Redirects to `success.html`.
