import maharajImage from "../assets/images/gajanan-maharaj.jpg";

function About() {
  return (
    <div className="bg-[#FFF8F0] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#8B1E1E]">
            About Shree Mauli
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Authentic Maharashtrian Pure Veg Restaurant
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

          <h2 className="text-3xl font-bold text-[#8B1E1E] mb-4">
            Our Story
          </h2>

          <p className="text-gray-700 leading-8">
            Shree Mauli Restaurant is dedicated to serving authentic
            Maharashtrian Pure Veg cuisine prepared with love, freshness,
            and traditional recipes. Since 2020, we have welcomed
            families, students, travelers, and food lovers with
            delicious homemade-style meals in a clean and comfortable
            environment.
          </p>

        </div>

        {/* Blessings Section */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="flex justify-center">

              <img
                src={maharajImage}
                alt="Sant Gajanan Maharaj"
                className="rounded-2xl shadow-lg w-full max-w-sm"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#8B1E1E] mb-5">
                With Divine Blessings
              </h2>

              <p className="text-gray-700 leading-8 text-lg">
                At <strong>Shree Mauli Restaurant</strong>, every meal is
                prepared with devotion, care, and respect for our traditions.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                With the blessings of <strong>Sant Gajanan Maharaj</strong>,
                we are committed to serving delicious, hygienic, and authentic
                Maharashtrian Pure Veg food that brings families together.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                We believe that good food prepared with sincerity creates
                memorable experiences for every guest who visits us.
              </p>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <h3 className="text-5xl mb-3">🥗</h3>

            <h3 className="text-xl font-bold text-[#8B1E1E]">
              Pure Veg
            </h3>

            <p className="text-gray-600 mt-2">
              100% Pure Vegetarian Food
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <h3 className="text-5xl mb-3">🌿</h3>

            <h3 className="text-xl font-bold text-[#8B1E1E]">
              Fresh Ingredients
            </h3>

            <p className="text-gray-600 mt-2">
              Fresh vegetables and premium quality spices are used every day.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <h3 className="text-5xl mb-3">👨‍🍳</h3>

            <h3 className="text-xl font-bold text-[#8B1E1E]">
              Expert Chefs
            </h3>

            <p className="text-gray-600 mt-2">
              Experienced chefs preparing authentic Maharashtrian recipes.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <h3 className="text-5xl mb-3">⭐</h3>

            <h3 className="text-xl font-bold text-[#8B1E1E]">
              Customer First
            </h3>

            <p className="text-gray-600 mt-2">
              Delicious food, hygiene, and excellent service are our priority.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;