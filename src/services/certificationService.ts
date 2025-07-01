import axiosInstance from "@/config/axiosInstance";

export const fetchCertifications = async () => {
  const response = await axiosInstance.get("/certification/all");
  return response.data.data;
};
