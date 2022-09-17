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

export default function FollowersContainer() {
  return (
    <div className="followers-cont">
      <div className="prof-summary">
        <SummaryItem title={438} subTitle="posts" />
        <SummaryItem title={"133K"} subTitle="followers" />
        <SummaryItem title={629} subTitle="following" />
      </div>
      <div className="follow-action-button-cont">
        <button className=" btn btn-primary">Follow</button>
        <button className=" btn btn-primary">^</button>
      </div>
    </div>
  );
}
