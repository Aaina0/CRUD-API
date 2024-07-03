import express from "express";
import { database } from "./database/database.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(productRoutes);
app.use(express.urlencoded({ extended: false }));

await database();

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.listen(5000, () => {
  console.log("Server is Running");
});
