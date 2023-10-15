import React from "react";
import "boxicons";

const object = [
  {
    name: "Savings",
    color: "#f9c74f",
  },
  {
    name: "Investment",
    color: "#f9c74f",
  },
  {
    name: "Expense",
    color: "rgb(54, 162, 235)",
  },
];

export default function List() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {object.map((value, index) => (
        <Transactions key={index} category={value} />
      ))}
    </div>
  );
}

function Transactions({ category }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon name="trash" size="20px" color={category.color ?? "#e5e5e5"}/>
      </button>
      <span className="w-full block">{category.name ?? ""}</span>
    </div>
  );
}
