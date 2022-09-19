import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { AiOutlineComment, AiOutlineSave } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import "./Post.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPostById,
  getPostCommentsByPostId,
} from "../../services/postService";
import { getTimeLineUser } from "../../services/userService";
import CommentItem from "../../components/CommentItem/CommentItem";

export default function Post() {
  let { postId } = useParams();
  let navigate = useNavigate();

  const post = getPostById(postId);

  const { dpUrl, username } = getTimeLineUser();

  const customComments = getPostCommentsByPostId(postId, true);

  console.log("custom comments", customComments);

  return (
    <div className="post-cont">
      <ProfileHeader
        postData={{
          username: username,
          dpUrl: dpUrl,
          location: post.location,
        }}
      />
      <div className="post-img">
        <img src={post.imgUrl} alt="loading.." loading="lazy" />
      </div>
      <div className="post-action-cont ">
        <div className="action-grp-sec-1">
          <button className="action-btn">
            <BsHeart size={25} />
          </button>
          <button
            className="action-btn"
            onClick={() => navigate(`/posts/${postId}/comments`)}
          >
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
      <div className="post-likes">{post.totalLikes} likes</div>
      <div className="post-user-description">
        <strong className="post-username">{username}</strong>
        {post.description}
      </div>
      <div className="post-comments-cont">
        {customComments.map((comment) => (
          <CommentItem comment={comment} isCustom={true} />
        ))}
      </div>
    </div>
  );
}
