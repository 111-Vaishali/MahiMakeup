const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mahi-booking")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// ✅ Schema
const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: String,
  location: String,
});

// ✅ Model
const Booking = mongoose.model("Booking", BookingSchema);

// ✅ API
app.post("/book", async (req, res) => {
  try {
    const data = new Booking(req.body);
    await data.save();
    res.send("Booking Saved");
  } catch (err) {
    res.status(500).send("Error");
  }
});
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/feedback", async (req, res) => {
  try {
    const { name, message } = req.body;

    const newFeedback = new Feedback({ name, message });
    await newFeedback.save();

    res.send("Feedback Saved ✅");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});
app.get("/feedback", async (req, res) => {
  try {
    const data = await Feedback.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).send("Error");
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});