import axiosInstance from "@/config/axiosInstance";

export const checkAuth = async () => {
  const response = await axiosInstance.get("/admin/checkAuth");
  return response.status;
};
