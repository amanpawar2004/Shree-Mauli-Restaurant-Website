import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { sendMessage } from "../api/messageApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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

      await sendMessage(formData);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to Send Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#8B1E1E]">
            Contact Us
          </h1>

          <p className="text-lg text-gray-600 mt-4">
            We'd love to serve you. Visit us or get in touch.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#8B1E1E] mb-6">
              Restaurant Information
            </h2>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-red-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold">
                    Address
                  </h3>

                  <p>
                    Shri Mauli Restaurant
                    <br />
                    Dastur Nagar
                    <br />
                    Amravati, Maharashtra 444606
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-red-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <a
                    href="tel:+918010167434"
                    className="text-blue-600 hover:underline"
                  >
                    +91 8010167434
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <FaWhatsapp className="text-green-600 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold">
                    WhatsApp
                  </h3>

                  <a
                    href="https://wa.me/918010167434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <FaClock className="text-red-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold">
                    Opening Hours
                  </h3>

                  <p>
                    10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#8B1E1E] mb-6">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=Amravati,Maharashtra&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;