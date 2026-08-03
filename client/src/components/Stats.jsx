function Stats() {
  const stats = [
    {
      number: "5000+",
      title: "Happy Customers",
    },
    {
      number: "100+",
      title: "Food Items",
    },
    {
      number: "4.8★",
      title: "Customer Rating",
    },
    {
      number: "Since 2020",
      title: "Serving Quality Food",
    },
  ];

  return (
    <section className="bg-[#8B1E1E] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white">
            Our Achievements
          </h2>

          <p className="text-yellow-300 mt-4 text-lg">
            Thank you for your love and support.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-5xl font-bold text-[#8B1E1E]">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-700 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;