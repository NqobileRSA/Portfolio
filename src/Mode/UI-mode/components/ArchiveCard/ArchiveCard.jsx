import React from "react";
import "./ArchiveCard.css";

const ArchiveCard = ({ title, des, listItem, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="archive-card">
        <div className="archive-card-header">
          <i className="bi bi-folder2-open archive-card-icon"></i>
          <i className="bi bi-box-arrow-up-right archive-card-link-icon"></i>
        </div>
        <div className="archive-card-content">
          <h2 className="archive-card-title">{title}</h2>
          <p className="archive-card-description">{des}</p>
        </div>
        <ul className="archive-card-list">
          {listItem.map((item, i) => (
            <li key={i} className="archive-card-list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
