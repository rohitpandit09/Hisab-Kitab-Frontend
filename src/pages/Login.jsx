import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md sm:max-w-lg bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8">

      {/* Top Section */}
      <div className="flex flex-col items-center text-center">

        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
        />

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Login to continue managing your finances
        </p>

      </div>

      {/* Form */}
      <div className="mt-8 flex flex-col gap-5">

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your registered email"
            className="h-12 w-full rounded-lg border border-[#D7E8D2] px-4 outline-none transition focus:border-[#55C464] focus:ring-2 focus:ring-[#55C464]/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="h-12 w-full rounded-lg border border-[#D7E8D2] px-4 outline-none transition focus:border-[#55C464] focus:ring-2 focus:ring-[#55C464]/20"
          />
        </div>

        <button className="mt-2 h-12 w-full rounded-lg bg-[#55C464] font-semibold text-white transition duration-200 hover:bg-[#49b558] active:scale-95"
        onClick={()=>{
          navigate('/dashboard');
        }}
        >
          Login
        </button>

      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-sm sm:text-base text-gray-500">

        Don't have an account?{" "}

        <button
          onClick={() => navigate("/register")}
          className="font-semibold text-[#55C464] transition hover:underline"
        >
          Sign up
        </button>

      </div>

    </div>
  );
};

export default Login;