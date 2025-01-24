// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { IoMdCopy } from "react-icons/io";
// import { RiMenuUnfoldFill } from "react-icons/ri";
// import { RiMenuFoldFill } from "react-icons/ri";
// import { FaSquareWhatsapp } from "react-icons/fa6";

// const depositWithdraw = () => {
//     const [currency, setCurrency] = useState('');


//     const handleCurrencyChange = (event) => {
//         setCurrency(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle the form submission logic here
//         console.log('Selected currency:', currency);
//         console.log('Entered number:', number);
//     };

//     const [number, setNumber] = useState('');

//     const handleNumberChange = (event) => {
//         setNumber(event.target.value);
//     };

//     const textToCopy = "14r7FA1HxrPyjatWk1sZmgy1gQ9a2rw9vv";

//     const handleCopy = () => {
//         navigator.clipboard.writeText(textToCopy)
//             .then(() => {
//                 console.log('Text copied to clipboard!');
                
//             })
//             .catch(err => {
//                 console.error('Failed to copy: ', err);
//             });
//     };
//      const[navbarOpen, setNavbarOpen] = useState(false);
//     const navbarItem=[
//         {
//           label:"Dashboard",
//           button:'/'
//         },
//         {
//           label:"Plans",
//           button:'/'
//         },
//         {
//           label:"Referrals ",
//           button:'/'
//         },
//         {
//           label:"Investment",
//           button:'/'
//         },
//         {
//           label:"transactions",
//           button:'/'
//         },
//         {
//             label:"Impact invest",
//             button:'/'
//           },
//           {
//             label:"support",
//             button:'/'
//           },
//       ]


//   return (
//     <main className="bg-[url('/pexelspixabay.jpg')] bg-no-repeat flex pb-96 ">
//         <div className={`flex px-10 gap-5 lg:w-[20%] pb-96 flex-col  pt-10 max-lg:fixed max-lg:top-14 max-lg:right-12 max-lg:justify-center max-lg:w-full  bg-cyan-600 transition-all ${!navbarOpen ? "max-lg:translate-y-full" : ""}`}>
//         {
//           navbarItem.map((item, index) =>(
//             <Link
//             key={index}
//             href={item.button}
//             onClick={()=> setNavbarOpen(false)}
//             className='font-serif text-sm capitalize max-lg:pl-8 max-lg:pt-4  font-base hover:text-lg  rounded-full  duration-400 text-white  '
//             >
//               {item.label}
//             </Link>
//           ))
//         }
//         <div className='max-lg:px-6'>
//             <Link href={'/wa.me/2349036334282'} className=" flex gap-2 items-center p-2 bg-cyan-700 hover: hover:text-cyan-200 text-white w-fit">
//                 <FaSquareWhatsapp 
//                 className='text-2xl'
//                 />
//                 <p className='cursor-pointer'>whatsapp Support</p>
//             </Link>
//         </div>

//         <div className='flex gap-8 max-lg:px-6'>
//             <Link className='p-2 text-white bg-red-700 rounded-md hover:bg-red-800 ' href={'/deposit'}>Deposit</Link>
//             <Link className='p-2 text-white bg-yellow-700 rounded-md hover:bg-yellow-800 ' href={'/deposit'}>Withdraw</Link>
//         </div>
//       </div>
//         <div className='flex gap-4 flex-col lg:items-end lg:px-32 px-4 lg:w-full w-[100%]  py-14 justify-center '>
//             <h2 className='text-3xl font-bold text-white'>Deposit Funds </h2>
//             <span className='text-lg font-medium text-white lg:text-right'>Add funds using our system's gateway. The deposited amount
//                  will be credited to the deposit wallet. You'll just
//                   make investments from this wallet.</span>

//             <form className='flex bg-cyan-700 border rounded-xl flex-col p-5 gap-5' onSubmit={handleSubmit}>
//                 <p className='font-medium capitalize text-white'>Bitcion payment</p>
                
//                 <div className='flex gap-2 text-sm text-white'>
//                 <p>{textToCopy}</p>
//                 <button onClick={handleCopy} ><IoMdCopy  className='text-sm hover:text-green-600 active:text-red-800' /></button>
                
//                 </div>

//                 <select id="currency" value={currency}  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none" onChange={handleCurrencyChange}>
//                     <option value="" className=''>Select a currency</option>
//                     <option value="USD">US Dollar (USD)</option>
//                     <option value="EUR">Euro (EUR)</option>
//                     <option value="GBP">British Pound (GBP)</option>
//                     <option value="JPY">Japanese Yen (JPY)</option> 
//                 </select>
//                     <input type="file" accept='image'  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none text-black"  />
//                 <input  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none text-black" placeholder='Enter amount' type="number" id="positiveNumber"
//                     value={number}
//                     onChange={handleNumberChange}
//                     min="100" step="any"
//                 />     

