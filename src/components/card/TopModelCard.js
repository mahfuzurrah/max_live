import React from "react";

const TopModelCard = ({
  count,
  userImgSrc,
  userName,
  liveImgSrc,
  ratingImgSrc,
  liveCount,
  followersCount,
  avgRating,
}) => {
  return (
    <div className="card-item">
      <div className="count-number">{count}</div>
      <img className="user-img" src={userImgSrc} alt="User" />
      <div className="profile-area">
        <div className="user-name">{userName}</div>
        <div className="user-details">
          <div className="live">
            <img className="live-img" src={liveImgSrc} alt="Live Icon" />
            {liveCount}
            <span>Live</span>
          </div>
          <div className="followers">
            {followersCount}
            <span>followers</span>
          </div>
          <div className="rating">
            <img className="rating-img" src={ratingImgSrc} alt="Rating Icon" />
            {avgRating}
            <span>Avg Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopModelCard;
