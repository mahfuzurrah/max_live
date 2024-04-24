import React from "react";
import ArroUp from "../assets/svg/up.svg";

const OverviewCard = ({ imgSrc, title, number, gain }) => {
  return (
    <div className="overview_card">
      <div className="title">
        <img src={imgSrc} alt={title} width="32" height="32" />
        <div className="active-content">
          <p className="active-text">{title}</p>
          <h4>{number}</h4>
          <div className="card-btn">
            <img src={ArroUp} width="16" height="16" alt="Arrow Up" />
            <span>{gain}</span> gain this month
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