//                 <button className='bg-white p-2' type="submit">Submit</button>
//             </form>
//         </div>
//         <button onClick={() => { setNavbarOpen(!navbarOpen) }} className='text-3xl text-white lg:hidden z-50 max-lg:fixed  '>
//                   {
//                       navbarOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />
//                   }
//               </button>
        
      
//     </main>
//   )
// }

// export default depositWithdraw
// "use client"

// import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { db } from '@/lib/firebaseConfig'
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// const TransactionForm = () => {
//   const [transactions, setTransactions] = useState([]);

//   const TransactionSchema = Yup.object().shape({
//     type: Yup.string().required("Transaction type is required"),
//     currency: Yup.string().required("Currency is required"),
//     amount: Yup.number()
//       .min(1, "Amount must be greater than 0")
//       .required("Amount is required"),
//   });

//   const handleTransaction = async (values, { resetForm }) => {
//     try {
//       // Calculate interest for deposits
//       let interest = 0;
//       if (values.type === "deposit") {
//         interest = values.amount * 0.015; // 1.5% daily interest
//       } else if (values.type === "withdrawal" && values.amount > interest) {
//         alert("You can only withdraw the interest.");
//         return;
//       }

//       // Create a new transaction record
//       const newTransaction = {
//         ...values,
//         interest,
//         status: "pending", // Default status
//         timestamp: serverTimestamp(),
//       };

//       // Save to Firestore
//       const docRef = await addDoc(collection(db, "transactions"), newTransaction);

//       // Update local state
//       setTransactions((prev) => [
//         { ...newTransaction, id: docRef.id, status: "successful" },
//         ...prev,
//       ]);

//       // Reset the form
//       resetForm();
//     } catch (error) {
//       console.error("Error adding transaction:", error);
//       setTransactions((prev) => [
//         { ...values, status: "failed", timestamp: new Date().toISOString() },
//         ...prev,
//       ]);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-red-700 min-h-dvh">
//       <h1 className="text-3xl mb-4">Transaction Form</h1>
//       <Formik
//         initialValues={{
//           type: "deposit",
//           currency: "BTC",
//           amount: "",
//         }}
//         validationSchema={TransactionSchema}
//         onSubmit={handleTransaction}
//       >
//         {({ errors, touched }) => (
//           <Form className="space-y-4">
//             <div>
//               <label className="block text-sm">Transaction Type</label>
//               <Field as="select" name="type" className="form-select">
//                 <option value="deposit">Deposit</option>
//                 <option value="withdrawal">Withdrawal</option>
//               </Field>
//               {errors.type && touched.type && (
//                 <p className="text-red-500 text-sm">{errors.type}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm">Currency</label>
//               <Field as="select" name="currency" className="form-select">
//                 <option value="BTC">BTC</option>
//                 <option value="ETH">ETH</option>
//                 <option value="USDT">USDT</option>
//               </Field>
//               {errors.currency && touched.currency && (
//                 <p className="text-red-500 text-sm">{errors.currency}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm">Amount</label>
//               <Field
//                 type="number"
//                 name="amount"
//                 className="form-input"
//                 placeholder="Enter amount"
//               />
//               {errors.amount && touched.amount && (
//                 <p className="text-red-500 text-sm">{errors.amount}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="bg-cyan-700 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>

//       {/* Transaction History */}
//       <div className="mt-8">
//         <h2 className="text-2xl mb-4">Transaction History</h2>
//         <ul>
//           {transactions.map((txn, index) => (
//             <li
//               key={index}
//               className={`p-4 border mb-2 ${
//                 txn.status === "successful"
//                   ? "border-green-500"
//                   : txn.status === "failed"
//                   ? "border-red-500"
//                   : "border-yellow-500"
//               }`}
//             >
//               <p>
//                 <strong>Type:</strong> {txn.type.toUpperCase()}
//               </p>
//               <p>
//                 <strong>Currency:</strong> {txn.currency}
//               </p>
//               <p>
//                 <strong>Amount:</strong> ${txn.amount}
//               </p>
//               {txn.type === "deposit" && (
//                 <p>
//                   <strong>Interest:</strong> ${txn.interest.toFixed(2)}
//                 </p>
//               )}
//               <p>
//                 <strong>Status:</strong> {txn.status}
//               </p>
//               <p>
//                 <strong>Date:</strong>{" "}
//                 {txn.timestamp
//                   ? new Date(txn.timestamp.seconds * 1000).toLocaleString()
//                   : "Pending"}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TransactionForm;

