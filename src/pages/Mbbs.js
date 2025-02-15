import React, { useEffect, useState } from "react";
import { fetchMbbs } from "../api/mbbsApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/mbbs.css"; // Import external CSS

const Mbbs = () => {
  const [mbbsList, setMbbsList] = useState([]);

  useEffect(() => {
    const getMbbs = async () => {
      try {
        const data = await fetchMbbs();
        if (Array.isArray(data)) {
          setMbbsList(data);
        } else {
          console.error("Invalid data format received:", data);
          setMbbsList([]);
        }
      } catch (error) {
        console.error("Error fetching MBBS data:", error);
        setMbbsList([]);
      }
    };
    getMbbs();
  }, []);

  return (
    <div className="container py-5">
      {/* MBBS Heading - Centered at the Top */}
      <div className="mbbs-header text-center">
        <h2 className="mbbs-title">MBBS</h2>
      </div>

      {/* MBBS Grid - Responsive Cards */}
      <div className="mbbs-container">
        {mbbsList.map((mbbs) => (
          <div key={mbbs._id} className="mbbs-card">
            {/* MBBS Image */}
            <div className="mbbs-image">
              <img src={mbbs.imageUrl || "/images/placeholder.jpg"} alt={mbbs.title || "MBBS Image"} />
            </div>

            {/* MBBS Content */}
            <div className="mbbs-content text-center">
              <h6 className="mbbs-title">{mbbs.title || "Untitled"}</h6>
              {mbbs.description && (
                <p className="mbbs-description">
                  {mbbs.description.length > 80
                    ? `${mbbs.description.substring(0, 80)}...`
                    : mbbs.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mbbs;