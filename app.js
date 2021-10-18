import express from "express";
import OrderRouter from "./router/orders.js";

const app = express();

app.use(express.json());

app.use("/orders", OrderRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
app.listen(8080);
