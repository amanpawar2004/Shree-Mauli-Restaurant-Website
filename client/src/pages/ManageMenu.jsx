import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getMenu, deleteMenu } from "../api/menuApi";

function ManageMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await getMenu();
      setMenu(res.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch menu.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this dish?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMenu(id);

      alert("✅ Menu Deleted Successfully");

      fetchMenu();
    } catch (error) {
      console.log(error);
      alert("❌ Delete Failed");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-[#8B1E1E]">
            🍽️ Manage Menu
          </h1>

          <Link
            to="/admin/add-menu"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold"
          >
            ➕ Add Dish
          </Link>

        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

          <table className="w-full">

            <thead className="bg-red-700 text-white">
              <tr>
                <th className="py-4">Image</th>
                <th>Dish</th>
                <th>Category</th>
                <th>Price</th>
                <th>Available</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {menu.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No Menu Items Found
                  </td>
                </tr>
              ) : (
                menu.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b text-center hover:bg-gray-50"
                  >

                    <td className="py-3">
                      <img
                        src={
                          item.image
                            ? item.image
                            : "https://placehold.co/80x80?text=No+Image"
                        }
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg mx-auto"
                      />
                    </td>

                    <td className="font-semibold">
                      {item.name}
                    </td>

                    <td>{item.category}</td>

                    <td>₹{item.price}</td>

                    <td>
                      {item.isAvailable ? "✅" : "❌"}
                    </td>

                    <td className="space-x-2">

                      <Link
                        to={`/admin/edit-menu/${item._id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default ManageMenu;