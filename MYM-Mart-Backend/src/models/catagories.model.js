const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required field."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Category description is required field."],
  },
  image: {
    type: String,
    required: [true, "Category image is required field."],
  },
});

module.exports = mongoose.model("Categories", categoriesSchema);