import React from "react";
import { useLocation } from "react-router-dom";
import { backend_api } from "../App";
import "../styles/detail.css"; // Import the CSS file

export const Detail = () => {
  const location = useLocation();
  let prop_data = "";

  if (location.state.blog) {
    prop_data = location.state.blog;
  }
  if (location.state.country) {
    prop_data = location.state.country;
  }
  if (location.state.Mbbs_country) {
    prop_data = location.state.Mbbs_country;
  }

  if (!prop_data) {
    return <div className="no-data">No blog data available.</div>;
  }

  return (
    <div className="detail-container">
      {/* Title */}
      <h1 className="detail-title">{prop_data.title}</h1>

      {/* Image */}
      <div className="detail-image-container">
        <img
          src={backend_api + prop_data.image.url}
          alt={prop_data.title}
          className="detail-image"
        />
      </div>

      {/* Details */}
      <div className="detail-text">
        <p>{prop_data["detail"]?.root?.children?.[0]?.children?.[0]?.text}</p>
      </div>
    </div>
  );
};
