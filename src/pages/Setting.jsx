import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  User,
  Lock,
  Mail,
  Bell,
  LogOut,
  Trash2,
  Save,
} from "lucide-react";

const Setting = () => {

  const [profile, setProfile] = useState({
    name: "Rohit Pandit",
    email: "rohit@gmail.com",
    phone: "+91 9876543210",
    occupation: "Student",
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (

    <div className="bg-[#F8FCF7]">

      <Sidebar />

      <main className="ml-0 md:ml-64 h-screen overflow-y-auto">

        <div className="p-4 md:p-8">

          {/* Header */}

          <div className="mb-8">

            <h1 className="text-3xl md:text-4xl font-bold">

              Settings

            </h1>

            <p className="text-gray-500 mt-2">

              Manage your account settings.

            </p>

          </div>

          {/* Profile */}

          <div className="bg-white border border-[#E8F2E5] rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-3 mb-6">

              <User className="text-[#55C464]" />

              <h2 className="text-2xl font-bold">

                Profile Information

              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>

                <label className="block mb-2 font-medium">

                  Full Name

                </label>

                <input
                  type="text"
                  value={profile.name}
                  onChange={(e)=>
                    setProfile({
                      ...profile,
                      name:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 outline-none focus:border-[#55C464]"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">

                  Email

                </label>

                <input
                  type="email"
                  value={profile.email}
                  onChange={(e)=>
                    setProfile({
                      ...profile,
                      email:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 outline-none focus:border-[#55C464]"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">

                  Phone Number

                </label>

                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e)=>
                    setProfile({
                      ...profile,
                      phone:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 outline-none focus:border-[#55C464]"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">

                  Occupation

                </label>

                <input
                  type="text"
                  value={profile.occupation}
                  onChange={(e)=>
                    setProfile({
                      ...profile,
                      occupation:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3 outline-none focus:border-[#55C464]"
                />

              </div>

            </div>

            <div className="flex justify-end mt-6">

              <button className="bg-[#55C464] hover:bg-[#49B458] text-white px-6 py-3 rounded-xl flex items-center gap-2 active:scale-95">

                <Save size={18}/>

                Save Changes

              </button>

            </div>

          </div>

          {/* Security */}

          <div className="bg-white border border-[#E8F2E5] rounded-2xl shadow-sm p-6 mt-8">

            <div className="flex items-center gap-3 mb-6">

              <Lock className="text-[#55C464]" />

              <h2 className="text-2xl font-bold">

                Change Password

              </h2>

            </div>

            <div className="space-y-5">

              <div>

                <label className="block mb-2">

                  Current Password

                </label>

                <input
                  type="password"
                  value={password.current}
                  onChange={(e)=>
                    setPassword({
                      ...password,
                      current:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="block mb-2">

                  New Password

                </label>

                <input
                  type="password"
                  value={password.newPassword}
                  onChange={(e)=>
                    setPassword({
                      ...password,
                      newPassword:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="block mb-2">

                  Confirm Password

                </label>

                <input
                  type="password"
                  value={password.confirmPassword}
                  onChange={(e)=>
                    setPassword({
                      ...password,
                      confirmPassword:e.target.value
                    })
                  }
                  className="w-full border border-[#E8F2E5] rounded-xl px-4 py-3"
                />

              </div>

              <div className="flex justify-end">

                <button className="bg-[#55C464] hover:bg-[#49B458] text-white px-6 py-3 rounded-xl active:scale-95">


                  Update Password

                </button>

              </div>

            </div>

          </div>
                    {/* Gmail Integration */}

          <div className="bg-white border border-[#E8F2E5] rounded-2xl shadow-sm p-6 mt-8">

            <div className="flex items-center gap-3 mb-6">

              <Mail className="text-[#55C464]" />

              <h2 className="text-2xl font-bold">
                Gmail Integration
              </h2>

            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>

                <h3 className="font-semibold text-lg">
                  Connected Account
                </h3>

                <p className="text-gray-500 mt-1">
                  rohit@gmail.com
                </p>

                <p className="text-[#55C464] mt-2">
                  ● Connected Successfully
                </p>

              </div>

              <button className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded-xl transition hover:cursor-pointer">

                Disconnect

              </button>

            </div>

          </div>

          {/* Notifications */}

          <div className="bg-white border border-[#E8F2E5] rounded-2xl shadow-sm p-6 mt-8">

            <div className="flex items-center gap-3 mb-6">

              <Bell className="text-[#55C464]" />

              <h2 className="text-2xl font-bold">
                Notifications
              </h2>

            </div>

            <div className="space-y-6">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    Monthly Expense Report
                  </h3>

                  <p className="text-sm text-gray-500">
                    Receive your monthly financial summary.
                  </p>

                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-[#55C464]"
                />

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    Budget Alerts
                  </h3>

                  <p className="text-sm text-gray-500">
                    Notify when you approach your budget.
                  </p>

                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-[#55C464]"
                />

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    AI Spending Insights
                  </h3>

                  <p className="text-sm text-gray-500">
                    Receive AI-powered financial tips.
                  </p>

                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-[#55C464]"
                />

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    Email Notifications
                  </h3>

                  <p className="text-sm text-gray-500">
                    Get important updates through email.
                  </p>

                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#55C464]"
                />

              </div>

            </div>

          </div>

          

          

        </div>

      </main>

    </div>

  );

};

export default Setting;