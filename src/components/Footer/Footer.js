import React from "react";
import "./Footer.scss";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
// AiOutlineHome import { IconName } from "react-icons/ai";
// AiFillHome import { IconName } from "react-icons/ai";
// AiOutlineSearch  import { IconName } from "react-icons/ai";
// FaSearch import { IconName } from "react-icons/fa";
// MdOutlineAddBox
// AiOutlineHeart import { IconName } from "react-icons/ai";
// AiFillHeart import { IconName } from "react-icons/ai";
// CgProfile import { IconName } from "react-icons/cg";

export default function Footer() {
  const handleHomeClick = () => {
    alert("Home");
  };

  const handleSearchClick = () => {};

  const handleAddClick = () => {
    alert("Add");
  };

  const handleHeartClick = () => {
    alert("Likes");
  };

  const handleProfileClick = () => {
    alert("Profile");
  };
  return (
    <footer className="footer-cont">
      <button className="home" onClick={handleHomeClick}>
        <AiOutlineHome />
      </button>
      <button className="search" onClick={handleSearchClick}>
        <FaSearch />
      </button>
      <button className="add" onClick={handleAddClick}>
        <MdOutlineAddBox />
      </button>
      <button className="heart" onClick={handleHeartClick}>
        <AiOutlineHeart />
      </button>
      <button className="profile" onClick={handleProfileClick}>
        <CgProfile />
      </button>
    </footer>
  );
}
