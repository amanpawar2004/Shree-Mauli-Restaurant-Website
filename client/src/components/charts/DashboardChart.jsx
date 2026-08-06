import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardChart({
  menu,
  bookings,
  messages,
}) {
  const data = {
    labels: [
      "Menu",
      "Bookings",
      "Messages",
    ],

    datasets: [
      {
        label: "Restaurant Data",
        data: [menu, bookings, messages],
        backgroundColor: [
          "#DC2626",
          "#7C3AED",
          "#2563EB",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Dashboard Analytics
      </h2>

      <Bar data={data} />

    </div>
  );
}

export default DashboardChart;