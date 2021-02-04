const mongoose = require("mongoose");
const { Schema } = mongoose;

const product = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, default: 0 },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  options: [
    {
      name: String,
      images: [
        {
          preview: { type: String, required: true },
          image: { type: String, required: true },
        },
      ],
      price: { type: Number, required: true },
      discountedPrice: Number,
      disponibility: { type: Number, required: true },
    },
  ],
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", product);

module.exports = Product;
