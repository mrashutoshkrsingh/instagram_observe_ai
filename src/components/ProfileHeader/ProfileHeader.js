import React from "react";
import "./ProfileHeader.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
// BiDotsVerticalRounded
export default function ProfileHeader() {
  return (
    <div className="profile-header-cont">
      <div className="profile-header-img">
        <img
          src="https://think360studio-media.s3.ap-south-1.amazonaws.com/download/india-flag-2021-wallpaper-1.png"
          alt="gopro"
          width={50}
          height={50}
          className="b-50"
        />
      </div>
      <div className="profile-name-cont">
        <div className="profile-name">gopro</div>
        <div className="post-loc">Reine</div>
      </div>
      <div className="profile-option">
        <BiDotsVerticalRounded size={24} />
      </div>
    </div>
  );
}
