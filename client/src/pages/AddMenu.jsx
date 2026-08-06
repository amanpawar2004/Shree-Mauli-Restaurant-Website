import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../api/menuApi";

function AddMenu() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    isAvailable: true,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Text Input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("isAvailable", formData.isAvailable);

      if (image) {
        data.append("image", image);
      }

      await addMenu(data);

      alert("✅ Dish Added Successfully");

      navigate("/manage-menu");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to Add Dish");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-[#8B1E1E] mb-8">
          ➕ Add New Dish
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Dish Name */}

          <input
            type="text"
            name="name"
            placeholder="Dish Name"
            className="w-full border p-3 rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Category */}

          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full border p-3 rounded-lg"
            value={formData.category}
            onChange={handleChange}
            required
          />

          {/* Description */}

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            className="w-full border p-3 rounded-lg"
            value={formData.description}
            onChange={handleChange}
            required
          />

          {/* Price */}

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border p-3 rounded-lg"
            value={formData.price}
            onChange={handleChange}
            required
          />

          {/* Image Upload */}

          <div>

            <label className="block font-semibold mb-2">
              Upload Dish Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full border p-3 rounded-lg"
              required
            />

          </div>

          {/* Image Preview */}

          {preview && (

            <div className="flex justify-center">

              <img
                src={preview}
                alt="Preview"
                className="w-52 h-52 rounded-xl object-cover shadow-lg"
              />

            </div>

          )}

          {/* Availability */}

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />

            <span>Available</span>

          </label>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-bold ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            {loading ? "Uploading..." : "Save Dish"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddMenu;