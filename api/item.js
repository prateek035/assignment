const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Number route");
});

// @route POST api/item
// @desc send a item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item({
      item: req.body.item,
    });

    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route GET api/item/all

router.get("/all", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
