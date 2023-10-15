import React, { useState, useEffect } from "react";
import "boxicons";
import axios from "axios";

export default function List() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:5050/api/transaction");
      if (response.ok) {
        const data = await response.json();
        setTransactions(data);
        console.log("data", data);
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {transactions.map((transaction, index) => (
        <Transactions key={index} transaction={transaction} />
      ))}
    </div>
  );
}

const deleteTransaction = async (transactionId) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/transaction/${transactionId}`
    );
    if (response.status === 200) {
      window.alert("Transaction deleted successfully");
    } else {
      console.error("Failed to delete transaction");
      console.error(response.data); // Log the response data for debugging
    }
  } catch (error) {
    console.error("Error deleting transaction:", error);
  }
};


function Transactions({ transaction }) {
  if (!transaction) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${transaction.color || "#e5e5e5"}` }}
    >
       <button className="px-3" onClick={() => deleteTransaction(transaction._id)}>
            <box-icon name="trash" size="20px" color={transaction.color || "#e5e5e5"} />
          </button>
      <span className="w-full block">{transaction.name || ""}</span>
    </div>
  );
}
