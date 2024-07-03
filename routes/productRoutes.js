import express from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  findbyId,
  updateProduct,
} from "../controller/productController.js";

const app = express();

app.post("/api/products", createProduct);
app.get("/api/products", findProduct);
app.get("/api/products/:id", findbyId);
// update product
app.put("/api/products/:id", updateProduct);
//delete product
app.delete("/api/products/:id", deleteProduct);

export default app;
