import React,{useState} from "react";
import Sidebar from "../components/Sidebar";
import {Search,Filter,Calendar,ArrowUpRight,ArrowDownLeft,MoreVertical,Plus, Trash} from "lucide-react";

const defaultTransactions = [
  {
    id: 1,
    date: "2026-05-31",
    merchant: "Zomato",
    category: "Food & Dining",
    type: "Expense",
    amount: "-₹450",
    color: "text-red-500",
    icon: "🍔",
  },
  {
    id: 2,
    date: "2026-05-31",
    merchant: "Amazon",
    category: "Shopping",
    type: "Expense",
    amount: "-₹1,299",
    color: "text-red-500",
    icon: "🛍️",
  },
  {
    id: 3,
    date: "2026-05-30",
    merchant: "Salary Credit",
    category: "Income",
    type: "Income",
    amount: "+₹75,000",
    color: "text-green-600",
    icon: "💰",
  },
  {
    id: 4,
    date: "2026-05-29",
    merchant: "Uber",
    category: "Transport",
    type: "Expense",
    amount: "-₹280",
    color: "text-red-500",
    icon: "🚕",
  },
  {
    id: 5,
    date: "2026-05-28",
    merchant: "Electricity Bill",
    category: "Bills",
    type: "Expense",
    amount: "-₹1,150",
    color: "text-red-500",
    icon: "⚡",
  },
];

const StatCard = ({ title, amount, color }) => (
  <div className="bg-white rounded-2xl border border-[#E8F2E5] shadow-sm p-5">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className={`text-2xl font-bold mt-2 ${color}`}>{amount}</h2>
  </div>
);

const AddTransactionForm = ({ close, setTransactions }) => {

 
  const [formData, setFormData] = useState({

    amount : "",
    merchant : "",
    category : "Food",
    type : "Expense",
    date : "",
    note : ""

  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
        id: Date.now(),
        icon: "💸",
        color:
            formData.type === "Expense"
                ? "text-red-500"
                : "text-green-600",

        amount:
            formData.type === "Expense"
                ? `-₹${formData.amount}`
                : `+₹${formData.amount}`,

        ...formData,
    };

    setTransactions((prev) => {
        const updated = [...prev, newTransaction];

        updated.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        return updated;
    });

    setFormData({
        amount: "",
        merchant: "",
        category: "Food",
        type: "Expense",
        date: "",
        note: "",
    });

    close();
};
  
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl w-125 p-8 shadow-xl">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Transaction
          </h2>

          <button
            onClick={close}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>

        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>

            <label className="block mb-2 font-medium">
              Amount
            </label>

            <input
              type="number"
              placeholder="₹ 0"
              value={formData.amount}
              onChange={(e)=>{
                setFormData({
                    ...formData,
                    amount: e.target.value
                })
              }}
              className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 outline-none focus:border-[#55C464]"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Merchant
            </label>

            <input
              value={formData.merchant}
              type="text"
              placeholder="Zomato"
              onChange={(e)=>{
                setFormData({...formData,merchant : e.target.value})
              }}
              className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 outline-none focus:border-[#55C464]"
            />

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="block mb-2 font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  })
                }
                className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
              >
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Bills">Bills</option>
                <option value="Salary">Salary</option>
                <option value="Healthcare">Healthcare</option>
              </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Type
              </label>

              <select 
              name="type"
              value={formData.type}
              onChange={(e)=>
                setFormData({
                  ...formData,
                  type:e.target.value
            
                })
              }
              
              className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3">

                <option>Expense</option>
                <option>Income</option>

              </select>

            </div>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Date
            </label>

            <input
              type="date"
              value={formData.date}
              onChange={(e)=>{
                setFormData({...formData,date : e.target.value})
              }}
              className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Notes
            </label>

            <textarea
              value={formData.note}
              onChange={(e)=>
                setFormData({...formData,note:e.target.value})
              }
              rows="3"
              placeholder="Burger with friends..."
              className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 resize-none"
            />

          </div>

          <div className="flex justify-end gap-4 pt-3">

            <button
              type="button"
              onClick={close}
              className="px-5 py-3 rounded-xl border border-[#E8F2E5]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#55C464] text-white px-6 py-3 rounded-xl hover:bg-[#49B458]"
            >
              Save Transaction
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

const Transaction = () => {

  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState(defaultTransactions);
  

    
  return (
    <div className="bg-[#F8FCF7]">

      {/* Fixed Sidebar */}
      <Sidebar />

      {showForm && (
          <AddTransactionForm
              close={() => setShowForm(false)}
              setTransactions={setTransactions}
          />
      )}

      {/* Scrollable Content */}
      <main className="ml-0 md:ml-64 h-screen overflow-y-auto">

        <div className="p-4 md:p-8">

          {/* Header */}

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-8">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transactions
              </h1>

              <p className="text-gray-500 mt-2">
                View and manage all your transactions.
              </p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="flex items-center justify-center gap-2 w-full md:w-fit bg-[#55C464] hover:bg-[#49B458] text-white px-5 py-3 rounded-xl font-medium transition"
            >
                <Plus size={18}/>
                Add Transaction
            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <StatCard
              title="Income"
              amount="₹75,000"
              color="text-green-600"
            />

            <StatCard
              title="Expense"
              amount="₹22,550"
              color="text-red-500"
            />

            <StatCard
              title="Balance"
              amount="₹52,450"
              color="text-[#55C464]"
            />

            <StatCard
              title="Daily Avg."
              amount="₹727"
              color="text-gray-900"
            />

          </div>

          {/* Filter */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div className="flex items-center justify-between">

              <div className="flex gap-4">

                

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E8F2E5] hover:bg-[#F8FCF7]">
                  <Calendar size={18} />
                  This Month
                </button>

              </div>

              

            </div>

          </div>

          {/* Transaction Table */}

          <div className="bg-white rounded-2xl border border-[#E8F2E5] shadow-sm overflow-x-auto mt-2">

            <table className="min-w-212.5 w-full">

              <thead className="bg-[#F8FCF7]">

                <tr className="text-left text-gray-500">

                  <th className="p-5">Date</th>
                  <th>Merchant</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th></th>

                </tr>

              </thead>

              <tbody>

                {transactions.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-[#E8F2E5] hover:bg-[#FAFCFA]"
                  >

                    <td className="p-5 font-medium">
                      {item.date}
                    </td>

                    <td>

                      <div className="flex items-center gap-3 min-w-55">

                        <div className="w-10 h-10 rounded-xl bg-[#EDF8EC] flex items-center justify-center text-lg">
                          {item.icon}
                        </div>

                        <div>

                          <h3 className="font-semibold">
                            {item.merchant}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td>

                      <span className="px-3 py-1 rounded-full bg-[#EDF8EC] text-[#55C464] text-sm">
                        {item.category}
                      </span>

                    </td>

                    <td>

                      <div className="flex items-center gap-2">

                        {item.type === "Income" ? (
                          <ArrowDownLeft
                            size={18}
                            className="text-green-600"
                          />
                        ) : (
                          <ArrowUpRight
                            size={18}
                            className="text-red-500"
                          />
                        )}

                        {item.type}

                      </div>

                    </td>

                    <td className={`font-bold ${item.color}`}>
                      {item.amount}
                    </td>

                    <td>

                      <button className="hover:bg-gray-100 rounded-lg p-2">
                        <MoreVertical size={18} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Transaction;