import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name || !quantity || !price)
      return res
        .status(400)
        .json({
          status: false,
          message: "name quantity and price are required",
        });
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update product

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    const updateproduct = await Product.findById(id);
    res.status(200).json(updateproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteproduct = await Product.findByIdAndDelete(id);
    if (!deleteproduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Product delete succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createProduct, findProduct, findbyId, updateProduct, deleteProduct };
