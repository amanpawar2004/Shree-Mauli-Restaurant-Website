import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#8B1E1E] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Restaurant */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl font-bold text-yellow-400">
              श्री माऊली
            </h2>

            <p className="mt-4 text-gray-200 leading-7">
              Authentic Maharashtrian Pure Veg Restaurant
              serving delicious food with love and tradition.
            </p>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhoneAlt />
                <span>+91 9921291202</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt />
                <span>Amravati, Maharashtra</span>
              </div>

              <div className="flex gap-3">
                <FaClock />
                <span>11:00 AM – 11:00 PM</span>
              </div>

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-yellow-300 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-yellow-300 transition cursor-pointer">
                Menu
              </li>

              <li className="hover:text-yellow-300 transition cursor-pointer">
                Gallery
              </li>

              <li className="hover:text-yellow-300 transition cursor-pointer">
                Contact
              </li>

            </ul>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <motion.a
                whileHover={{
                  scale: 1.25,
                  rotate: 10,
                }}
                href="#"
              >
                <FaFacebook />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.25,
                  rotate: 10,
                }}
                href="#"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.25,
                  rotate: 10,
                }}
                href="https://wa.me/919921291202"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </motion.a>

            </div>

          </motion.div>

        </div>

        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="border-gray-500 my-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-300"
        >
          © {new Date().getFullYear()} Shri Mauli Restaurant.
          All Rights Reserved.
        </motion.p>

      </div>

    </footer>
  );
}

export default Footer;