import React from "react";

const object = [
  {
    type: "Savings",
    color: "#f9c74f",
    percent: 45,
  },
  {
    type: "Investment",
    color: "#f9c74f",
    percent: 20,
  },
  {
    type: "Expense",
    color: "rgb(54, 162, 235)",
    percent: 10,
  },
];

export default function Labels() {
  return (
    <>
      {object.map((value, index) => (
        <LabelComponent key={index} data={value} />
      ))}
    </>
  );
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-auto rounded py-2"
          style={{ background: data.color ?? "#f9c74f" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
}
