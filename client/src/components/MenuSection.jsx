import MenuCard from "./MenuCard";

const popularItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: "₹151",
  },
  {
    id: 2,
    name: "Veg Kolhapuri",
    price: "₹121",
  },
  {
    id: 3,
    name: "Shri Thali",
    price: "₹101",
  },
];

function MenuSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-red-900">
          Popular Dishes
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Our customers' favourite dishes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {popularItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default MenuSection;