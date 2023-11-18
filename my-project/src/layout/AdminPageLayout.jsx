import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";

export default function AdminPageLayout() {
  return (
    <div className="flex overflow-x-hidden">
      <AdminSideBar />
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
