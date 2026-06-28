import { Router } from 'express';
import { googleAuth, googleCallback } from '../controller/googleAuthController';
import { asyncWrapper } from '../middlewares/asyncWrapper';

const router = Router();

router.get('/google', googleAuth);
router.get('/google/callback', asyncWrapper(googleCallback));

export default router;
