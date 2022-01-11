const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KGIPsSJ2Hg6deMjhcWNNCvgUiQSdM9KPM5q0LKFdVUQU3xBlmbpmsDKCvSNfzXiNhnUPK0n1fnllEvbHMPsYUJI00eldMIm0P"
);
const uuid = require("uuid");
const YOUR_DOMAIN = "http://localhost:3000";

const products = require("./products");
// const cart = require("./Cart");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});
// app.get("/Cart", (req, res) => {
//   res.send(cart);
// });

app.post("/payment", (req, res) => {
  const { cart, token } = req.body;
  console.log("CART", cart);
  console.log("CART", cart.cartTotalAmount);
  const idempotencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: cart.cartTotalAmount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of product.name`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
          success_url: `${YOUR_DOMAIN}/successful`,
          cancel_url: `${YOUR_DOMAIN}/cancel`,
        },
        { idempotencyKey }
      );
    })
    .then((result) =>
      res.status(200).json({
        message: "charge posted successfully",
        result,
      })
    )
    .catch((err) => console.log(err));
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
