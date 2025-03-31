const Category = require("../models/Category");

exports.addCategory = async (req, res) => {
  try {
    const { category } = req.body;
    if (await Category.findOne({ category }))
      return res.json({
        ok: false,
        data: `Category ${category} already exists`,
      });

    await Category.create({ category });
    res.json({ ok: true, data: `Category ${category} added successfully` });
  } catch (err) {
    res.status(500).json({ ok: false, data: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { category } = req.body;
  const result = await Category.findOneAndDelete({ category });
  res.json({
    ok: true,
    data: result
      ? `Category ${category} deleted`
      : `Category ${category} not found`,
  });
};

exports.updateCategory = async (req, res) => {
  const { old_category, new_category } = req.body;
  const result = await Category.findOneAndUpdate(
    { category: old_category },
    { category: new_category }
  );
  res.json({
    ok: true,
    data: result
      ? `Category updated to ${new_category}`
      : `Category ${old_category} not found`,
  });
};

exports.getCategories = async (_, res) => {
  const categories = await Category.find().select("category -_id");
  res.json({ ok: true, data: categories });
};
