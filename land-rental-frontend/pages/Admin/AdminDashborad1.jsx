import React from "react";


import { ThemeProvider } from "./ThemeProvider";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import MainDashboard from "./MainDashboard";
import AdminGraphChart from "./AdminGraphChart";











const Dashboard = () =>{
  return(
    <div>Dashboard</div>
  )
}

const AdminDashboard1 = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="w-full h-screen bg-gray-100">
        <AdminNavbar />
        <div className="flex">
          <AdminSidebar />
          
          <div className="flex-col w-full">
          <MainDashboard />
          <AdminGraphChart />

          </div>
          
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AdminDashboard1;
