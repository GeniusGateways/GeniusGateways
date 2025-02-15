import React, { useState } from "react";
import { uploadBlog } from "../api/blogApi";
import { uploadMbbs } from "../api/mbbsApi";
import { uploadStudyVisa } from "../api/studyVisaApi";
import { FaUserShield } from "react-icons/fa"; // Admin Logo
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap


const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("blog");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !image || !description) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    let response;
    if (category === "blog") {
      response = await uploadBlog(formData);
    } else if (category === "mbbs") {
      response = await uploadMbbs(formData);
    } else if (category === "studyvisa") {
      response = await uploadStudyVisa(formData);
    }

    if (response) {
      alert("Upload successful!");
      setTitle("");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "#f8f9fa", // Light Background
        padding: "20px",
      }}
    >
      {/* Admin Logo */}
      <div
        className="p-3 rounded-circle shadow-sm d-flex align-items-center justify-content-center"
        style={{
          background: "#ffffff",
          width: "70px",
          height: "70px",
          marginBottom: "20px",
        }}
      >
        <FaUserShield size={40} color="#343a40" />
      </div>

      {/* Admin Panel Title */}
      <h3
        className="fw-bold text-center mb-4"
        style={{
          color: "#343a40", // Dark Gray (Readable)
        }}
      >
        Admin Panel
      </h3>

      {/* Form Card */}
      <div
        className="card p-4 shadow d-flex align-items-center"
        style={{
          width: "100%",
          maxWidth: "400px", // Compact Width
          background: "#ffffff", // White Background
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleUpload} className="w-100">
          {/* Title */}
          <div className="mb-3 text-center">
            <label
              className="form-label fw-bold"
              style={{ color: "#007bff" }} // Same color as Upload Now button
            >
              Title
            </label>
            <input
              type="text"
              className="form-control text-center"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="mb-3 text-center">
            <label
              className="form-label fw-bold"
              style={{ color: "#007bff" }} // Same color as Upload Now button
            >
              Category
            </label>
            <select
              className="form-select text-center"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="blog">Blog</option>
              <option value="mbbs">MBBS</option>
              <option value="studyvisa">Study Visa</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="mb-3 text-center">
            <label
              className="form-label fw-bold"
              style={{ color: "#007bff" }} // Same color as Upload Now button
            >
              Upload Image
            </label>
            <input type="file" className="form-control text-center" onChange={handleFileChange} required />
          </div>

          {/* Description */}
          <div className="mb-4 text-center">
            <label
              className="form-label fw-bold"
              style={{ color: "#007bff" }} // Same color as Upload Now button
            >
              Description
            </label>
            <textarea
              className="form-control text-center"
              rows="3"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            className="btn w-100 fw-bold text-light"
            style={{
              background: "#007bff", // Blue Button
              transition: "all 0.3s ease-in-out",
            }}
          >
            Upload Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
