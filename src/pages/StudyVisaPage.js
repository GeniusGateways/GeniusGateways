import React, { useEffect, useState } from "react";
import { fetchStudyVisa } from "../api/studyVisaApi"; // API function for study visa
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/studyVisa.css"; // External CSS file

const StudyVisa = () => {
  const [studyVisaList, setStudyVisaList] = useState([]);

  useEffect(() => {
    const getStudyVisa = async () => {
      try {
        const data = await fetchStudyVisa();
        if (Array.isArray(data)) {
          setStudyVisaList(data);
        } else {
          console.error("Invalid Study Visa data format:", data);
          setStudyVisaList([]);
        }
      } catch (error) {
        console.error("Error fetching Study Visa data:", error);
        setStudyVisaList([]);
      }
    };
    getStudyVisa();
  }, []);

  return (
    <div className="container py-5">
      {/* Study Visa Heading */}
      <div className="studyVisa-header text-center">
        <h2 className="studyVisa-title">Study Visa</h2>
      </div>

      {/* Study Visa Grid */}
      <div className="studyVisa-container">
        {studyVisaList.map((visa) => (
          <div key={visa._id} className="studyVisa-card">
            {/* Image */}
            <div className="studyVisa-image">
              <img src={visa.imageUrl || "/images/placeholder.jpg"} alt={visa.title || "Study Visa"} />
            </div>

            {/* Content */}
            <div className="studyVisa-content text-center">
              <h6 className="studyVisa-title">{visa.title || "Untitled"}</h6>
              {visa.description && (
                <p className="studyVisa-description">
                  {visa.description.length > 80
                    ? `${visa.description.substring(0, 80)}...`
                    : visa.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyVisa;
