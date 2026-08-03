function WhyChooseUs() {
  const features = [
    {
      icon: "🥗",
      title: "100% Pure Veg",
      description: "Authentic vegetarian food prepared with fresh ingredients.",
    },
    {
      icon: "🍲",
      title: "Authentic Maharashtrian Taste",
      description: "Traditional recipes with rich flavours and homemade taste.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Family Friendly",
      description: "Comfortable dining experience for families and friends.",
    },
    {
      icon: "🧼",
      title: "Clean & Hygienic",
      description: "High standards of cleanliness and food safety.",
    },
    {
      icon: "🚗",
      title: "Parking Available",
      description: "Convenient parking space for customers.",
    },
    {
      icon: "🥡",
      title: "Takeaway & Parcel",
      description: "Quick takeaway and parcel service available.",
    },
    {
      icon: "🏠",
      title: "Home Delivery",
      description: "Fresh food delivered to your doorstep.",
    },
    {
      icon: "💳",
      title: "UPI & Card Payment",
      description: "Easy and secure digital payment options accepted.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#8B1E1E]">
            Why Choose Shree Mauli?
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Serving delicious food with quality, hygiene, and hospitality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFF8F0] rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#8B1E1E]">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;