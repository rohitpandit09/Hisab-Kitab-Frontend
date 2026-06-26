import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {Plus,Wallet,IndianRupee,Target,TrendingUp,MoreVertical, Trash} from "lucide-react";

const defaultBudgets = [
  {
    id: 1,
    category: "Food",
    budget: 10000,
    spent: 1000,
    icon: "🍔",
  },
  {
    id: 2,
    category: "Shopping",
    budget: 15000,
    spent: 1530,
    icon: "🛍️",
  },
  {
    id: 3,
    category: "Travel",
    budget: 8000,
    spent: 8000,
    icon: "🚌",
  },
  {
    id: 4,
    category: "Bills",
    budget: 5000,
    spent: 4500,
    icon: "⚡",
  },
];

const getIcon = (category) => {

    switch (category.toLowerCase()) {

        case "food":
            return "🍔";

        case "shopping":
            return "🛍️";

        case "travel":
            return "🚌";

        case "bills":
            return "⚡";

        case "healthcare":
            return "🏥";

        case "education":
            return "🎓";

        case "entertainment":
            return "🎬";

        default:
            return "💰";
    }

};

const SummaryCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#E8F2E5] p-5 shadow-sm">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="bg-[#EDF8EC] h-14 w-14 rounded-2xl flex justify-center items-center text-[#55C464]">
          {icon}
        </div>

      </div>

    </div>
  );
};

