"use client";
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';

export default function AdminHistory() {
  const { data: session } = useSession();
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const querySnapshot = await getDocs(collection(db, 'transaction'));
    const allTransactions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTransactions(allTransactions);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (!session || session.user.email !== 'nicholasokafor1@gmail.com') {
    return <p>Access Denied</p>;
  }

  return (
    <div className="min-h-screen  ">
      <h1 className="text-2xl font-bold text-cyan-700 mb-4">Transaction History</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Pending Transactions</h2>
        {transactions.filter(t => t.status === 'pending').length > 0 ? (
          <ul className="space-y-2 mb-4">
            {transactions.filter(t => t.status === 'pending').map(transaction => (
              <li key={transaction.id} className="p-2 border rounded shadow">
                {transaction.user} - {transaction.transactionType} - ${transaction.amount} - {transaction.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending transactions.</p>
        )}
        
        <h2 className="text-xl font-semibold mt-4 mb-2">Approved Transactions</h2>
        {transactions.filter(t => t.status === 'approved').length > 0 ? (
          <ul className="space-y-2 mb-4">
            {transactions.filter(t => t.status === 'approved').map(transaction => (
              <li key={transaction.id} className="p-2 border rounded shadow">
                {transaction.user} - {transaction.transactionType} - ${transaction.amount} - {transaction.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No approved transactions.</p>
        )}

        <h2 className="text-xl font-semibold mt-4 mb-2">Declined Transactions</h2>
        {transactions.filter(t => t.status === 'declined').length > 0 ? (
          <ul className="space-y-2">
            {transactions.filter(t => t.status === 'declined').map(transaction => (
              <li key={transaction.id} className="p-2 border rounded shadow">
                {transaction.user} - {transaction.transactionType} - ${transaction.amount} - {transaction.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No declined transactions.</p>
        )}
      </div>
    </div>
  );
}
