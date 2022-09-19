import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";
import "./Header.scss";
export default function Header({ onBack, title, onOptionsClick }) {
  return (
    <header className="header-cont">
      <div className="header-root">
        {onBack && (
          <button className="btn-back" onClick={onBack}>
            <IoIosArrowBack />
          </button>
        )}
        <div className="header-title">{title}</div>
        <div className="header-options-cont">
          {onOptionsClick && (
            <button className="btn-options" onClick={onOptionsClick}>
              <BiDotsHorizontal />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
