import React from "react";
import "./ProfileHeader.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
// BiDotsVerticalRounded
export default function ProfileHeader({ postData }) {
  const { username, dpUrl, location } = postData;
  return (
    <header className="profile-header-cont">
      <div className="profile-header-img">
        <img
          src={dpUrl}
          alt={username}
          width={50}
          height={50}
          className="b-50"
        />
      </div>
      <div className="profile-name-cont">
        <div className="profile-name">{username}</div>
        {location && <div className="post-loc">{location}</div>}
      </div>
      <div className="profile-option">
        <BiDotsVerticalRounded size={24} />
      </div>
    </header>
  );
}
