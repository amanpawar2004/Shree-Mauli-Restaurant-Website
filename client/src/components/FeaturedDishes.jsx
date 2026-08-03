import paneer from "../assets/images/paneer.jpg";
import veg from "../assets/images/vegkolhapuri.jpg";
import thali from "../assets/images/thali.jpg";

const dishes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    image: paneer,
    price: "₹151",
    description: "Soft paneer cubes cooked in rich tomato gravy.",
  },
  {
    id: 2,
    name: "Veg Kolhapuri",
    image: veg,
    price: "₹121",
    description: "Traditional spicy Maharashtrian mixed vegetable curry.",
  },
  {
    id: 3,
    name: "Shri Special Thali",
    image: thali,
    price: "₹101",
    description: "Complete Maharashtrian meal with authentic flavours.",
  },
];

function FeaturedDishes() {
  return (
    <section className="bg-[#FFF8F0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#8B1E1E]">
            Featured Dishes
          </h2>

          <p className="text-gray-600 mt-4">
            Our most loved dishes by customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#8B1E1E]">
                  {dish.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {dish.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-2xl font-bold text-green-700">
                    {dish.price}
                  </span>

                  <a
                    href="https://wa.me/919921291202"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-lg"
                  >
                    Order
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedDishes;