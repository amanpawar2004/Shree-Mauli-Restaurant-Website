import { useState } from "react";
import { askAI } from "../api/aiApi";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

function AIChat() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Welcome to Shree Mauli Restaurant! Ask me anything about our menu.",
    },
  ]);

  const suggestions = [
    "Recommend paneer dishes",
    "Dinner for two under ₹600",
    "Suggest spicy food",
    "Best dish under ₹300",
  ];

  const sendMessage = async () => {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setLoading(true);

    try {
      const res = await askAI(question);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.data.answer,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ AI Assistant is currently unavailable.",
        },
      ]);
    }

    setQuestion("");
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 bg-red-700 text-white w-16 h-16 rounded-full shadow-xl z-50"
      >
        {open ? <FaTimes size={25} /> : <FaRobot size={28} />}
      </button>

      {open && (
        <div className="fixed bottom-24 left-6 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50">

          <div className="bg-red-700 text-white p-4 flex justify-between">

            <div>
              <h2 className="text-xl font-bold">
                🤖 AI Food Assistant
              </h2>

              <p className="text-sm">
                Powered by Groq AI
              </p>
            </div>

            <button
              onClick={() =>
                setMessages([
                  {
                    sender: "ai",
                    text: "👋 Welcome back!",
                  },
                ])
              }
            >
              Clear
            </button>

          </div>

          <div className="h-96 overflow-y-auto p-4 bg-gray-100">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.sender === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-4 py-3 rounded-xl max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-red-700 text-white"
                      : "bg-white border"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-gray-500 animate-pulse">
                🤖 AI is thinking...
              </div>
            )}

          </div>

          <div className="p-3 flex flex-wrap gap-2 border-t">

            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => setQuestion(item)}
                className="bg-gray-200 hover:bg-red-100 rounded-full px-3 py-2 text-sm"
              >
                {item}
              </button>
            ))}

          </div>

          <div className="flex border-t">

            <input
              className="flex-1 p-3 outline-none"
              placeholder="Ask about food..."
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              className="bg-red-700 text-white px-5"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default AIChat;