import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";
import "./Header.scss";
export default function Header({ onBack, title, onOptionsClick }) {
  return (
    <div className="header-cont">
      <div className="header-root">
        {onBack && (
          <button className="btn-back">
            <IoIosArrowBack />
          </button>
        )}
        <div className="header-title">{title}</div>
        {onOptionsClick && (
          <buttion className="btn-options">
            <BiDotsHorizontal />
          </buttion>
        )}
      </div>
    </div>
  );
}
