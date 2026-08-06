import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/adminApi";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginAdmin(formData);

      // Save JWT Token
      localStorage.setItem("token", res.data.token);

      alert("✅ Login Successful");

      // Redirect to Admin Dashboard
      navigate("/admin/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message || "❌ Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-red-700 mb-2">
          🔐 Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Shree Mauli Restaurant Management System
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-bold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdminLogin;