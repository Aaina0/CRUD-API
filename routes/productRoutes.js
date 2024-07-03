import express from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  findbyId,
  updateProduct,
} from "../controller/productController.js";

const router = express.Router();

router.post("/api/products", createProduct);
router.get("/api/products", findProduct);
router.get("/api/products/:id", findbyId);
// update product
router.put("/api/products/:id", updateProduct);
//delete product
router.delete("/api/products/:id", deleteProduct);

export default router;
