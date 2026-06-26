import React, { useState } from "react";
import { LayoutDashboard, FolderKanban, Wallet, ChartColumn, Cog, LogOut, Menu, X} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";    
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Transactions",
      path: "/transaction",
      icon: FolderKanban,
    },
    {
      title: "Budgets",
      path: "/budget",
      icon: Wallet,
    },
    {
      title: "Reports",
      path: "/report",
      icon: ChartColumn,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: Cog,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 p-2 rounded-xl bg-white shadow-lg md:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-[#E2F0E0] flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div>

          {/* Close Button */}

          <div className="flex justify-end p-5 md:hidden">
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Logo */}

          <div className="flex flex-col items-center mt-4 mb-10">

            <img
              src={logo}
              alt="Hisab Kitab"
              className="h-40 w-40 object-contain"
            />

            

          </div>

          {/* Navigation */}

          <div className="flex flex-col gap-2 px-4">

            {navItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 h-12 px-4 rounded-xl font-medium text-[15px] transition-all duration-300 ${
                      isActive
                        ? "bg-[#EEF8EE] text-[#55C464] shadow-sm"
                        : "text-gray-500 hover:bg-[#F3FAF1] hover:text-[#55C464]"
                    }`
                  }
                >
                  <Icon size={20} />

                  <span>{item.title}</span>
                </NavLink>
              );
            })}

          </div>
        </div>

        {/* Bottom */}

        <div className="px-4 pb-5">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 w-full h-12 px-4 rounded-xl text-gray-500 transition-all duration-300 hover:bg-red-50 hover:text-red-500"
          >
            <LogOut size={20} />

            <span className="font-medium">
              Logout
            </span>
          </button>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;