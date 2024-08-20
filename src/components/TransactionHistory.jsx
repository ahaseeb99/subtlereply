import React, { useState } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 'tx1',
      date: '15.04.2024',
      project: 'Project Alpha',
      subscription: 'Monthly',
      amount: '$99.00'
    },
    {
      id: 'tx2',
      date: '20.04.2024',
      project: 'Project Betta',
      subscription: 'Monthly',
      amount: '$299.00'
    },
  ]);

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold text-purple-400 mb-4">History Of Billing Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="py-2 px-2 md:px-4 text-left">Date</th>
              <th className="py-2 px-2 md:px-4 text-left">Project</th>
              <th className="py-2 px-2 md:px-4 text-left">Subscription</th>
              <th className="py-2 px-2 md:px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="bg-gray-800 even:bg-gray-800">
                <td className="py-2 px-2 md:px-4 border-b border-gray-600">{transaction.date}</td>
                <td className="py-2 px-2 md:px-4 border-b border-gray-600">{transaction.project}</td>
                <td className="py-2 px-2 md:px-4 border-b border-gray-600">{transaction.subscription}</td>
                <td className="py-2 px-2 md:px-4 border-b border-gray-600">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;