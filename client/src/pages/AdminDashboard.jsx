import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getMenu } from "../api/menuApi";
import { getBookings } from "../api/bookingApi";
import { getMessages } from "../api/messageApi";

import DashboardChart from "../components/charts/DashboardChart";

function AdminDashboard() {
  const navigate = useNavigate();

  const [menuCount, setMenuCount] = useState(0);
  const [availableCount, setAvailableCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Menu
      const menuRes = await getMenu();
      const menu = menuRes.data.data;

      setMenuCount(menu.length);

      setAvailableCount(
        menu.filter((item) => item.isAvailable).length
      );

      setCategoryCount(
        [...new Set(menu.map((item) => item.category))].length
      );

      // Bookings
      const bookingRes = await getBookings();
      setBookingCount(bookingRes.data.count);

      // Messages
      const messageRes = await getMessages();
      setMessageCount(messageRes.data.count);

    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-red-800 text-white p-5 flex justify-between items-center shadow-lg">

        <h1 className="text-3xl font-bold">
           Shree Mauli Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-white text-red-700 px-5 py-2 rounded-lg font-bold hover:bg-gray-200"
        >
          Logout
        </button>

      </div>

      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-4xl font-bold mb-10">
          Dashboard
        </h2>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-xl font-bold"> Menu Items</h3>
            <p className="text-5xl font-bold text-red-700 mt-4">
              {menuCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-xl font-bold"> Bookings</h3>
            <p className="text-5xl font-bold text-purple-700 mt-4">
              {bookingCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-xl font-bold"> Messages</h3>
            <p className="text-5xl font-bold text-blue-700 mt-4">
              {messageCount}
            </p>
          </div>

        </div>

        {/* Management Buttons */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">

          <Link
            to="/admin/add-menu"
            className="bg-red-700 hover:bg-red-800 text-white rounded-xl p-6 text-center transition"
          >
            <h3 className="text-xl font-bold"> Add Menu</h3>
          </Link>

          <Link
            to="/admin/manage-menu"
            className="bg-green-700 hover:bg-green-800 text-white rounded-xl p-6 text-center transition"
          >
            <h3 className="text-xl font-bold">Manage Menu</h3>
          </Link>

          <Link
            to="/admin/manage-bookings"
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-xl p-6 text-center transition"
          >
            <h3 className="text-xl font-bold">Bookings</h3>
          </Link>

          <Link
            to="/admin/manage-messages"
            className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl p-6 text-center transition"
          >
            <h3 className="text-xl font-bold">Messages</h3>
          </Link>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl p-6 text-center transition"
          >
            <h3 className="text-xl font-bold">🌐 Website</h3>
          </a>

        </div>

        {/* Statistics */}

        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Restaurant Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-600">
                Available Dishes
              </h3>
              <p className="text-5xl font-bold text-green-700 mt-3">
                {availableCount}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-600">
                Categories
              </h3>
              <p className="text-5xl font-bold text-blue-700 mt-3">
                {categoryCount}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-600">
                Customer Messages
              </h3>
              <p className="text-5xl font-bold text-purple-700 mt-3">
                {messageCount}
              </p>
            </div>

          </div>

        </div>

        {/* Dashboard Chart */}

        <DashboardChart
          menu={menuCount}
          bookings={bookingCount}
          messages={messageCount}
        />

      </div>

    </div>
  );
}

export default AdminDashboard;