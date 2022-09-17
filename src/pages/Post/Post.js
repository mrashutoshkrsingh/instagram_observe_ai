import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { AiOutlineComment, AiOutlineSave } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import "./Post.scss";

// BsHeart
// AiOutlineComment
// FiSend
// AiOutlineSave
export default function Post() {
  return (
    <div className="post-cont">
      <ProfileHeader />
      <div className="post-img">
        <img
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt="loading.."
          lang="lazy"
        />
      </div>
      <div className="post-action-cont ">
        <div className="action-grp-sec-1">
          <button className="action-btn">
            <BsHeart size={25} />
          </button>
          <button className="action-btn">
            <AiOutlineComment size={28} />
          </button>
          <button className="action-btn">
            <FiSend size={25} />
          </button>
        </div>
        <div className="action-grp-sec-2">
          <button className="action-btn">
            <AiOutlineSave size={25} />
          </button>
        </div>{" "}
      </div>
      <div className="post-user-description">
        <strong className="post-username">gopro</strong>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </div>
    </div>
  );
}
