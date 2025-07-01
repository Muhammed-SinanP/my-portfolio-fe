import axiosInstance from "@/config/axiosInstance";

export const fetchAllProjects = async () => {
  const response = await axiosInstance.get("/project/all");
  return response.data.data;
};

export const fetchProjectDetails = async (projectId: string) => {
  const response = await axiosInstance.get(`/project/${projectId}`);
  return response.data.data;
};
