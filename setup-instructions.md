# Email Setup Instructions

## Google App Password Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. In Google Account Security settings
2. Click on "App passwords"
3. Select "Mail" as the app
4. Select "Other" as the device
5. Enter "Excellence Academy Website"
6. Click "Generate"
7. Copy the 16-character password (e.g., "abcd efgh ijkl mnop")

### Step 3: Update Server Configuration
1. Open `server.js`
2. Replace `YOUR_GOOGLE_APP_PASSWORD` with the generated app password
3. Save the file

## Installation & Running

### Install Dependencies
```bash
npm install
```

### Start the Server
```bash
npm start
```

### For Development (auto-restart)
```bash
npm run dev
```

## Access the Website
- Open browser to: `http://localhost:3000`
- The contact form will now send emails directly to micknick168@gmail.com

## Security Notes
- Never commit the actual app password to version control
- Consider using environment variables for production:
  ```javascript
  pass: process.env.GMAIL_APP_PASSWORD
  ```

## Troubleshooting
- Ensure 2FA is enabled on the Gmail account
- Verify the app password is correct (16 characters, no spaces)
- Check that "Less secure app access" is not blocking the connection
- Gmail may require you to verify the login from a new location initially