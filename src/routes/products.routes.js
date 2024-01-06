import {Router} from 'express';
import {prisma} from '../db.js';

const router = Router();

// Get all products
router.get('/products', async (req, res) => {
  return await prisma.product.findMany().then(products => {
    return res.json(products);
  });
});

// Get a product
router.get('/products/:id', async (req, res) => {
  const productFound = await prisma
    .product
    .findFirst({
      where: {
        id: +req.params.id
      },
      include: {
        category: true
      }
    });
  if (!productFound) {
    return res.status(404).json({error: "Product not found"});
  }
  return res.json(productFound);
});

// Create a new product
router.post('/products', async (req, res) => {
  console.log("products POST", req.body);
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  return res.json(newProduct);
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
  const productDeleted = await prisma.product
    .delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
  if (!productDeleted) {
    return res.status(404).json({error: "Product not found"});
  }
  return res.json(productDeleted);
});

// Update a product
router.put('/products/:id', async (req, res) => {
  await prisma.product
    .update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    .then(productUpdated => {
      return res.json(productUpdated);
    });
});

export default router;
