/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import "./Comments.scss";
import { useNavigate, useParams } from "react-router-dom";
import CommentItem from "../../components/CommentItem/CommentItem";
import CommentInput from "../../components/CommentInput/CommentInput";
import { getPostCommentsByPostId } from "../../services/postService";
import { getCurrentUser } from "../../services/userService";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nestedCommentId, setNestedCommentId] = useState(null);
  const commentRef = useRef();
  const [replyTo, setReplyTo] = useState(null);
  let { postId } = useParams();
  const renderRef = useRef();
  const textAreaRef = useRef();

  let navigate = useNavigate();

  useEffect(() => {
    if (!renderRef.current) {
      const postComments = getPostCommentsByPostId(postId) || [];
      setComments(postComments);
      scrollToBottom();
      textAreaRef.current.focus();
    }
    renderRef.current = true;
  }, []);

  const scrollToBottom = useCallback(() => {
    const e = commentRef;
    setTimeout(() => {
      e.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }, [commentRef]);

  const { dpUrl, username } = getCurrentUser();

  const handleAddComment = useCallback(() => {
    if (!inputText) return;
    let commentData = {
      text: inputText,
      id: Date.now(),
      createdAt: Date().toString(),
      likesCount: 0,
      isCustom: true,
      children: [],
      createdBy: {
        name: username,
        dpUrl,
      },
    };
    if (replyTo) {
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === replyTo.parentCommentId) {
            const tempComment = { ...comment };
            if (!tempComment.children) {
              tempComment.children = [];
            }
            commentData.parentCommentId = replyTo.parentCommentId;
            tempComment.children = tempComment.children.concat(commentData);
            return tempComment;
          }
          return comment;
        })
      );
    } else {
      setComments((prevComments) => prevComments.concat(commentData));
      scrollToBottom();
    }
    setInputText("");
  }, [inputText]);

  const handleChangeInputText = useCallback(
    (e) => setInputText(e.target.value),
    []
  );

  const handleBack = useCallback(() => {
    navigate(`/posts/${postId}`);
  }, []);

  return (
    <div className="comments-cont">
      <Header title="Comments" onBack={handleBack} />
      <div className="comment-items-cont">
        {comments.map((comment) => (
          <CommentItem
            comment={comment}
            key={comment.id}
            nestedCommentId={nestedCommentId}
            textAreaRef={textAreaRef}
            setReplyTo={setReplyTo}
            setComments={setComments}
            setNestedCommentId={setNestedCommentId}
            setInputText={setInputText}
          />
        ))}
        <span ref={commentRef} />
      </div>
      <CommentInput
        textAreaRef={textAreaRef}
        inputText={inputText}
        handleAddComment={handleAddComment}
        handleChangeInputText={handleChangeInputText}
      />
    </div>
  );
}
