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
  BarController
);

const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const CHART_URL =
    "https://api.stats.routerprotocol.com/api/aggregated/byday?days=30";

  useEffect(() => {
    axios.get(CHART_URL).then((res) => {
      setChartData(res.data.data);
    });
  }, [chartData]);

  const lineChartOne = (
    <Line
      data={{
        labels: chartData.map((date) =>
          new Date(date.to_char).toLocaleDateString()
        ),
        datasets: [
          {
            data: chartData.map((item) => item.volume),
            label: "30d",
            showLine: true,
            borderColor: "teal",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            fill: true,
          },
        ],
      }}
    />
  );
  const lineChartTwo = (
    <Line
      data={{
        labels: chartData.map((date) =>
          new Date(date.to_char).toLocaleDateString()
        ),
        datasets: [
          {
            data: chartData.map((item) => item.transactions),
            label: "30d",
            showLine: true,
            borderColor: "teal",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            fill: {
              target: "origin", // Area will be red above the origin
              below: "rgb(0, 0, 255)", // And blue below the origin
            },
          },
        ],
      }}
    />
  );

  return (
    <div className="flex justify-center">
      <div className="h-[40%] w-[40%]">{lineChartOne}</div>
      <div className="h-[40%] w-[40%]">{lineChartTwo}</div>
    </div>
  );
};
export default Charts;
