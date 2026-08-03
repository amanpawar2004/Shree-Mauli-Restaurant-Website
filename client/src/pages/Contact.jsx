import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
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

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#8B1E1E] mb-6">
              Restaurant Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-700 text-2xl" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>
                    Shri Mauli Restaurant,
                    Bhatkuli Road,
                    Amravati, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-700 text-2xl" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <a
                    href="tel:+919921291202"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9921291202
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
                <div>
                  <h3 className="font-bold">WhatsApp</h3>

                  <a
                    href="https://wa.me/919921291202"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>

                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-red-700 text-2xl" />
                <div>
                  <h3 className="font-bold">Opening Hours</h3>
                  <p>11:00 AM – 11:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=Amravati,Maharashtra&output=embed"
              width="100%"
              height="500"
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