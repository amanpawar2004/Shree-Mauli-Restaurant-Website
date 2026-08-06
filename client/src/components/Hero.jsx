import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#FFF8F0] py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="order-2 lg:order-1"
          >

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-yellow-200 text-red-900 px-4 py-2 rounded-full font-semibold"
            >
              ⭐ 4.8 Google Rating
            </motion.span>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#8B1E1E] mt-6"
            >
              श्री माऊली
            </motion.h1>

            <motion.h2
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-gray-800 mt-4"
            >
              Authentic Maharashtrian Pure Veg Restaurant
            </motion.h2>

            <motion.p
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-600 mt-6 text-lg leading-8"
            >
              Enjoy the rich flavours of traditional Maharashtrian cuisine,
              prepared with fresh ingredients, authentic recipes and warm hospitality.
            </motion.p>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-5 mt-8">

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="bg-white rounded-xl shadow-lg p-5 text-center"
              >
                <div className="text-4xl">🥗</div>

                <h3 className="font-bold mt-3">
                  100% Pure Veg
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Fresh Ingredients
                </p>

              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="bg-white rounded-xl shadow-lg p-5 text-center"
              >
                <div className="text-4xl">🕒</div>

                <h3 className="font-bold mt-3">
                  11 AM – 11 PM
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Open Daily
                </p>

              </motion.div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  to="/menu"
                  className="bg-yellow-400 hover:bg-yellow-300 px-8 py-4 rounded-xl font-bold shadow-lg block text-center"
                >
                  🍽 View Menu
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <a
                  href="https://wa.me/919921291202"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg block text-center"
                >
                  💬 WhatsApp
                </a>
              </motion.div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="order-1 lg:order-2 flex justify-center"
          >

            <motion.img
              src={hero}
              alt="Restaurant"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl"
            />

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;