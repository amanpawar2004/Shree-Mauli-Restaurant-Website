import { useState } from "react";
import { createBooking } from "../api/bookingApi";

function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: 1,
    bookingDate: "",
    bookingTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createBooking(formData);

      alert("✅ Table Booked Successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        persons: 1,
        bookingDate: "",
        bookingTime: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-[#8B1E1E] mb-2">
          🍽️ Book Your Table
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Reserve your table in just a few clicks.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border p-3 rounded-lg w-full"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="persons"
              placeholder="Number of Persons"
              className="border p-3 rounded-lg w-full"
              value={formData.persons}
              onChange={handleChange}
              min="1"
              required
            />

            <input
              type="date"
              name="bookingDate"
              className="border p-3 rounded-lg w-full"
              value={formData.bookingDate}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="bookingTime"
              className="border p-3 rounded-lg w-full"
              value={formData.bookingTime}
              onChange={handleChange}
              required
            />

          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Special Request (Optional)"
            className="border p-3 rounded-lg w-full"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-bold ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            {loading ? "Booking..." : "Book Table"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default BookTable;