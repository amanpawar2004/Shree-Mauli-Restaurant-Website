import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMenu, updateMenu } from "../api/menuApi";

function EditMenu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
    isAvailable: true,
  });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await getSingleMenu(id);

      setFormData({
        name: res.data.data.name || "",
        category: res.data.data.category || "",
        description: res.data.data.description || "",
        price: res.data.data.price || "",
        image: res.data.data.image || "",
        isAvailable: res.data.data.isAvailable,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to load menu item.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateMenu(id, formData);

      alert("✅ Menu Updated Successfully");

      navigate("/admin/manage-menu");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update menu.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-[#8B1E1E] mb-8">
          ✏️ Edit Dish
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Dish Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />
            Available
          </label>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold"
          >
            Update Dish
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditMenu;