require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
