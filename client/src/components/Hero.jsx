
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaLeaf,
  FaClock,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF9F3]">

      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-16">

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >

            {/* Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-semibold text-[#7F1D1D] shadow-sm"
            >
              <FaStar className="text-yellow-500" />
              <span>4.8 Google Rating</span>
            </motion.div>

            {/* Restaurant Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-serif text-5xl font-bold leading-tight text-[#8B1E1E] sm:text-6xl lg:text-[4.5rem]"
            >
              श्री माऊली
            </motion.h1>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 max-w-xl text-2xl font-bold leading-snug text-slate-800 sm:text-3xl"
            >
              Authentic Maharashtrian{" "}
              <span className="text-[#8B1E1E]">
                Pure Veg
              </span>{" "}
              Restaurant
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              Enjoy the rich flavours of traditional Maharashtrian cuisine,
              prepared with fresh ingredients, authentic recipes and warm
              hospitality.
            </motion.p>

            {/* =====================================================
                FEATURE CARDS
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-7 grid max-w-xl grid-cols-2 gap-4"
            >

              {/* Pure Veg */}
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FaLeaf />
                </div>

                <h3 className="text-sm font-bold text-slate-800 sm:text-base">
                  100% Pure Veg
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Fresh Ingredients
                </p>

              </div>

              {/* Opening Hours */}
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                  <FaClock />
                </div>

                <h3 className="text-sm font-bold text-slate-800 sm:text-base">
                  11 AM – 11 PM
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Open Daily
                </p>

              </div>

            </motion.div>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >

              {/* View Menu */}
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#8B1E1E] px-7 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#721717] hover:shadow-xl"
              >
                <span>View Menu</span>

                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8010167434"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white px-7 py-3.5 font-bold text-green-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white hover:shadow-xl"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </a>

            </motion.div>

          </motion.div>


          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex min-w-0 justify-center lg:justify-end"
          >

            {/* Image + Caption Container */}
            <div className="relative w-full max-w-[560px]">

              {/* Yellow Decorative Circle */}
              <div className="absolute -right-4 -top-4 z-0 h-24 w-24 rounded-full border-[10px] border-yellow-300/60 sm:-right-6 sm:-top-6 sm:h-28 sm:w-28" />

              {/* =================================================
                  FOOD IMAGE
              ================================================== */}
              <div className="relative z-10 overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#F3E7D8] shadow-2xl">

                <img
                  src={hero}
                  alt="Traditional Maharashtrian pure vegetarian thali"
                  className="block h-auto w-full object-contain"
                />

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-black/65 px-4 py-2 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-medium text-white sm:text-sm">
                    🌿 Fresh • Traditional • Pure Vegetarian
                  </p>
                </div>

              </div>


              {/* =================================================
                  TASTE THE TRADITION
                  COMPLETELY BELOW IMAGE
              ================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="relative z-20 mx-auto mt-5 w-[92%] rounded-2xl border border-red-100 bg-white px-5 py-4 text-center shadow-xl sm:mt-6 sm:w-[80%] sm:px-6 sm:py-5"
              >

                {/* Stars */}
                <div className="flex justify-center gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Main Message */}
                <p className="mt-2 text-lg font-bold text-[#8B1E1E] sm:text-xl">
                  Taste the tradition ❤️
                </p>

                {/* Supporting Message */}
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Authentic Maharashtrian flavours, made with love.
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
