const express = require("express");

const connectDB = require("./config/db");

const app = express();

// connect db
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`API running`));

// define route
app.use("/api/item", require("./api/item"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
