import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import {
  getBookings,
  updateBooking,
  deleteBooking,
} from "../api/bookingApi";

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await getBookings();
      setBookings(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateBooking(id, { status });

      alert("✅ Booking Updated Successfully");

      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("❌ Update Failed");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBooking(id);

      alert("✅ Booking Deleted Successfully");

      fetchBookings();
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

        <h1 className="text-5xl font-bold text-[#8B1E1E] mb-8">
          📅 Manage Table Bookings
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

          <table className="w-full">

            <thead className="bg-purple-700 text-white">

              <tr>
                <th className="py-4">Customer</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Persons</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {bookings.length === 0 ? (

                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-10"
                  >
                    No Bookings Found
                  </td>
                </tr>

              ) : (

                bookings.map((booking) => (

                  <tr
                    key={booking._id}
                    className="border-b text-center hover:bg-gray-50"
                  >

                    <td className="font-semibold py-4">
                      {booking.name}
                    </td>

                    <td>{booking.phone}</td>

                    <td>{booking.email}</td>

                    <td>{booking.persons}</td>

                    <td>{booking.bookingDate}</td>

                    <td>{booking.bookingTime}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          booking.status === "Approved"
                            ? "bg-green-600"
                            : booking.status === "Rejected"
                            ? "bg-red-600"
                            : "bg-yellow-500"
                        }`}
                      >
                        {booking.status}
                      </span>

                    </td>

                    <td className="space-x-2">

                      <button
                        onClick={() =>
                          handleStatus(
                            booking._id,
                            "Approved"
                          )
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleStatus(
                            booking._id,
                            "Rejected"
                          )
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(booking._id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
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

export default ManageBookings;