import axios from "axios";
import { useEffect, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  BarElement,
  BarController,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  BarElement,
  BarController,
  Filler
);

const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const CHART_URL =
    "https://api.stats.routerprotocol.com/api/aggregated/byday?days=90";

  useEffect(() => {
    axios.get(CHART_URL).then((res) => {
      setChartData(res.data.data);
    });
  }, [chartData]);

  const lineChartOne = (
    <Line
      data={{
        labels: chartData.map((date) => date.to_char.slice(0, 2)),
        datasets: [
          {
            data: chartData.map((item) => item.volume),
            label: "Transactions",
            showLine: true,
            borderColor: "#620F38",
            backgroundColor: "rgba(100, 0, 0, 0.3)",
            tension: 0.4,
            fill: true,
          },
        ],
      }}
    />
  );
  const lineChartTwo = (
    <Line
      data={{
        labels: chartData.map((date) => date.to_char.slice(0, 2)),
        datasets: [
          {
            data: chartData.map((item) => item.transactions),
            label: "Volume",
            title: "Volume",
            showLine: true,
            borderColor: "#194AA3",
            backgroundColor: "rgba(0,0,100,0.3)",
            tension: 0.4,
            fill: true,
          },
        ],
      }}
    />
  );

  return (
    <div className="bg-[#1D191F] w-full rounded-2xl opacity-80">
      <div className="flex justify-center p-4  mt-10">
        <div className="h-[50%] w-[50%]">{lineChartOne}</div>
        <div className="h-[50%] w-[50%]">{lineChartTwo}</div>
      </div>
      <div className="flex flex-row space-x-2 px-4 py-2 font-semibold">
        <h1 className="text-gray-400 ">Transactions(24hr):</h1>
        <p className=""> 219</p>
        <p className="text-red-600 shadow-lg"> 30.36%</p>
        <h1 className="text-gray-400 ">Volume (24hr):</h1>
        <p className="">$179.26k </p>{" "}
        <p className="text-red-600 shadow-lg">84.32%</p>
      </div>
    </div>
  );
};
export default Charts;
