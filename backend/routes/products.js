var { Router } = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = Router();

/* GET prodcts listing. */
router.get('/', async (req, res, next) => {
  const products = await prisma.product.findMany({});

  res.send({ products });
});

/* POST users listing. */
router.post('/', async (req, res, next) => {
  const { name, qty, rate, category } = req.body;
  console.log('req.body: ', req.body);
  const product = await prisma.product.create({
    data: {
      Name: name,
      WQty: parseInt(qty),
      SRate: parseInt(rate),
      Category: category,
    },
  });

  res.send({ product });
});

module.exports = router;
