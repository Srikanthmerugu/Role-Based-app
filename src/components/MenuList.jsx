import React from "react";
import useMenuItems from "../hooks/useMenuItems";

function MenuList({ role }) {
  const menuItems = useMenuItems(role);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 border border-gray-800 rounded-2xl shadow-xl p-6 m-3 backdrop-blur-md w-full sm:w-[48%] lg:w-[30%] transition-transform hover:scale-[1.02]">
      {/* Gradient Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-500/40 to-cyan-400/40 blur-[2px] -z-10"></div>

      <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center justify-between">
        <span className="capitalize">{role} Menu</span>
        <span className="text-xs bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-2 py-1 rounded-md shadow">
          {menuItems.length}
        </span>
      </h2>

      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center just gap-3 px-3 py-2 rounded-lg bg-gray-800/60 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
