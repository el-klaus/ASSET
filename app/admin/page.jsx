"use client";
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseConfig.js';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import AdminHistoryGrid from '../components/AdminHistoryGrid';

export default function AdminPanel() {
  const { data: session } = useSession();
  const [transactions, setTransactions] = useState([]);

  const fetchPendingTransactions = async () => {
    const q = query(collection(db, 'transaction'), where('status', '==', 'pending'));
    const querySnapshot = await getDocs(q);
    const pendingTransactions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTransactions(pendingTransactions);
  };

  useEffect(() => {
    fetchPendingTransactions();
  }, []);

  const handleApproval = async (id, status) => {
    const transactionRef = doc(db, 'transaction', id);
    await updateDoc(transactionRef, { status });
    fetchPendingTransactions();
  };

  if (!session || session.user.email !== 'nicholasokafor1@gmail.com') {
    return <p>Access Denied</p>;
  }

  return (
    <div className="min-h-screen p-6  max-md:mb-72 ">
      <h1 className="text-2xl font-bold text-cyan-700 mt-10 mb-4">Admin - Transactions</h1>
      <div className="bg-white p-4 rounded shadow-md mb-5">
        {transactions.length > 0 ? (
          <ul className="space-y-4">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center p-4 border rounded shadow">
                <span>{transaction.user} - {transaction.transactionType} - ${transaction.amount}</span>
                <div className="space-x-2">
                  <button 
                    onClick={() => handleApproval(transaction.id, 'approved')} 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Approve
                  </button>
                  <button 
                    onClick={() => handleApproval(transaction.id, 'declined')} 
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Decline
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending transactions.</p>
        )}
      </div>
      <AdminHistoryGrid/>
    </div>
  );
}
