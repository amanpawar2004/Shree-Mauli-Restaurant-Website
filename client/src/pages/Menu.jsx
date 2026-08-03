import { useState } from "react";
import menu from "../data/menu";
import weeklyMenu from "../data/weeklyMenu";

function Menu() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-[#8B1E1E]">
          Our Menu
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Authentic Maharashtrian Pure Veg Cuisine
        </p>

        {/* Search */}

        <div className="flex justify-center mt-10">

          <input
            type="text"
            placeholder="🔍 Search your favourite dish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 lg:w-1/2 border-2 border-yellow-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

        </div>

        {/* Sticky Categories */}

        <div className="sticky top-20 bg-[#FFF8F0] py-5 z-30">

          <div className="flex overflow-x-auto gap-3 pb-2">

            {Object.keys(menu).map((category) => (

              <a
                key={category}
                href={`#${category}`}
                className="whitespace-nowrap bg-yellow-400 hover:bg-yellow-300 px-5 py-2 rounded-full font-semibold transition"
              >
                {category.toUpperCase()}
              </a>

            ))}

          </div>

        </div>

        {/* Menu */}

        {Object.entries(menu).map(([category, items]) => {

          const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (

            <section
              id={category}
              key={category}
              className="scroll-mt-32 mb-16"
            >

              <h2 className="text-4xl font-bold text-[#8B1E1E] border-b-2 border-yellow-500 pb-3 mb-8 capitalize">
                {category}
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {filteredItems.map((item) => (

                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex justify-between items-center"
                  >

                    <div>

                      <h3 className="text-xl font-bold text-[#8B1E1E]">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm mt-2">
                        Freshly prepared with authentic Maharashtrian taste.
                      </p>

                    </div>

                    <div className="text-right">

                      <div className="text-2xl font-bold text-green-700">
                        {item.price}
                      </div>

                      {(item.id === 50 || item.id === 66) && (
                        <span className="inline-block mt-2 bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                          Chef's Special
                        </span>
                      )}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          );

        })}

        {/* Weekly Menu */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold text-center text-[#8B1E1E] mb-10">
            📅 Weekly Special Menu
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {weeklyMenu.map((item) => (

              <div
                key={item.day}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-t-4 border-yellow-500"
              >

                <h3 className="text-2xl font-bold text-[#8B1E1E] mb-4">
                  {item.day}
                </h3>

                <p>
                  <strong>🌞 Lunch:</strong> {item.lunch}
                </p>

                <p className="mt-3">
                  <strong>🌙 Dinner:</strong> {item.dinner}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>
    </div>
  );
}

export default Menu;