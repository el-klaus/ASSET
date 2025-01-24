"use client"
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebaseConfig'

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions from Firestore
  useEffect(() => {
    const fetchTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(data);
      setLoading(false);
    };
    fetchTransactions();
  }, []);

  // Calculate totals
  const totalDeposits = transactions
    .filter((t) => t.type === "Deposit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalWithdrawals = transactions
    .filter((t) => t.type === "Withdrawal")
    .reduce((sum, t) => sum + t.amount, 0);

  const netInvestment = totalDeposits - totalWithdrawals;

  
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
            <p className="text-blue-600 text-xl font-bold">${netInvestment.toFixed(2)}</p>
          </div>
        </div>


        {/* Transaction History */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>
          {loading ? (
            <p className="text-sm text-gray-500">Loading transactions...</p>
          ) : transactions.length > 0 ? (
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
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleString()}
                    </p>
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


