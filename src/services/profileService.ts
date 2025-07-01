import axiosInstance from "@/config/axiosInstance";

export const fetchProfile = async () => {
  const response = await axiosInstance.get("/profile/details");
  return response.data.data;
};
