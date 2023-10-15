import React, { useState, useEffect } from "react";

export default function Labels() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    // Fetch labels when the component mounts
    fetchLabels();
  }, []);

  const fetchLabels = async () => {
    try {
      const response = await fetch("http://localhost:5050/api/labels");
      if (response.ok) {
        const data = await response.json();
        setLabels(data);
        console.log("labels", data)
      } else {
        console.error("Failed to fetch labels");
      }
    } catch (error) {
      console.error("Error fetching labels:", error);
    }
  };

  const totalAmount = labels.reduce((total, label) => total + (label.amount || 0), 0);

  return (
    <div>
      <h2>Total Amount: {totalAmount}</h2>
      <div className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <LabelComponent key={index} data={label} totalAmount={totalAmount} />
        ))}
      </div>
    </div>
  );
}

function LabelComponent({ data, totalAmount }) {
  if (!data) return <></>;
  const percent = ((data.amount || 0) / totalAmount) * 100;
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-auto rounded py-2"
          style={{ background: data.color || "#f9c74f" }}
        ></div>
        <h3 className="text-md">{data.name || ""}</h3>
      </div>
      <h3 className="font-bold">
        {percent.toFixed(2)}% 
      </h3>
    </div>
  );
}
