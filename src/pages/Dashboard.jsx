import React from "react";
import { MoveDown, MoveUp, Wallet, HandCoins } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";

const Dashboard = () => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const overviewData = [
    {
      heading: "Total Balance",
      icons: <Wallet size={28} className="text-[#55C464]" />,
      amount: 250000,
      aiInsite: "▲ 8.5% from last month",
    },
    {
      heading: "Total Income",
      icons: <MoveUp size={28} className="text-[#55C464]" />,
      amount: 500000,
      aiInsite: "Income this month",
    },
    {
      heading: "Total Expenses",
      icons: <MoveDown size={28} className="text-[#55C464]" />,
      amount: 20000,
      aiInsite: "▲ 7.5% from last month",
    },
    {
      heading: "Savings",
      icons: <HandCoins size={28} className="text-[#55C464]" />,
      amount: 25678,
      aiInsite: "Saved this month",
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#F8FCF7]">

      <Sidebar />

      <main className="ml-0 md:ml-64 h-screen overflow-y-auto p-6 md:p-8 lg:p-10">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {greeting}, Rohit! 👋
          </h1>

          <p className="mt-2 text-gray-500 text-sm md:text-base">
            Here's your financial overview for today.
          </p>
        </div>

        {/* Overview Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {overviewData.map((item, index) => (
            <Cards
              key={index}
              heading={item.heading}
              icons={item.icons}
              amount={item.amount.toLocaleString("en-IN")}
              aiInsite={item.aiInsite}
            />
          ))}
        </div>

        {/* Charts Section */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Expense Chart */}

          <div className="lg:col-span-2 min-h-105 bg-white border border-[#E2F0E0] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Monthly Expenses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Expense analytics will appear here.
            </p>
          </div>

          {/* Recent Transactions */}

          <div className="min-h-105 bg-white border border-[#E2F0E0] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Transactions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest transactions will appear here.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;