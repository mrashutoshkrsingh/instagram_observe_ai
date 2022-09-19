import React from "react";
import timeSince from "../../utils/timeSince";
import { BsHeart } from "react-icons/bs";
import "./CommentItem.scss";

export default function CommentItem({
  comment,
  nestedCommentId,
  textAreaRef,
  setReplyTo,
  setComments,
  setNestedCommentId,
  setInputText,
  isCustom,
}) {
  return (
    <>
      <div className="comment-cont" key={comment.id}>
        <div className="comment-col-1">
          <img
            src={comment.createdBy?.dpUrl}
            alt={comment.createdBy?.name}
            className="b-50"
          />
        </div>
        <div className="comment-col-2">
          <div className="row">
            <strong>{comment.createdBy.name}</strong>
            {comment.text}
          </div>
          <div className="row">
            <span className="comment-time">{timeSince(comment.createdAt)}</span>
            <span className="comment-likes-count">
              {comment.likesCount} Like
            </span>
            {!isCustom && (
              <button
                className="comment-reply-btn"
                onClick={() => {
                  setReplyTo({
                    username: comment.createdBy.name,
                    parentCommentId: comment.id,
                  });
                  setInputText(`@${comment.createdBy.name + " "}`);
                  textAreaRef.current.focus();
                }}
              >
                Reply
              </button>
            )}
          </div>
        </div>
        {!isCustom && (
          <button
            type="button"
            className="comment-col-3"
            onClick={() => {
              setComments((prevComments) =>
                prevComments.map((prevComment) => {
                  if (prevComment.id === comment.id) {
                    const tempComment = { ...prevComment };
                    tempComment.likesCount = (tempComment.likesCount ?? 0) + 1;
                    return tempComment;
                  }
                  return prevComment;
                })
              );
            }}
          >
            <BsHeart size={20} />
          </button>
        )}
      </div>
      {!isCustom && comment.children && (
        <div className="comment-nested-cont">
          <button
            className="nested-comment-btn"
            onClick={() => {
              if (comment.id === nestedCommentId) {
                setNestedCommentId(null);
              } else {
                setNestedCommentId(comment.id);
              }
            }}
          >
            --
            {comment.id === nestedCommentId ? "Hide Reply" : "View Reply"}
          </button>
          {nestedCommentId === comment.id && (
            <div className="comments-nested">
              {comment.children.map((childComment) => (
                <>
                  <div className="comment-cont" key={childComment.id}>
                    <div className="comment-col-1">
                      <img
                        src={childComment.createdBy.dpUrl}
                        alt={childComment.createdBy.name}
                        className="b-50"
                      />
                    </div>
                    <div className="comment-col-2">
                      <div className="row">
                        <strong>{childComment.createdBy.name}</strong>
                        {childComment.text}
                      </div>
                      <div className="row">
                        <span className="comment-time">
                          {" "}
                          {timeSince(childComment.createdAt)}
                        </span>
                        <span className="comment-likes-count">
                          {childComment.likesCount} Like
                        </span>
                        <button
                          className="comment-reply-btn"
                          onClick={() => {
                            setReplyTo({
                              username: childComment.createdBy.name,
                              parentCommentId: comment.id,
                            });
                            setInputText(
                              `@${childComment.createdBy.name + " "}`
                            );
                            textAreaRef.current.focus();
                          }}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                    <button
                      className="comment-col-3"
                      onClick={() => {
                        setComments((prevComments) =>
                          prevComments.map((prevComment) => {
                            if (prevComment.id === comment.id) {
                              let tempComment = prevComment;
                              prevComment.children = prevComment.children.map(
                                (child) => {
                                  if (child.id === childComment.id) {
                                    const tempChild = { ...child };
                                    tempChild.likesCount =
                                      (tempChild.likesCount ?? 0) + 1;
                                    return tempChild;
                                  }
                                  return child;
                                }
                              );
                              return tempComment;
                            }
                            return prevComment;
                          })
                        );
                      }}
                    >
                      <BsHeart size={20} />
                    </button>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
