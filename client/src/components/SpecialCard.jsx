function SpecialCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold text-red-900">
          {item.name}
        </h3>

        <p className="text-gray-600 mt-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-xl font-bold text-yellow-600">
            {item.price}
          </span>

          <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;