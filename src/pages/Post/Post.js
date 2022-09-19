/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
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

import Layout from "../../components/Layout/Layout";
import useEffectOnce from "../../hooks/useEffectOnce";

export default function Post() {
  const [post, setPost] = useState({});

  let { postId } = useParams();
  let navigate = useNavigate();

  useEffectOnce(() => {
    const newPost = getPostById(postId);
    setPost(newPost);
  });

  const { dpUrl, username } = getTimeLineUser();

  const customComments = getPostCommentsByPostId(postId, true);

  const handleOnBack = useCallback(() => navigate("/"), []);

  const handleLikeClick = useCallback(() => {
    setPost((prevPost) => {
      const tempPost = { ...prevPost };
      tempPost.totalLikes = (tempPost.totalLikes || 0) + 1;
      return tempPost;
    });
  }, []);

  const handleShare = useCallback(() => alert("Share!"), []);

  const handleSave = useCallback(() => alert("Save!"), []);
  return (
    <Layout title="Photo" onBack={handleOnBack}>
      <main className="post-cont">
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
            <button className="action-btn" onClick={handleLikeClick}>
              <BsHeart size={25} />
            </button>
            <button
              className="action-btn"
              onClick={() => navigate(`/posts/${postId}/comments`)}
            >
              <AiOutlineComment size={28} />
            </button>
            <button className="action-btn" onClick={handleShare}>
              <FiSend size={25} />
            </button>
          </div>
          <div className="action-grp-sec-2">
            <button className="action-btn" onClick={handleSave}>
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
            <CommentItem comment={comment} isCustom={true} key={comment.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
