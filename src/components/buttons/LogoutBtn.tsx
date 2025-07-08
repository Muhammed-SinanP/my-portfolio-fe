import axiosInstance from '@/config/axiosInstance';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const LogoutBtn = () => {
    const router = useRouter()
    const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);

    async function handleLogout() {
      try {
        const response = await axiosInstance({
          method: "POST",
          url: "/admin/logout",
        });
        if (response.status === 200) {
          router.push("/");
          toast.success("Logged out successfully");
        } else {
          toast.error("User logout failed");
        }
      } catch (err) {
        toast.error("User logout failed");
      }
    }
  return (
    <div className='relative'>
      <button
        onClick={() => setShowLogoutConfirm(true)}
        className="btn btn-sm btn-soft btn-error font-sans font-normal"
      >
        Logout
      </button>
      {showLogoutConfirm && (
        <div className="bg-white dark:bg-gray-700 p-4 flex flex-col gap-4 absolute bottom-0 right-0 rounded-sm font-sans shadow-md w-52">
          <p className="text-center text-sm tracking-wide">Confirm logout!</p>
          <div className="flex justify-around">
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="btn btn-sm btn-soft font-normal btn-info"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-soft font-normal btn-error"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoutBtn