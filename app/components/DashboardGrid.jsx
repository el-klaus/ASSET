
"use client"
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseConfig.js' 
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useSession, signIn, } from 'next-auth/react';


export default function DashboardGrid() {
  const { data: session } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ deposit: 0, withdraw: 0, investment:0, interestAccrued: 0, });
 


   const fetchTransactions = async () => {
    if (!session) return;
    const q = query(collection(db, 'transaction'), where('user', '==', session.user.email));
    const querySnapshot = await getDocs(q);
    const userTransactions = [];
    let deposit = 0;
    let withdraw = 0;
    let interestAccrued = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      userTransactions.push(data);
      if (data.transactionType === 'deposit') {
        deposit += parseFloat(data.amount);
      
        const daysElapsed = Math.floor(
          (Date.now() - new Date(data.time).getTime()) / (1000 * 60 * 60 * 24)
        );
        interestAccrued += data.amount * 0.015 * daysElapsed;
      } else if (data.transactionType === "withdraw") {
        withdraw += parseFloat(data.amount);
      }
    });

    setTransactions(userTransactions);
    setTotals({
      deposit, withdraw, investment: deposit - withdraw, 
      interestAccrued: interestAccrued - withdraw, });
      };

  useEffect(() => {
    fetchTransactions();
  }, [session]);



  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded"
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
     
    <main className="min-h-screen bg-gray-100 ">
      
      
      <div className='p-6 pt-14 md:pb-96 pb-72 lg:p-16'>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold text-cyan-700 mb-4">Transaction History</h2>
          <div className="bg-cyan-700 p-4 rounded-md shadow-md">
            {transactions.length > 0 ? (
              <ul className="space-y-2">
                {transactions.map((transaction, index) => (
                  <li
                    key={index}
                    className="flex  text-lg font-semibold text-white max-lg:flex-col justify-between lg:items-center border-b pb-2"
                  >
                    <span>{transaction.transactionType}</span>
                    <span>{transaction.amount} {transaction.currency}</span>
                    <span>{transaction.digitalType}</span>
                    <span className='text-lg font-thin'>{new Date(transaction.time).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No transactions found</p>
            )}
          </div>
        </div>
        <div className="mt-8 text-white font-serif">
          <div className="bg-cyan-700 px-6 py-10 rounded flex flex-col gap-5 shadow-md">
          <h2 className="text-xl text-center font-bold mb-4">Totals</h2>
            <p className='border p-6 rounded-md text-xl shadow-md'>Interest: ${totals.interestAccrued.toFixed(2)}</p>
            <p className='border p-6 rounded-md text-xl shadow-md'> Deposits: ${totals.deposit.toFixed(2)}</p>
            <p className='border p-6 rounded-md text-xl shadow-md'>Total Withdrawals: ${totals.withdraw.toFixed(2)}</p>
            <p className='border p-6 rounded-md text-xl font-medium shadow-md'>Total Investment: ${totals.investment.toFixed(2)}</p>
          </div>
        </div>

      </div>   
    </main>
    
  );
}

