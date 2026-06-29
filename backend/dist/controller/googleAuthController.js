"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleCallback = exports.googleAuth = void 0;
const google_1 = require("../config/google");
const googleAuth = (_req, res) => {
    const url = google_1.oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
            'https://www.googleapis.com/auth/gmail.readonly',
            'https://www.googleapis.com/auth/gmail.send',
        ],
    });
    res.redirect(url);
};
exports.googleAuth = googleAuth;
const googleCallback = async (req, res) => {
    const code = req.query.code;
    if (!code) {
        res.status(400).json({ success: false, message: 'No code received from Google' });
        return;
    }
    const { tokens } = await google_1.oauth2Client.getToken(code);
    google_1.oauth2Client.setCredentials(tokens);
    res.json({
        success: true,
        message: 'Gmail connected. Check terminal for tokens.',
    });
};
exports.googleCallback = googleCallback;
//# sourceMappingURL=googleAuthController.js.map