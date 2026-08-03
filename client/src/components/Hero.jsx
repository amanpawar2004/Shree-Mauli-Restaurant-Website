import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#FFF8F0] py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div className="order-2 lg:order-1">

            <span className="inline-block bg-yellow-200 text-red-900 px-4 py-2 rounded-full font-semibold text-sm md:text-base">
              ⭐ 4.8 Google Rating
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#8B1E1E] mt-6">
              श्री माऊली
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4 leading-snug">
              Authentic Maharashtrian Pure Veg Restaurant
            </h2>

            <p className="text-gray-600 mt-6 text-base md:text-lg leading-8">
              Enjoy the rich flavours of traditional Maharashtrian cuisine,
              prepared with fresh ingredients, authentic recipes, and warm
              hospitality.
            </p>

            {/* Highlights */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-2xl transition">
                <div className="text-4xl">🥗</div>

                <h3 className="font-bold mt-3">
                  100% Pure Veg
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Fresh Ingredients
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-2xl transition">
                <div className="text-4xl">🕒</div>

                <h3 className="font-bold mt-3">
                  11 AM – 11 PM
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Open Daily
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                to="/menu"
                className="bg-yellow-400 hover:bg-yellow-300 px-8 py-4 rounded-xl font-bold text-center shadow-lg transition"
              >
                🍽 View Menu
              </Link>

              <a
                href="https://wa.me/919921291202"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-center shadow-lg transition"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

          {/* Right Image */}

          <div className="order-1 lg:order-2 flex justify-center">

            <img
              src={hero}
              alt="Shree Mauli Restaurant"
              className="w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl object-cover"
            />

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;