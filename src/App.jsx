import React from "react";
import MenuList from "./components/MenuList";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <h1 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Role Based Menu
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <MenuList role="admin" />
        <MenuList role="client" />
      </div>
    </div>
  );
}

export default App;