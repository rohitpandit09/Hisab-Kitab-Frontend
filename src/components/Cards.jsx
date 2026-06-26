import React from "react";

const Cards = ({ icons, heading, amount, aiInsite }) => {
  return (
    <div className="w-full min-h-36 bg-white border border-[#E2F0E0] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer">
      
      <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#EDF8EC] text-[#55C464] shrink-0">
        {icons}
      </div>

      <div className="flex flex-col flex-1">
        <p className="text-sm font-medium text-gray-500">{heading}</p>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
          ₹ {amount}
        </h2>

        <p className="text-sm text-[#55C464] font-medium mt-2">
          {aiInsite}
        </p>
      </div>

    </div>
  );
};

export default Cards;