import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import {
  getMessages,
  deleteMessage,
} from "../api/messageApi";

function ManageMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await getMessages();
      setMessages(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMessage(id);

      alert("✅ Message Deleted Successfully");

      fetchMessages();
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
          📩 Customer Messages
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

          <table className="w-full">

            <thead className="bg-indigo-700 text-white">

              <tr>
                <th className="py-4">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {messages.length === 0 ? (

                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10"
                  >
                    No Messages Found
                  </td>
                </tr>

              ) : (

                messages.map((msg) => (

                  <tr
                    key={msg._id}
                    className="border-b hover:bg-gray-50 text-center"
                  >

                    <td className="font-semibold py-4">
                      {msg.name}
                    </td>

                    <td>{msg.email}</td>

                    <td>{msg.phone}</td>

                    <td>{msg.subject}</td>

                    <td className="max-w-xs px-4">
                      <div className="truncate">
                        {msg.message}
                      </div>
                    </td>

                    <td>

                      <button
                        onClick={() => handleDelete(msg._id)}
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

export default ManageMessages;