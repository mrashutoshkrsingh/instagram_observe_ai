import React from "react";
import "./FollowersContainer.scss";

function SummaryItem({ title, subTitle }) {
  return (
    <div className="summary-item">
      <span className="summary-item-title">{title}</span>
      <span className="summary-item-subTitle">{subTitle}</span>
    </div>
  );
}

export default function FollowersContainer({
  postsCount,
  followersCount,
  followingsCount,
}) {
  return (
    <div className="followers-cont">
      <div className="prof-summary">
        <SummaryItem title={postsCount} subTitle="posts" />
        <SummaryItem title={followersCount} subTitle="followers" />
        <SummaryItem title={followingsCount} subTitle="following" />
      </div>
      <div className="follow-action-button-cont">
        <button className=" btn btn-primary">Follow</button>
        <button className=" btn btn-primary">^</button>
      </div>
    </div>
  );
}
