import React from "react";


export default function Form() {
  return (
    <div className="max-w-sm mx-auto w-96">
      <h1 className="font-bol pb-4 text-xl">Transaction</h1>
      <form id="form">
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, Rent, SIP"
              className="form-input"
            />
          </div>
          <select className="form-input">
            <option value="Investment" defaultValue="Investment">
              Investment
            </option>
            <option value="Expence">Expence</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input type="text" placeholder="Amount" className="form-input" />
          </div>
          <div>
            <button className="border py-2 text-white bg-indigo-500 w-full">Add Transaction</button>
          </div>
        </div>
      </form>
    </div>
  );
}
