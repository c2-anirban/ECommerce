require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_KEY);
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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.get("/products", (req, res) => {
  res.send(products);
});
// app.get("/Cart", (req, res) => {
//   res.send(cart);
// });

app.use((req, res, next) => {
  if (req.originalUrl === "/payment") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

app.post("/payment", cors(), async (req, res) => {
  let { amount, token } = req.body;
  try {
    const payment = await stripe.charges.create({
      amount,
      currency: "USD",
      customer: token.name,
      description: "Cart item",
      payment_method: token,
      confirm: true,
    });
    console.log("Payment", payment);
    console.log("Total amount", amount);
    res.json({
      message: "Payment successful",
      success: true,
      // success_url: `${YOUR_DOMAIN}/successful`,
      // cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

// app.post(
//   "/payment",
//   cors(),
//   express.raw({ type: "application/json" }),
//   (req, res) => {
//     const { amount, token } = req.data;
//     console.log("CART", amount);
//     // console.log("CART", data.amount);
//     const idempotencyKey = uuid();

//     return stripe.customers
//       .create({
//         email: token.email,
//         source: token.id,
//       })
//       .then((customer) => {
//         stripe.charges.create(
//           {
//             amount: cart.cartTotalAmount * 100,
//             currency: "usd",
//             customer: customer.id,
//             receipt_email: token.email,
//             description: `purchase of product.name`,
//             shipping: {
//               name: token.card.name,
//               address: {
//                 country: token.card.address_country,
//               },
//             },
//             success_url: `${YOUR_DOMAIN}/successful`,
//             cancel_url: `${YOUR_DOMAIN}/cancel`,
//           },
//           { idempotencyKey }
//         );
//       })
//       .then((result) =>
//         res.status(200).json({
//           message: "charge posted successfully",
//           result,
//         })
//       )
//       .catch((err) => console.log(err));
//   }
// );

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
