import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/blogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const uploadBlog = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/blogs`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading blog:", error);
  }
};
