const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 10000;

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("Backend + MongoDB is working ✅");
});

app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
