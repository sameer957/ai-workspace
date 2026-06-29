"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const googleAuthController_1 = require("../controller/googleAuthController");
const asyncWrapper_1 = require("../middlewares/asyncWrapper");
const router = (0, express_1.Router)();
router.get('/google', googleAuthController_1.googleAuth);
router.get('/google/callback', (0, asyncWrapper_1.asyncWrapper)(googleAuthController_1.googleCallback));
exports.default = router;
//# sourceMappingURL=googleAuthRoutes.js.map