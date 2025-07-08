"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { clearAdminData, saveAdminData } from "@/redux/features/adminSlice";
import { checkAuth } from "@/services/adminService";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const isAdminLoggedIn = useAppSelector((state) => state.admin.adminLoggedIn);

  const pathname = usePathname();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authStatus = await checkAuth();

        if (authStatus === 200) {
          dispatch(saveAdminData()); // set adminLoggedIn = true
        } else {
          dispatch(clearAdminData()); // set adminLoggedIn = false
        }
      } catch (err) {
        dispatch(clearAdminData());
      } finally {
        setChecking(false);
      }
    };

    verifyAuth();
  }, [pathname]);

  useEffect(() => {
    if (!checking && !isAdminLoggedIn) {
      router.push("/admin/login");
    }
  }, [isAdminLoggedIn, checking, pathname]);

  if (checking) {
    return <div className="p-4 min-h-screen">Checking authentication...</div>;
  }

  return (
    <div className="min-h-screen">{children}</div>
  );
};

export default AdminLayout;
