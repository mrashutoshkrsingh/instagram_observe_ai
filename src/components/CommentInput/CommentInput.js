import React, { memo } from "react";
import "./CommentInput.scss";
import { FiSend } from "react-icons/fi";
import TextareaAutosize from "react-textarea-autosize";
import "./CommentInput.scss";

export default memo(function CommentInput({
  textAreaRef,
  inputText,
  handleAddComment,
  handleChangeInputText,
}) {
  console.log("Input text", inputText);
  return (
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
  );
});
