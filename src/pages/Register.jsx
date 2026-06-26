import React ,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [newUser,setNewUser] = useState({
    email : " ",
    password : " ",
    mobile : " "
  })

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
          Welcome to Hisab-Kitab
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Register to continue managing your finances
        </p>

      </div>

      {/* Form */}
      <div className="mt-8 flex flex-col gap-5">

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-700">
            Bank Registered Email
          </label>

          <input
            type="email"
            placeholder="Enter your bank registered email"
            className="h-12 w-full rounded-lg border border-[#D7E8D2] px-4 outline-none focus:border-[#55C464] focus:ring-2 focus:ring-[#55C464]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-700">
            Create Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="h-12 w-full rounded-lg border border-[#D7E8D2] px-4 outline-none focus:border-[#55C464] focus:ring-2 focus:ring-[#55C464]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-700">
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="Enter your mobile number"
            className="h-12 w-full rounded-lg border border-[#D7E8D2] px-4 outline-none focus:border-[#55C464] focus:ring-2 focus:ring-[#55C464]/20 transition"
          />
        </div>

        <button className="mt-2 h-12 w-full rounded-lg bg-[#55C464] text-white font-semibold transition hover:bg-[#48b458] active:scale-95">
          Register
        </button>

      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-sm sm:text-base text-gray-500">

        Already have an account?{" "}

        <button
          onClick={() => navigate("/")}
          className="font-semibold text-[#55C464] hover:underline"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default Register;