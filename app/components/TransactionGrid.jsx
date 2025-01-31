
"use client"
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { db } from '@/lib/firebaseConfig.js' 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useSession, signIn, } from 'next-auth/react';
import { Form, Formik } from 'formik';
import { IoMdCopy } from "react-icons/io";


export default function TransactionGrid() {
  const { data: session } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ deposit: 0, withdraw: 0, investment:0, interestAccrued: 0, });
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(`Copied: ${text}`);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

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
          
          // Calculate the days elapsed since deposit
          const daysElapsed = Math.floor(
            (Date.now() - new Date(data.time).getTime()) / (1000 * 60 * 60 * 24)
          );
    
          // Determine interest rate based on the selected plan
          let interestRate = 0;
          if (data.plan === "starter") {
            interestRate = 0.015; // 1.5% daily
          } else if (data.plan === "premium") {
            interestRate = 0.0202; // 2.02% daily
          }else if (data.plan === "professional") {
            interestRate = 0.0250; // 2.5% daily
          }else if (data.plan === "expert") {
            interestRate = 0.0300; // 3% daily
          }else if (data.plan === "gold") {
            interestRate = 0.0350; // 3.5% daily
          }else if (data.plan === "ultimate") {
            interestRate = 0.0450; // 4.5% daily
          }else if (data.plan === "pension") {
            interestRate = 0.0300; // 3% daily
          }else if (data.plan === "real estate") {
            interestRate = 0.0350; // 3.5% daily
          }else if (data.plan === "mortgage") {
            interestRate = 0.0450; // 4.5% daily
          }
    
          // Calculate interest accrued
          interestAccrued += data.amount * interestRate * daysElapsed;
          
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

  const iv = {
    transactionType: "",
    digitalType: "",
    plan: "",
    currency: "",
    amount: "",
  };

  const vs = Yup.object({
    transactionType: Yup.string().required("Transaction type is required"),
    digitalType: Yup.string().required("Digital type is required"),
    plan: Yup.string().required("Plan is required"),
    currency: Yup.string().required("Currency is required"),
    amount: Yup.number()
      .positive("Amount must be positive")
      .required("Amount is required")
      .when("plan", {
        is: "starter",
        then: (schema) => schema.min(200, "Minimum deposit for Starter is $200"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "premium",
        then: (schema) => schema.min(1000, "Minimum deposit for Premium is $1000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "professional",
        then: (schema) => schema.min(5000, "Minimum deposit for Professional is $5000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "expert",
        then: (schema) => schema.min(15000, "Minimum deposit for Expert is $15000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "gold",
        then: (schema) => schema.min(50000, "Minimum deposit for Gold is $50000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "ultimate",
        then: (schema) => schema.min(200000, "Minimum deposit for Ultimate is $200000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "pension",
        then: (schema) => schema.min(15000, "Minimum deposit for Pension is $15000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "real estate",
        then: (schema) => schema.min(50000, "Minimum deposit for Real Estate is $50000"),
        otherwise: (schema) => schema,
      })
      .when("plan", {
        is: "mortgage",
        then: (schema) => schema.min(2000000, "Minimum deposit for Mortgage is $200000"),
        otherwise: (schema) => schema,
      })
      .test("withdraw-limit", "Exceeds accrued interest", function (value) {
        if (this.parent.transactionType === "withdraw") {
          return value <= totals.interestAccrued;
        }
        return true;
      }),
  });

  const handleSubmit = async (values, {resetForm}) => {
    try {
       setIsSubmitting(true);
      const timestamp = new Date().toISOString();
      const transaction = {
        transactionType: values.transactionType,
        digitalType: values.digitalType,
        plan: values.plan,
        currency: values.currency,
        amount: values.amount,
        status: "pending", // New field to mark the transaction as pending
        ...values,
        user: session.user.email,
        time: timestamp,
      };
      const docRef = collection(db, "transaction");
      await addDoc(docRef, transaction);
      //await addDoc(collection(db, 'transactions'), transaction);
       fetchTransactions();
      console.log(transaction);
      setIsSubmitting(false);
      console.log("Form Submitted", values);
      resetForm()      
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-gray-100 p-6 pt-14 pb-96 lg:p-16">
            
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col gap-4 bg-cyan-700 p-5 rounded-lg text-white">
            <div className="flex items-center group gap-5 p-3 hover:bg-cyan-600 rounded-lg lg:text-xl">
                <p>BITCOIN WALLET (BTC) </p>
                <button onClick={() => handleCopy("14r7FA1HxrPyjatWk1sZmgy1gQ9a2rw9vv")}>
                <IoMdCopy className="text-2xl group-hover:text-green-600 group-active:text-red-800" />
                </button>
            </div>

            <div className="flex items-center group gap-5 p-3 hover:bg-cyan-600 rounded-lg lg:text-xl">
                <p>TETHER WALLET (USDT)</p>
                <button onClick={() => handleCopy("3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy")}>
                <IoMdCopy className="text-2xl group-hover:text-green-600 group-active:text-red-800" />
                </button>
            </div>

            <div className="flex items-center group gap-5 p-3 hover:bg-cyan-600 rounded-lg lg:text-xl">
                <p>ETHEREUM WALLET (ETH)</p>
                <button onClick={() => handleCopy("bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf")}>
                <IoMdCopy className="text-2xl group-hover:text-green-600 group-active:text-red-800" />
                </button>
            </div>
        </div>

        <h1 className="text-2xl text-cyan-700 font-bold my-4 pt-5">Transaction Form</h1>
        
        <Formik
          initialValues={iv}
          validationSchema={vs}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <Form
              className="bg-white p-6 rounded shadow-md space-y-4"
            >
              <div>
                <label className="block text-gray-700">Transaction Type</label>
                <select
                  name="transactionType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.transactionType}
                  className="w-full mt-2 p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="deposit">Deposit</option>
                  <option value="withdraw">Withdraw</option>
                </select>
                {touched.transactionType && errors.transactionType && (
                  <p className="text-red-500 text-sm">
                    {errors.transactionType}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Digital Type</label>
                <select
                  name="digitalType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.digitalType}
                  className="w-full mt-2 p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="btc">BTC</option>
                  <option value="eth">ETH</option>
                  <option value="usdt">USDT</option>
                </select>
                {touched.digitalType && errors.digitalType && (
                  <p className="text-red-500 text-sm">{errors.digitalType}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Plan</label>
                <select
                  name="plan"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.plan}
                  className="w-full mt-2 p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="starter">Starter (1.5% daily)</option>
                  <option value="premium">Premium (2.02% daily)</option>
                  <option value="professional">Professional (2.5% daily)</option>
                  <option value="expert">Expert (3.00% daily)</option>
                  <option value="gold">Gold (3.5% daily)</option>
                  <option value="ultimate">Ultimate (4.5% daily)</option>
                  <option value="pension">Pension (3.00% daily)</option>
                  <option value="real estate">Real Estate (3.5% daily)</option>
                  <option value="mortgage">Mortgage (4.5% daily)</option>
                </select>
                {touched.plan && errors.plan && (
                  <p className="text-red-500 text-sm">{errors.plan}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Currency</label>
                <select
                  name="currency"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currency}
                  className="w-full mt-2 p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="$">USD ($)</option>
                  <option value="¥">JPY (¥)</option>
                  <option value="€">EUR (€)</option>
                </select>
                {touched.currency && errors.currency && (
                  <p className="text-red-500 text-sm">{errors.currency}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Amount</label>
                <input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  className="w-full mt-2 p-2 border rounded"
                />
                {touched.amount && errors.amount && (
                  <p className="text-red-500 text-sm">{errors.amount}</p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-cyan-700 text-white"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>

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
                    {transaction.status === "pending" && (
                      <span className="text-yellow-500">Pending</span>
                    )}
                    {transaction.status === "approved" && (
                      <span className="text-green-500">Approved</span>
                    )}
                    {transaction.status === "declined" && (
                      <span className="text-red-500">Declined</span>
                    )}
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
    </div>
  );
}  
// Steps to Implement:
// Generate and Display Referral Links:

// When a user signs in, generate a referral link based on their email or user ID.
// Display the link on the referral page with a "Copy" button.
// Track Referrals:

// When a new user signs up using a referral link, store the referrer’s email or ID in the database.
// Credit Referral Bonus:

// When a referred user makes a deposit, check if they have a referrer.
// Calculate 1.5% of the deposit amount and credit it to the referrer.