const Budget = () => {

  const [showModal, setShowModal] = useState(false);
  const [formData,setFormData] = useState({
    budgetName :"",
    budgetAmount : ""
  })
  const [openMenu, setOpenMenu] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [budgets, setBudgets] = useState(defaultBudgets);

  const totalBudget = budgets.reduce(
    (sum, item) => sum + item.budget,
    0
  );

  const totalSpent = budgets.reduce(
    (sum, item) => sum + item.spent,
    0
  );

  const remaining = totalBudget - totalSpent;

  const score = Math.round(
    (remaining / totalBudget) * 100
  );

  const handleBudgetSubmit = () => {

  if (
    formData.budgetName.trim() === "" ||
    formData.budgetAmount === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  if (editingId) {

    setBudgets((prev) =>
      prev.map((budget) =>
        budget.id === editingId
          ? {
              ...budget,
              category: formData.budgetName,
              budget: Number(formData.budgetAmount),
              icon: getIcon(formData.budgetName),
            }
          : budget
      )
    );

  } else {

    const alreadyExists = budgets.some(
      (item) =>
        item.category.toLowerCase() ===
        formData.budgetName.toLowerCase()
    );

    if (alreadyExists) {
      alert("Budget already exists.");
      return;
    }

    const newBudget = {
      id: Date.now(),
      category: formData.budgetName,
      budget: Number(formData.budgetAmount),
      spent: 0,
      icon: getIcon(formData.budgetName),
    };

    setBudgets((prev) => [newBudget, ...prev]);

  }

  setEditingId(null);

  setFormData({
    budgetName: "",
    budgetAmount: "",
  });

  setShowModal(false);

};

  const handleDelete = (id) => {

    setBudgets(prev =>
        prev.filter(item => item.id !== id)
    );

    setOpenMenu(null);

}

const handleEdit = (budget) => {

  setFormData({
    budgetName: budget.category,
    budgetAmount: budget.budget,
  });

  setEditingId(budget.id);

  setShowModal(true);

  setOpenMenu(null);

};

  
  return (
    <div className="bg-[#F8FCF7]">

      <Sidebar />

      <main className="ml-0 md:ml-64 h-screen overflow-y-auto">

        <div className="p-4 md:p-8">

          {/* Header */}

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">

            <div>

              <h1 className="text-3xl md:text-4xl font-bold">
                Budgets
              </h1>

              <p className="text-gray-500 mt-2">
                Plan your monthly spending wisely.
              </p>

            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#55C464] hover:bg-[#49B458] text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Create Budget
            </button>

          </div>

          {/* Summary */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <SummaryCard
              title="Total Budget"
              value={`₹${totalBudget}`}
              color="text-[#55C464]"
              icon={<Wallet />}
            />

            <SummaryCard
              title="Spent"
              value={`₹${totalSpent}`}
              color="text-red-500"
              icon={<IndianRupee />}
            />

            <SummaryCard
              title="Remaining"
              value={`₹${remaining}`}
              color="text-blue-500"
              icon={<Target />}
            />

            <SummaryCard
              title="Budget Score"
              value={`${score}%`}
              color="text-orange-500"
              icon={<TrendingUp />}
            />

          </div>

          {/* Budget Cards */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {budgets.map((item) => {

              const percent = Math.round(
                (item.spent / item.budget) * 100
              );

              return (
                <div
                  key={item.id}
                  className="bg-white border relative border-[#E8F2E5] rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-[#EDF8EC] flex justify-center items-center text-2xl">
                        {item.icon}
                      </div>

                      <div>

                        <h2 className="text-xl font-semibold">
                          {item.category}
                        </h2>

                        <p className="text-gray-500">
                          ₹{item.spent} / ₹{item.budget}
                        </p>

                      </div>

                    </div>

                    <button
                      className="hover:bg-gray-100 p-2 rounded-lg hover:cursor-pointer"
                      onClick={() =>
                        setOpenMenu(openMenu === item.id ? null : item.id)
                      }
                    >
                      <MoreVertical size={18} />
                    </button>

                    {openMenu === item.id && (

                      <div className=" flex flex-col items-center absolute right-5 justify-center top-16 bg-white border hover:cursor-pointer border-[#E8F2E5] rounded-xl shadow-lg w-50 z-20 overflow-hidden">

                        <button
                          onClick={() => handleEdit(item)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F8FCF7]"
                        >
                            ✏️
                            <span>Edit Budget</span>
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}

                          className="w-full flex items-center justify-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
                        >
                          <Trash size={16}/>
                          <span>Delete Budget </span>
                        </button>

                      </div>

                    )}

                  </div>

                  {/* Progress */}

                  <div className="mt-6">

                    <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">

                      <div
                        style={{
                          width: `${Math.min(percent, 100)}%`,
                        }}
                        className={`h-full rounded-full transition-all duration-500
                        ${
                          percent < 80
                            ? "bg-[#55C464]"
                            : percent < 100
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      ></div>

                    </div>

                  </div>

                  {/* Footer */}

                  <div className="flex justify-between items-center mt-5">

                    <div>

                      <p className="text-sm text-gray-500">
                        Amount left to spend
                      </p>

                      <h3 className="font-bold text-lg">
                        ₹{item.budget - item.spent}
                      </h3>

                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        {percent}%
                      </p>

                      <p className="text-sm text-gray-500">
                        Used
                      </p>

                    </div>

                  </div>

                  {/* AI Status */}

                  <div className="mt-5">

                    {percent < 80 && (

                      <div className="bg-[#EDF8EC] text-[#55C464] rounded-xl px-4 py-3 text-sm">

                        ✅ Great! You're well within your budget.

                      </div>

                    )}

                    {percent >= 80 && percent < 100 && (

                      <div className="bg-yellow-100 text-yellow-700 rounded-xl px-4 py-3 text-sm">

                        ⚠️ Careful! You're nearing your monthly budget.

                      </div>

                    )}

                    {percent >= 100 && (

                      <div className="bg-red-100 text-red-600 rounded-xl px-4 py-3 text-sm">

                        🚨 Budget exceeded. Try reducing spending.

                      </div>

                    )}

                  </div>

                </div>
              );

            })}

          </div>

          {/* Create Budget Modal */}

          {showModal && (

            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

              <div className="bg-white w-[95%] max-w-md rounded-3xl p-8">

                <div className="flex justify-between items-center mb-6">

                  <h2 className="text-2xl font-bold">
                    Create Budget
                  </h2>

                  <button
                    onClick={() => setShowModal(false)}
                    className="text-2xl"
                  >
                    ×
                  </button>

                </div>

                <div className="space-y-5">

                  <div>

                    <label className="block mb-2">
                      Create Category
                    </label>

                    <input 
                    value = {formData.budgetName}
                      onChange={(e)=>
                        setFormData({...formData,budgetName:e.target.value})
                      }
                    type="text" 
                    placeholder="Create your budget" 
                    className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2">
                      Budget Amount
                    </label>

                    <input
                      value = {formData.budgetAmount}
                      onChange={(e)=>
                        setFormData({...formData,budgetAmount:e.target.value})
                      }
                      type="number"
                      placeholder="₹10000"
                      className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
                    />

                  </div>

                  <div className="flex justify-end gap-4 pt-3">

                    <button
                      onClick={() => setShowModal(false)}
                      className="px-5 py-3 border rounded-xl"
                    >
                      Cancel
                    </button>

                    <button
                        onClick={handleBudgetSubmit}
                        className="bg-[#55C464] text-white px-6 py-3 rounded-xl hover:bg-[#49B458]"
                    >
                        Save Budget
                    </button>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </main>

    </div>
  );
};

export default Budget;