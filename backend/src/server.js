const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
let Product = require("./models/product");
let Order = require("./models/order");
const {
  getProducts,
  getOrders,
  getProduct,
  addTestData,
} = require("./helpers/helpers");

const app = express();
const port = 5000;
const stripe = require("stripe")(
  "sk_test_51H9V3DJYTWFMSQx4AxAyc898r8FDYu46Z74O2hwLuMhNYCKoFHcD8DSSNsaad4S5XrzuZIo2quzqPgVrq7Z3eWJa008wxwy9w0"
);

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_SERVER}:27017/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    console.log(
      `Connected to MongoDB on SERVER: ${process.env.MONGODB_SERVER} and DATABASE: ${process.env.MONGODB_DATABASE}`
    )
  )
  .catch((error) => {
    console.log(error);
  });

addTestData();

app.get("/", async (req, res) => {
  console.log("GETTING ALL PRODUCT");
  const products = await getProducts();
  res.status(200).send(products);
});

app.post("/addtestdata", async (req, res) => {
  console.log("ADDING TEST DATA");
  const result = await addTestData();
  res.status(200).send(result);
});

app.post("/product", async (req, res) => {
  console.log("GETTING PRODUCT");
  const { id } = req.body;
  const result = await getProduct(id);
  res.status(200).send(result);
});

const getAmount = async (cart) => {
  const getProductAmount = (product) => {
    return new Promise(async (resolve) => {
      await Product.find({ _id: product._id })
        .exec()
        .then((productDetails) => {
          let index = 0;
          while (
            product.options[0]._id != productDetails[0].options[index]._id
          ) {
            index += 1;
          }
          console.log("COLORE", productDetails[0].options[index].name);
          if (productDetails[0].options[index].discountedPrice == null) {
            resolve(productDetails[0].options[index].price);
          } else {
            resolve(productDetails[0].options[index].discountedPrice);
          }
        });
    });
  };

  return new Promise((resolve) => {
    const arrayPromise = [];
    cart.forEach((product) => {
      arrayPromise.push(getProductAmount(product));
    });
    Promise.all(arrayPromise).then((result) =>
      resolve(result.reduce((a, b) => a + b, 0))
    );
  });
};

app.post("/create-payment-intent", async (req, res) => {
  const { cart } = req.body;

  const amount = await getAmount(cart);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
  });

  res.json({
    total: amount,
    clientSecret: paymentIntent.client_secret,
  });
});

app.post("/complete-payment", async (req, res) => {
  const { uid, cart } = req.body;
  console.log(uid);
  console.log(cart);

  const newOrder = new Order({
    uid: uid,
    content: cart,
  });

  await newOrder
    .save()
    .then(console.log("salvato"))
    .catch((error) => console.log(error));

  res.status(200).send("ok");
});

app.post("/orders", async (req, res) => {
  const { uid } = req.body;
  const result = await getOrders(uid);
  res.status(200).send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
