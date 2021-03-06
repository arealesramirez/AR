import express from 'express';
import authRoutes from './auth.route';
import contactRoutes from './contact.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/contact', contactRoutes);

export default router;
