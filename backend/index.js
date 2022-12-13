const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const productsRouter = require('./routes/products');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
