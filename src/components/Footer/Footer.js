import React from "react";
import "./Footer.scss";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// AiOutlineHome import { IconName } from "react-icons/ai";
// AiFillHome import { IconName } from "react-icons/ai";
// AiOutlineSearch  import { IconName } from "react-icons/ai";
// FaSearch import { IconName } from "react-icons/fa";
// MdOutlineAddBox
// AiOutlineHeart import { IconName } from "react-icons/ai";
// AiFillHeart import { IconName } from "react-icons/ai";
// CgProfile import { IconName } from "react-icons/cg";
export default function Footer() {
  return (
    <footer className="footer-cont">
      <button className="home">
        <AiOutlineHome />
      </button>
      <button className="search">
        <AiOutlineSearch />
      </button>
      <button className="add">
        <MdOutlineAddBox />
      </button>
      <button className="heart">
        <AiOutlineHeart />
      </button>
      <button className="profile">
        <CgProfile />
      </button>
    </footer>
  );
}
