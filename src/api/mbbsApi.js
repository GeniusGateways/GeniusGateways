import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const fetchMbbs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/mbbs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching MBBS data:", error);
    return [];
  }
};

export const uploadMbbs = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/mbbs`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading MBBS:", error);
  }
};
