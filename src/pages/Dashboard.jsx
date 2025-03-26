import React, { useState } from "react";


const PersonalFinanceTracker = () => {
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Payment Received", amount: 500, type: "credit", date: "5 days ago" },
    { id: 2, description: "Electric Bill", amount: -100, type: "debit", date: "2 days ago" },
    { id: 3, description: "Grocery Shopping", amount: 50, type: "credit", date: "Just now" },
  ]);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-blue-600 py-4 px-6 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Logout</button>
      </header>
      <main className="p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Current Balance</h2>
          <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
          <ul>
            {transactions.map((tx) => (
              <li key={tx.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">{tx.description}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <p className={`font-semibold ${tx.type === "credit" ? "text-green-500" : "text-red-500"}`}>
                  {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PersonalFinanceTracker;
