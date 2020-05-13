const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  item: {
    type: Number,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
