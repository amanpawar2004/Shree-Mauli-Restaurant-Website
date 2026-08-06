import { motion } from "framer-motion";
import { FaLeaf, FaStar } from "react-icons/fa";

function MenuCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <motion.img
          src={item.image}
          alt={item.name}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
          <FaLeaf />
          Pure Veg
        </div>

        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-2 text-sm">
          <FaStar />
          Bestseller
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-[#8B1E1E]">
            {item.name}
          </h2>

          <motion.span
            whileHover={{
              scale: 1.1,
            }}
            className="text-2xl font-bold text-green-700"
          >
            ₹{item.price}
          </motion.span>

        </div>

        <p className="text-gray-600 mt-3 h-16">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm">
            {item.category}
          </span>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-[#8B1E1E] text-white px-5 py-2 rounded-xl"
          >
            View Details
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}

export default MenuCard;