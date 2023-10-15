import React, { useEffect, useState } from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";
import axios from "axios";
import { useTransaction } from "./AppContext";

Chart.register(ArcElement);

const Graph = () => {
  const { transactions } = useTransaction(); 
  const [labelsData, setLabelsData] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5050/api/labels')
      .then((response) => setLabelsData(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setPercentage(total);
  }, [transactions]);

  const dynamicConfig = {
    data: {
      datasets: [
        {
          data: transactions.map((label) => label.amount),
          backgroundColor: labelsData.map((label) => label.color),
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...dynamicConfig} />
          <h3 className="mb-4 font-bold absolute left-0 right-0 top-[40%] ml-auto mr-auto">
            Total
            <span className="block text-3xl text-emerald-400">${percentage}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
