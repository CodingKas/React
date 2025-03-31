const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const { category, product } = req.body;
    if (await Product.findOne({ name: product.name }))
      return res.json({
        ok: false,
        data: `Product ${product.name} already exists`,
      });

    await Product.create({ ...product, category });
    res.json({ ok: true, data: `Product ${product.name} added successfully` });
  } catch (err) {
    res.status(500).json({ ok: false, data: err.message });
  }
};

exports.getAllProducts = async (_, res) => {
  const products = await Product.find();
  res.json({ ok: true, data: products });
};

exports.getProductByName = async (req, res) => {
  const product = await Product.findOne({ name: req.params.product });
  res.json({
    ok: true,
    data: product || `Product ${req.params.product} doesn't exist`,
  });
};

exports.getProductsByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json({
    ok: true,
    data: products.length
      ? products
      : `Category ${req.params.category} doesn't exist`,
  });
};

exports.updateProduct = async (req, res) => {
  const { old_product, new_product } = req.body;
  const product = await Product.findOneAndUpdate(
    { name: old_product.name },
    new_product
  );
  res.json({
    ok: true,
    data: product
      ? `Product ${new_product.name} updated successfully`
      : `Product ${old_product.name} doesn't exist`,
  });
};

exports.deleteProduct = async (req, res) => {
  const { product } = req.body;
  const result = await Product.findOneAndDelete({ name: product.name });
  res.json({
    ok: true,
    data: result
      ? `Product ${product.name} deleted successfully`
      : `Product ${product.name} doesn't exist`,
  });
};
