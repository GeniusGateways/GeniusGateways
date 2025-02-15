import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const fetchStudyVisa = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/studyvisa`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Study Visa data:", error);
    return [];
  }
};

export const uploadStudyVisa = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/studyvisa`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading Study Visa:", error);
  }
};
