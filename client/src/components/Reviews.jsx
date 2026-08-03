function Reviews() {
  const reviews = [
    {
      name: "Rahul Patil",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Amazing Maharashtrian food with authentic taste. Highly recommended for families.",
    },
    {
      name: "Sneha Deshmukh",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "The Special Thali was delicious. Clean restaurant and friendly staff.",
    },
    {
      name: "Amit Sharma",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Excellent service, hygienic environment, and great value for money.",
    },
  ];

  return (
    <section className="bg-[#FFF8F0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#8B1E1E]">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Trusted by families and food lovers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-2xl mb-4">
                {review.rating}
              </div>

              <p className="text-gray-700 leading-7 italic">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-[#8B1E1E]">
                — {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;