import React, { useState } from "react";
import { useForm } from "react-hook-form";
import List from "./List";
import axios from 'axios';
import { useTransaction } from "./AppContext";

export default function Form() {
  const { addTransaction } = useTransaction();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5050/api/transaction', data);
      console.log('Data posted:', response.data);
      addTransaction(response.data); 
      reset(); 
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto w-96">
      <h1 className="font-bol pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, Rent, SIP"
              className="form-input"
              {...register("name")}
            />
          </div>
          <select
            className="form-input"
            {...register("type")}
            defaultValue="Investment"
          >
            <option value="Investment">Investment</option>
            <option value="Expence">Expence</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>
          <div>
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Add Transaction
            </button>
          </div>
        </div>
      </form>
      <List />
    </div>
  );
}
