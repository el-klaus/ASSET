// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { db } from '@/lib/firebaseConfig.js' 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useSession, signIn, } from 'next-auth/react';
import 'tailwindcss/tailwind.css';

export default function Home() {
  const { data: session } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ deposit: 0, withdraw: 0, investment: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const fetchTransactions = async () => {
    if (!session) return;
    const q = query(collection(db, 'transactions'), where('user', '==', session.user.email));
    const querySnapshot = await getDocs(q);
    const userTransactions = [];
    let deposit = 0;
    let withdraw = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      userTransactions.push(data);
      if (data.transactionType === 'deposit') {
        deposit += parseFloat(data.amount);
      } else if (data.transactionType === 'withdraw') {
        withdraw += parseFloat(data.amount);
      }
    });

    setTransactions(userTransactions);
    setTotals({ deposit, withdraw, investment: deposit - withdraw });
  };

  useEffect(() => {
    fetchTransactions();
  }, [session]);

  const formik = useFormik({
    initialValues: {
      transactionType: '',
      digitalType: '',
      plan: '',
      currency: '',
      amount: '',
    },
    validationSchema: Yup.object({
      transactionType: Yup.string().required('Transaction type is required'),
      digitalType: Yup.string().required('Digital type is required'),
      plan: Yup.string().required('Plan is required'),
      currency: Yup.string().required('Currency is required'),
      amount: Yup.number()
        .positive('Amount must be positive')
        .min(200, 'Minimum amount is $200')
        .required('Amount is required'),
    }),
    onSubmit: async (values) => {
        
      if (!session) return;
     
     // await addDoc(collection(db, 'transactions'), transaction);
      //fetchTransactions();
      //formik.resetForm();
      setIsSubmitting(false);
      try {
        setIsSubmitting(true);
        const timestamp = new Date().toISOString();
        const transaction = {
          transactionType: values.transactionType,
          digitalType: values.digitalType,
          plan: values.plan,
          currency: values.currency,
          amount: values.amount,
          ...values,
          user: session.user.email,
          time: timestamp,
        };


        const docRef = collection(db, "transaction")
        await addDoc(docRef, transaction)
        // await addDoc(collection(db, 'transactions'), transaction);
        // fetchTransactions();
        console.log(transaction);
        formik.resetForm();
        setIsSubmitting(false);
        console.log("form submitted");
        
      } catch (error) {
        console.error('Error adding document: ', error);
      } finally {
        setIsSubmitting(false);
      }
      
      
    },
    

  });

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 py-96 lg:p-16">      
        <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Transaction Form</h1>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-6 rounded shadow-md space-y-4"
        >
          <div>
            <label className="block text-gray-700">Transaction Type</label>
            <select
              name="transactionType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.transactionType}
              className="w-full mt-2 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="deposit">Deposit</option>
              <option value="withdraw">Withdraw</option>
            </select>
            {formik.touched.transactionType && formik.errors.transactionType ? (
              <p className="text-red-500 text-sm">{formik.errors.transactionType}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Digital Type</label>
            <select
              name="digitalType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.digitalType}
              className="w-full mt-2 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="usdt">USDT</option>
            </select>
            {formik.touched.digitalType && formik.errors.digitalType ? (
              <p className="text-red-500 text-sm">{formik.errors.digitalType}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Plan</label>
            <select
              name="plan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.plan}
              className="w-full mt-2 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="starter">Starter (1.5% daily)</option>
              <option value="premium">Premium (2.02% daily)</option>
              <option value="vip">VIP (2.5% daily)</option>
            </select>
            {formik.touched.plan && formik.errors.plan ? (
              <p className="text-red-500 text-sm">{formik.errors.plan}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Currency</label>
            <select
              name="currency"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currency}
              className="w-full mt-2 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="$">USD ($)</option>
              <option value="¥">JPY (¥)</option>
              <option value="€">EUR (€)</option>
            </select>
            {formik.touched.currency && formik.errors.currency ? (
              <p className="text-red-500 text-sm">{formik.errors.currency}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.amount}
              className="w-full mt-2 p-2 border rounded"
            />
            {formik.touched.amount && formik.errors.amount ? (
              <p className="text-red-500 text-sm">{formik.errors.amount}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {transactions.length > 0 ? (
              <ul className="space-y-2">
                {transactions.map((transaction, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{transaction.transactionType}</span>
                    <span>{transaction.amount} {transaction.currency}</span>
                    <span>{transaction.digitalType}</span>
                    <span>{new Date(transaction.time).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No transactions found</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Totals</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <p>Total Deposits: ${totals.deposit.toFixed(2)}</p>
            <p>Total Withdrawals: ${totals.withdraw.toFixed(2)}</p>
            <p>Total Investment: ${totals.investment.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
