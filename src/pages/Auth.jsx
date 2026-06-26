import React from "react";
import { Outlet } from "react-router-dom";
import hero from "../assets/auth_bg.png";

const Auth = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;