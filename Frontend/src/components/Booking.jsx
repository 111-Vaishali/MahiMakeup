import { useState } from "react";
import "./Booking.css";

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    "dateOfBooking": "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.text();
    alert("Booking Successful ✅");
  } catch (err) {
    console.log(err);
    alert("Error ❌");
  }
};

  return (
  <div className="booking-container">
    <div className="booking-card">

      <h2>Book Your Appointment</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />

      <select name="service" onChange={handleChange}>
        <option>Select Service</option>
        <option>Bridal</option>
        <option>Party</option>
        <option>Mehendi</option>
      </select>

      <label style={{ color: "#aaa", fontSize: "14px" }}>
        Select Booking Date
      </label>

      <input
        type="date"
        name="dateOfBooking"
        onChange={handleChange}
      />
      <input name="location" placeholder="Location" onChange={handleChange} />

      <button onClick={handleSubmit}>Book Now</button>

    </div>
  </div>
);
}

export default Booking;

