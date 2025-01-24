"use client"
import React, { useState } from "react";

const Dashboard = () => {
  // State to manage transactions
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 500, date: new Date().toLocaleString() },
    { id: 2, type: "Withdrawal", amount: 200, date: new Date().toLocaleString() },
  ]);

  // State for the new transaction form
  const [newTransaction, setNewTransaction] = useState({
    type: "Deposit",
    amount: "",
  });

  // Add a new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      id: transactions.length + 1,
      type: newTransaction.type,
      amount: parseFloat(newTransaction.amount),
      date: new Date().toLocaleString(),
    };

    setTransactions([transaction, ...transactions]); // Add to transaction list
    setNewTransaction({ type: "Deposit", amount: "" }); // Reset form
  };

  // Calculate summary metrics
  const totalDeposits = transactions
    .filter((t) => t.type === "Deposit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalWithdrawals = transactions
    .filter((t) => t.type === "Withdrawal")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalInvestment = totalDeposits - totalWithdrawals;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center py-4 mb-6 bg-blue-600 text-white rounded-lg">
        <h1 className="text-2xl font-bold">Investment Dashboard</h1>
      </header>

      <div className="container mx-auto max-w-4xl">
        {/* Summary Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold">Total Deposits</h2>
            <p className="text-green-600 text-xl font-bold">${totalDeposits.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold">Total Withdrawals</h2>
            <p className="text-red-600 text-xl font-bold">${totalWithdrawals.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold">Net Investment</h2>
            <p className="text-blue-600 text-xl font-bold">${totalInvestment.toFixed(2)}</p>
          </div>
        </div>

        {/* Add Transaction Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
          <form onSubmit={handleAddTransaction} className="space-y-4">
            <div>
              <label htmlFor="type" className="block text-sm font-medium">
                Transaction Type
              </label>
              <select
                id="type"
                name="type"
                value={newTransaction.type}
                onChange={(e) =>
                  setNewTransaction({ ...newTransaction, type: e.target.value })
                }
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              >
                <option value="Deposit">Deposit</option>
                <option value="Withdrawal">Withdrawal</option>
              </select>
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newTransaction.amount}
                onChange={(e) =>
                  setNewTransaction({ ...newTransaction, amount: e.target.value })
                }
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Add Transaction
            </button>
          </form>
        </div>

        {/* Transaction History */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>
          {transactions.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium">
                      {transaction.type} - ${transaction.amount.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No transactions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
