import {Router} from 'express';
import {prisma} from '../db.js';

const router = Router();

// Get all categories
router.get('/categories', async (req, res) => {
  return await prisma.category
    .findMany({
      include: {
        products: true
      }
    })
    .then(categories => {
      return res.json(categories);
    });
});

export default router;
