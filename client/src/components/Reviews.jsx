import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Patil",
    review:
      "Amazing Maharashtrian food. Paneer Butter Masala was delicious and service was excellent.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    review:
      "Beautiful ambience and fresh food. Highly recommended for family dinner.",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    review:
      "Best Pure Veg Restaurant in Amravati. Great taste and affordable prices.",
    rating: 5,
  },
];

function Reviews() {
  return (
    <section className="bg-[#FFF8F0] py-20">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold text-[#8B1E1E]">
            Happy Customers
          </h2>

          <p className="text-gray-600 mt-4">
            See what our customers say about us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <FaQuoteLeft className="text-4xl text-[#8B1E1E] mb-5" />

              <div className="flex gap-1 mb-4">

                {[...Array(review.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="text-gray-600 leading-8">
                {review.review}
              </p>

              <h3 className="mt-6 text-xl font-bold text-[#8B1E1E]">
                {review.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;