"use client"
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebaseConfig'
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = useSession()
  const authorMail = session?.user?.email

  const initVal = {
    transactionType: "",
    currencyType:"",
    digitalType: "",
    amount: "",
    service:""
  }

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

  const netInvestment = totalDeposits - totalDeposits;

  // Form validation schema using Yup
  const TransactionSchema = Yup.object().shape({
    transactionType: Yup.string().required("Transaction type is required"),
    service: Yup.string().required("Transaction type is required"),
    currencyType:Yup.string().required("currency type required"),
    digitalType: Yup.string().required("digital type is required"),
    amount: Yup.number().required("Amount is required").positive("Amount must be positive")
      .test(
        "is-withdrawable",
        "Insufficient funds for withdrawal",
        function (value) {
          return this.parent.type === "Deposit" || value <= netInvestment;
        }
      ),
  });

  // Handle form submission
  const handleAddTransaction = async (values, { resetForm }) => {
    // const newTransaction = {
    //   ...values,
    //   amount: parseFloat(values.amount),
    //   date: new Date().toISOString(),
    // };
    // try {
    //   const docRef = await addDoc(collection(db, "transactions"), newTransaction);
    //   setTransactions([{ id: docRef.id, ...newTransaction }, ...transactions]);
    //   resetForm();
    // } catch (error) {
    //   console.error("Error adding transaction: ", error);
    // }
    try {


      const transaction ={
        type: values.transactionType,
        currency: values.currencyType,
        price: values.amount,
        digital: values.digitalType,
        plan: values.service,
        timestamp: new Date(),
        author: session?.user?.name,
        authorMail: authorMail,
      }

      const docRef = collection(db, "transactions")
      await addDoc(docRef,transaction)
      console.log("Successful", values);
      resetForm()
      alert("pending")

    } catch (error) {
       console.error("Error", error)
      alert(" failed")
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-96">
      {/* Header */}
      <header className="text-center py-4 mb-6 bg-blue-600 text-white rounded-lg">
        <h1 className="text-2xl font-bold">Investment Dashboard</h1>
      </header>

      <div className="container mx-auto max-w-4xl">
        {/* Summary Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold">Total Deposits</h2>
            <p className="text-green-600 text-xl font-bold">{totalDeposits.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold">Total Withdrawals</h2>
            <p className="text-red-600 text-xl font-bold">{totalWithdrawals.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold">Net Investment</h2>
            <p className="text-blue-600 text-xl font-bold">{netInvestment.toFixed(2)}</p>
          </div>
        </div>

        {/* Add Transaction Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
          <Formik
            initialValues={initVal}
            validationSchema={TransactionSchema}
            onSubmit={handleAddTransaction}
          >
              <Form className="space-y-4">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium">
                    Transaction Type
                  </label>
                  <Field
                    as="select"
                    id="transactionType"
                    name="transactionType"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Deposit">Deposit</option>
                    <option value="Withdrawal">Withdrawal</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Digital Type</label>
                  <Field as="select"
                          id="digitalType"
                          name="digitalType" 
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </Field>
                  <ErrorMessage
                  name="digitalType"
                  component="div"
                  className="text-red-500 text-sm mt-1"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Plan</label>
                  <Field as="select"
                          id="service"
                          name="service" 
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value="starter">Starter</option>
                    <option value="premium">Premium</option>
                    <option value="professional">Professional</option>
                    <option value="Expert">Expert</option>
                    <option value="Gold">Gold</option>
                    <option value="Ultimate">Ultimate</option>
                    <option value="Mortgage">Mortgage</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="pension">pension</option>
                  </Field>
                  <ErrorMessage
                  name="service"
                  component="div"
                  className="text-red-500 text-sm mt-1"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Currency Type</label>
                  <Field as="select"
                          id="currencyType"
                          name="currencyType" 
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value="$">$</option>
                    <option value="£">£</option>
                    <option value="€">€</option>
                    <option value="¥">¥</option>                
                  </Field>
                  <ErrorMessage
                  name="currencyType"
                  component="div"
                  className="text-red-500 text-sm mt-1"/>
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium">
                    Amount
                  </label>
                  <Field
                    type="number"
                    id="transactionPrice"
                    name="transactionPrice"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="transactionType"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                    
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  submit                  
                </button>
              </Form>
          </Formik>
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


