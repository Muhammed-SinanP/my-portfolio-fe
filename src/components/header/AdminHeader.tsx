"use client";

import { useRouter } from "next/navigation";
import DarkModeBtn from "../buttons/DarkModeBtn";

const AdminHeader = () => {
  const router = useRouter();

  return (
    <div className="header header-before-scroll gap-4">
      <h1 className="text-3xl text-purple-700 font-brand-title font-semibold">
        Admin Dashboard
      </h1>

      <DarkModeBtn />
    </div>
  );
};

export default AdminHeader;
