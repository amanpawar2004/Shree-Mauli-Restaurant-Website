import { motion } from "framer-motion";
import {
  FaUsers,
  FaUtensils,
  FaStar,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "5000+",
    title: "Happy Customers",
  },
  {
    icon: <FaUtensils />,
    number: "50+",
    title: "Delicious Dishes",
  },
  {
    icon: <FaStar />,
    number: "4.8",
    title: "Google Rating",
  },
  {
    icon: <FaAward />,
    number: "Since 2020",
    title: "Serving Quality",
  },
];

function HeroStats() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-[#FFF8F0] rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-4xl text-[#8B1E1E] flex justify-center mb-4"
              >
                {item.icon}
              </motion.div>

              <h2 className="text-3xl font-bold text-[#8B1E1E]">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HeroStats;