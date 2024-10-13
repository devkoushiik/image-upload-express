const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Product name is required"] },
  price: { type: Number, required: [true, "Product price is required"] },
  image: { type: String, required: [true, "Product image is required"] },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
