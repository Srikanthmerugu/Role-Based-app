import { useMemo } from "react";

function useMenuItems(role) {
  return useMemo(() => {
    if (role === "admin") return [
      { name: "Manage Users", icon: "👥" },
      { name: "Manage Departments", icon: "🏢" },
     
    ];
    if (role === "client") return [
      { name: "Manage Timesheets", icon: "⏰" },
      { name: "Project Overview", icon: "📋" },
     
    ];
    return [];
  }, [role]);
}

export default useMenuItems;