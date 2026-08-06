import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import axios from "axios";

function FeaturedDishes() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");

      if (res.data.success) {
        setMenu(res.data.menu.slice(0, 6));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-[#8B1E1E]">
            Featured Dishes
          </h2>

          <p className="text-gray-600 mt-4">
            Taste our most loved Maharashtrian dishes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menu.map((item, index) => (

            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <div className="overflow-hidden">

                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="h-64 w-full object-cover"
                />

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <FaStar />
                    Best
                  </span>

                </div>

                <p className="text-gray-600 mt-3 h-14">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <motion.h4
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="text-3xl font-bold text-[#8B1E1E]"
                  >
                    ₹{item.price}
                  </motion.h4>

                  <motion.button
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="bg-[#8B1E1E] text-white px-5 py-2 rounded-xl"
                  >
                    View
                  </motion.button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="text-center mt-12">

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
              className="bg-yellow-400 px-8 py-4 rounded-xl font-bold"
            >
              Explore Full Menu
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedDishes;