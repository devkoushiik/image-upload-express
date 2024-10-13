const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).send({ product });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Error creating product" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(StatusCodes.OK).send({ products });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Error fetching products" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
