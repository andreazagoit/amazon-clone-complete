const mongoose = require("mongoose");
const { Schema } = mongoose;

const order = new Schema({
  uid: { type: String, required: true },
  time: { type: Date, default: Date.now },
  content: [
    {
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
    },
  ],
});

const Order = mongoose.model("Order", order);

module.exports = Order;
