import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./Comments.scss";
import { BsHeart } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import userTimeLineData from "../../userTimeLine.json";
import TextareaAutosize from "react-textarea-autosize";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState("");
  const commentRef = useRef();
  const [replyTo, setReplyTo] = useState({});
  let { postId } = useParams();
  const renderRef = useRef();
  const textAreaRef = useRef();
  const post = userTimeLineData.posts.find((p) => p.id === postId);

  useEffect(() => {
    if (!renderRef.current) {
      //   console.log("useEffect");
      const postComments = post.comments || [];
      setComments(postComments);
    }
    renderRef.current = true;
  }, []);

  useEffect(() => {
    const e = commentRef;
    console.log("3000");
    e.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      //   inline: "start",
    });
  }, [comments]);

  const { dpUrl, username } = userTimeLineData;
  //   console.log("rendering");

  const handleAddComment = (e) => {
    if (!inputText) return;
    setComments((prevComments) =>
      prevComments.concat({
        text: inputText,
        id: Date.now(),
        createdAt: Date().toString(),
        likesCount: 0,
        children: [],
        createdBy: {
          name: username,
          dpUrl,
        },
      })
    );
    setInputText("");
  };

  const handleChangeInputText = (e) => setInputText(e.target.value);

  return (
    <div className="comments-cont">
      <Header title="Comments" onBack={() => {}} />
      <div className="comment-items-cont">
        {comments.map((comment) => (
          <div className="comment-cont" key={comment.id}>
            <div className="comment-col-1">
              <img
                src={comment.createdBy.dpUrl}
                alt={comment.createdBy.name}
                className="b-50"
              />
            </div>
            <div className="comment-col-2">
              <div className="row">
                <strong>{comment.createdBy.name}</strong>
                {comment.text}
              </div>
              <div className="row">
                <span className="comment-time">5w</span>
                <button className="comment-reply-btn" onClick={() => {}}>
                  Reply
                </button>
              </div>
            </div>
            <button className="comment-col-3">
              <BsHeart size={20} />
            </button>
          </div>
        ))}
        <span ref={commentRef} />
      </div>
      <form className="comment-input-cont">
        <div className="send-icon">
          <FiSend size={20} />
        </div>
        <div className="comment-input">
          <TextareaAutosize
            className="form-control mr-2"
            autoFocus
            minRows={1}
            maxRows={5}
            placeholder="Add comment"
            ref={textAreaRef}
            onKeyUp={(e) => {
              if (e.key === "Enter" && e.shiftKey === false) {
                handleAddComment();
              }
            }}
            value={inputText}
            onChange={handleChangeInputText}
          />
        </div>
        <button
          className="post-button"
          disabled={!inputText}
          onClick={handleAddComment}
          type="button"
        >
          Post
        </button>
      </form>
    </div>
  );
}
