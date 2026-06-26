import React from "react";
import Sidebar from "../components/Sidebar";
import {
  Wallet,
  IndianRupee,
  PiggyBank,
  BadgePercent,
  Download,
} from "lucide-react";

const expenseData = [
  {
    id: 1,
    category: "Food",
    amount: 8200,
    icon: "🍔",
  },
  {
    id: 2,
    category: "Shopping",
    amount: 6200,
    icon: "🛍️",
  },
  {
    id: 3,
    category: "Travel",
    amount: 5200,
    icon: "🚌",
  },
  {
    id: 4,
    category: "Bills",
    amount: 2100,
    icon: "⚡",
  },
];

const SummaryCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white border border-[#E8F2E5] rounded-2xl p-5 shadow-sm">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-[#EDF8EC] flex justify-center items-center text-[#55C464]">
          {icon}
        </div>

      </div>

    </div>
  );
};

const Report = () => {

  const totalIncome = 75000;
  const totalExpense = 22500;

  const savings = totalIncome - totalExpense;

  const savingsRate = Math.round(
    (savings / totalIncome) * 100
  );

  return (

    <div className="bg-[#F8FCF7]">

      <Sidebar />

      <main className="ml-0 md:ml-64 h-screen overflow-y-auto">

        <div className="p-4 md:p-8">

          {/* Header */}

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">

            <div>

              <h1 className="text-3xl md:text-4xl font-bold">
                Reports
              </h1>

              <p className="text-gray-500 mt-2">
                Analyze your monthly financial performance.
              </p>

            </div>

            

          </div>

          {/* Summary */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <SummaryCard
              title="Income"
              value={`₹${totalIncome}`}
              color="text-green-600"
              icon={<Wallet />}
            />

            <SummaryCard
              title="Expense"
              value={`₹${totalExpense}`}
              color="text-red-500"
              icon={<IndianRupee />}
            />

            <SummaryCard
              title="Savings"
              value={`₹${savings}`}
              color="text-[#55C464]"
              icon={<PiggyBank />}
            />

            <SummaryCard
              title="Savings Rate"
              value={`${savingsRate}%`}
              color="text-blue-500"
              icon={<BadgePercent />}
            />

          </div>

          {/* Expense Breakdown */}

          <div className="bg-white rounded-2xl border border-[#E8F2E5] p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Expense Breakdown
            </h2>

            <div className="space-y-6">

              {expenseData.map((item)=>{

                const percentage=Math.round(
                  (item.amount/totalExpense)*100
                )

                return(

                  <div key={item.id}>

                    <div className="flex justify-between mb-2">

                      <div className="flex items-center gap-3">

                        <div className="text-2xl">
                          {item.icon}
                        </div>

                        <div>

                          <h3 className="font-semibold">
                            {item.category}
                          </h3>

                          <p className="text-sm text-gray-500">
                            ₹{item.amount}
                          </p>

                        </div>

                      </div>

                      <span className="font-semibold">
                        {percentage}%
                      </span>

                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                      <div
                        style={{
                          width:`${percentage}%`
                        }}
                        className="h-full bg-[#55C464] rounded-full"
                      ></div>

                    </div>

                  </div>

                )

              })}

            </div>

          </div>
          {/* Monthly Comparison & AI Insights */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

            {/* Monthly Comparison */}

            <div className="bg-white border border-[#E8F2E5] rounded-2xl p-6 shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                Monthly Comparison
              </h2>

              <div className="space-y-6">

                <div>

                  <div className="flex justify-between mb-2">

                    <span>This Month</span>

                    <span className="font-semibold">
                      ₹22,500
                    </span>

                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#55C464]"
                      style={{ width: "75%" }}
                    ></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">

                    <span>Last Month</span>

                    <span className="font-semibold">
                      ₹19,800
                    </span>

                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "66%" }}
                    ></div>

                  </div>

                </div>

                <div className="bg-[#EDF8EC] rounded-xl p-4">

                  <p className="font-semibold text-[#55C464]">

                    ▲ Spending increased by 13.6% compared to last month.

                  </p>

                </div>

              </div>

            </div>

            {/* AI Insights */}

            <div className="bg-white border border-[#E8F2E5] rounded-2xl p-6 shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                AI Insights
              </h2>

              <div className="space-y-4">

                <div className="bg-[#EDF8EC] rounded-xl p-4">

                  💡 Food spending increased by ₹1,200.

                </div>

                <div className="bg-blue-50 rounded-xl p-4">

                  💡 Bills decreased by ₹600 this month.

                </div>

                <div className="bg-yellow-50 rounded-xl p-4">

                  💡 Shopping accounts for 28% of all expenses.

                </div>

                <div className="bg-red-50 rounded-xl p-4">

                  💡 Reduce Food expenses by ₹2,000 to stay within budget.

                </div>

              </div>

            </div>

          </div>

          {/* Highlights */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-[#E8F2E5] rounded-2xl p-6 shadow-sm">

              <h3 className="text-gray-500">
                Highest Expense
              </h3>

              <h2 className="text-2xl font-bold mt-3">
                Amazon
              </h2>

              <p className="text-red-500 mt-2">
                ₹5,999
              </p>

            </div>

            <div className="bg-white border border-[#E8F2E5] rounded-2xl p-6 shadow-sm">

              <h3 className="text-gray-500">
                Highest Income
              </h3>

              <h2 className="text-2xl font-bold mt-3">
                Salary
              </h2>

              <p className="text-green-600 mt-2">
                ₹75,000
              </p>

            </div>

            <div className="bg-white border border-[#E8F2E5] rounded-2xl p-6 shadow-sm">

              <h3 className="text-gray-500">
                Most Used Category
              </h3>

              <h2 className="text-2xl font-bold mt-3">
                🍔 Food
              </h2>

              <p className="text-[#55C464] mt-2">
                ₹8,200 Spent
              </p>

            </div>

          </div>

          {/* Financial Health */}

          <div className="bg-white border border-[#E8F2E5] rounded-2xl p-6 shadow-sm mt-8">

            <h2 className="text-2xl font-bold mb-6">

              Financial Health

            </h2>

            <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">

              <div
                className="h-full bg-[#55C464]"
                style={{
                  width: "87%",
                }}
              ></div>

            </div>

            <div className="flex justify-between mt-3">

              <span className="text-gray-500">
                Score
              </span>

              <span className="font-bold text-[#55C464]">
                87 / 100
              </span>

            </div>

            <p className="mt-5 text-gray-600">

              🎉 Excellent! You're maintaining healthy spending habits.

            </p>

          </div>

        </div>

      </main>

    </div>

  );

};

export default Report;