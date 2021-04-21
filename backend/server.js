const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const productRouters = require("./routers/product");
const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products/", productRouters);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
