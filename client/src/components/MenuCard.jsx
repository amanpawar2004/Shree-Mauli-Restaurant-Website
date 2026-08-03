function MenuCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

      <h3 className="text-2xl font-bold text-red-900">
        {item.name}
      </h3>

      <div className="flex justify-between items-center mt-5">

        <span className="text-2xl font-bold text-green-700">
          {item.price}
        </span>

        <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800">
          Order
        </button>

      </div>

    </div>
  );
}

export default MenuCard;