import React, { useEffect } from "react";
import "boxicons";
import axios from "axios";
import { useTransaction } from "./AppContext";

export default function List() {
  const { transactions, deleteTransaction } = useTransaction();

  const handleDeleteTransaction = async (transactionId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/transaction/${transactionId}`
      );
      if (response.status === 200) {
        console.log("Transaction deleted successfully");
        deleteTransaction(transactionId);
      } else {
        console.error("Failed to delete transaction");
        console.error(response.data);
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
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

  function Transactions({ transaction }) {
    if (!transaction) return null;
    return (
      <div
        className="item flex justify-center bg-gray-50 py-2 rounded-r"
        style={{ borderRight: `8px solid ${transaction.color || "#e5e5e5"}` }}
      >
        <button
          className="px-3"
          onClick={() => handleDeleteTransaction(transaction._id)}
        >
          <box-icon
            name="trash"
            size="20px"
            color={transaction.color || "#e5e5e5"}
          />
        </button>
        <span className="w-full block">{transaction.name || ""}</span>
      </div>
    );
  }
}
