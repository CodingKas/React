const express = require("express");
const app = express();
const PORT = 4040;

app.use(express.json());

let DB = [];

const findCategory = (category) => DB.find((c) => c.category === category);
const response = (ok, data) => ({ ok, data });

app.post("/category/add", (req, res) => {
  const { category } = req.body;
  if (findCategory(category))
    return res.json(response(true, `Category ${category} already exists`));

  DB.push({ category, products: [] });
  res.json(response(true, `Category ${category} added successfully`));
});

app.post("/category/delete", (req, res) => {
  const { category } = req.body;
  DB = DB.filter((c) => c.category !== category);
  res.json(response(true, `Category ${category} deleted successfully`));
});

app.post("/category/update", (req, res) => {
  const { old_category, new_category } = req.body;
  const categoryObj = findCategory(old_category);
  if (!categoryObj)
    return res.json(response(true, `Category ${old_category} not found`));

  categoryObj.category = new_category;
  res.json(response(true, `Category ${new_category} updated successfully`));
});

app.get("/category/categories", (req, res) => {
  res.json(response(true, DB.map((c) => c.category).join(", ")));
});

app.get("/category/products", (req, res) => {
  res.json(response(true, DB));
});

app.get("/category/:category", (req, res) => {
  const categoryObj = findCategory(req.params.category);
  res.json(
    response(true, categoryObj ? categoryObj.products : "Category not found")
  );
});

app.post("/product/add", (req, res) => {
  const { category, product } = req.body;
  const categoryObj = findCategory(category);
  if (!categoryObj)
    return res.json(response(true, `Category ${category} not found`));

  categoryObj.products.push(product);
  res.json(response(true, `Product ${product.name} added successfully`));
});

app.post("/product/delete", (req, res) => {
  const { category, product } = req.body;
  const categoryObj = findCategory(category);
  if (!categoryObj)
    return res.json(response(true, `Category ${category} not found`));

  categoryObj.products = categoryObj.products.filter(
    (p) => p.name !== product.name
  );
  res.json(response(true, `Product ${product.name} deleted successfully`));
});

app.post("/product/update", (req, res) => {
  const { category, old_product, new_product } = req.body;
  const categoryObj = findCategory(category);
  if (!categoryObj)
    return res.json(response(true, `Category ${category} not found`));

  const productObj = categoryObj.products.find(
    (p) => p.name === old_product.name
  );
  if (!productObj)
    return res.json(response(true, `Product ${old_product.name} not found`));

  Object.assign(productObj, new_product);
  res.json(response(true, `Product ${new_product.name} updated successfully`));
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
