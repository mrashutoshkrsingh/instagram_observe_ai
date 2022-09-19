import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./Comments.scss";
// import { BsHeart } from "react-icons/bs";
import { useParams } from "react-router-dom";
// import { FiSend } from "react-icons/fi";
// import userTimeLineData from "../../constants/userTimeLine.json";
// import TextareaAutosize from "react-textarea-autosize";
// import timeSince from "../../utils/timeSince";
import CommentItem from "../../components/CommentItem/CommentItem";
import CommentInput from "../../components/CommentInput/CommentInput";
import {
  // getPostById,
  getPostCommentsByPostId,
} from "../../services/postService";
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
  // const post = userTimeLineData.posts.find((p) => p.id === postId);
  // const post = getPostById(postId);

  useEffect(() => {
    if (!renderRef.current) {
      const postComments = getPostCommentsByPostId(postId) || [];
      setComments(postComments);
      scrollToBottom();
      textAreaRef.current.focus();
    }
    renderRef.current = true;
  }, []);

  const scrollToBottom = () => {
    const e = commentRef;
    setTimeout(() => {
      e.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const { dpUrl, username } = getCurrentUser();

  const handleAddComment = () => {
    if (!inputText) return;
    if (replyTo) {
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === replyTo.parentCommentId) {
            const tempComment = { ...comment };
            if (!tempComment.children) {
              tempComment.children = [];
            }
            tempComment.children = tempComment.children.concat({
              text: inputText,
              id: Date.now(),
              createdAt: Date().toString(),
              likesCount: 0,
              isCustom: true,
              parentCommentId: replyTo.parentCommentId,
              createdBy: {
                name: username,
                dpUrl,
              },
            });
            return tempComment;
          }
          return comment;
        })
      );
    } else {
      setComments((prevComments) =>
        prevComments.concat({
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
        })
      );
      scrollToBottom();
    }
    setInputText("");
  };

  const handleChangeInputText = (e) => setInputText(e.target.value);

  // const CommentForm = () => {
  //   return (
  //     <form className="comment-input-cont">
  //       <div className="send-icon">
  //         <FiSend size={20} />
  //       </div>
  //       <div className="comment-input">
  //         <TextareaAutosize
  //           className="form-control mr-2"
  //           autoFocus
  //           minRows={1}
  //           maxRows={5}
  //           placeholder="Add comment"
  //           ref={textAreaRef}
  //           onKeyUp={(e) => {
  //             if (e.key === "Enter" && e.shiftKey === false) {
  //               handleAddComment();
  //             }
  //           }}
  //           value={inputText}
  //           onChange={handleChangeInputText}
  //         />
  //       </div>
  //       <button
  //         className="post-button"
  //         disabled={!inputText}
  //         onClick={handleAddComment}
  //         type="button"
  //       >
  //         Post
  //       </button>
  //     </form>
  //   );
  // };

  // const CommentItemCont = (comment) => {
  //   return (
  //     <>
  //       <div className="comment-cont" key={comment.id}>
  //         <div className="comment-col-1">
  //           <img
  //             src={comment.createdBy?.dpUrl}
  //             alt={comment.createdBy?.name}
  //             className="b-50"
  //           />
  //         </div>
  //         <div className="comment-col-2">
  //           <div className="row">
  //             <strong>{comment.createdBy.name}</strong>
  //             {comment.text}
  //           </div>
  //           <div className="row">
  //             <span className="comment-time">
  //               {timeSince(comment.createdAt)}
  //             </span>
  //             <span className="comment-likes-count">
  //               {comment.likesCount} Like
  //             </span>
  //             <button
  //               className="comment-reply-btn"
  //               onClick={() => {
  //                 setReplyTo({
  //                   username: comment.createdBy.name,
  //                   parentCommentId: comment.id,
  //                 });
  //                 setInputText(`@${comment.createdBy.name + " "}`);
  //                 textAreaRef.current.focus();
  //               }}
  //             >
  //               Reply
  //             </button>
  //           </div>
  //         </div>
  //         <button
  //           type="button"
  //           className="comment-col-3"
  //           onClick={(e) => {
  //             // e.preventDefault();
  //             // e.stopPropagation();
  //             // console.log("comment");
  //             setComments((prevComments) =>
  //               prevComments.map((prevComment) => {
  //                 if (prevComment.id === comment.id) {
  //                   prevComment.likesCount = (prevComment.likesCount ?? 0) + 1;
  //                   // console.log(prevComment.likesCount);
  //                 }
  //                 return prevComment;
  //               })
  //             );
  //           }}
  //         >
  //           <BsHeart size={20} />
  //         </button>
  //       </div>
  //       {comment.children && (
  //         <div className="comment-nested-cont">
  //           <button
  //             className="nested-comment-btn"
  //             onClick={() => {
  //               if (comment.id === nestedCommentId) {
  //                 setNestedCommentId(null);
  //               } else {
  //                 setNestedCommentId(comment.id);
  //               }
  //             }}
  //           >
  //             --
  //             {comment.id === nestedCommentId ? "Hide Reply" : "View Reply"}
  //           </button>
  //           {nestedCommentId === comment.id && (
  //             <div className="comments-nested">
  //               {comment.children.map((childComment) => (
  //                 <>
  //                   <div className="comment-cont" key={childComment.id}>
  //                     <div className="comment-col-1">
  //                       <img
  //                         src={childComment.createdBy.dpUrl}
  //                         alt={childComment.createdBy.name}
  //                         className="b-50"
  //                       />
  //                     </div>
  //                     <div className="comment-col-2">
  //                       <div className="row">
  //                         <strong>{childComment.createdBy.name}</strong>
  //                         {childComment.text}
  //                       </div>
  //                       <div className="row">
  //                         <span className="comment-time">
  //                           {" "}
  //                           {timeSince(childComment.createdAt)}
  //                         </span>
  //                         <span className="comment-likes-count">
  //                           {childComment.likesCount} Like
  //                         </span>
  //                         <button
  //                           className="comment-reply-btn"
  //                           onClick={() => {
  //                             setReplyTo({
  //                               username: childComment.createdBy.name,
  //                               parentCommentId: comment.id,
  //                             });
  //                           }}
  //                         >
  //                           Reply
  //                         </button>
  //                       </div>
  //                     </div>
  //                     <button
  //                       className="comment-col-3"
  //                       onClick={() => {
  //                         setComments((prevComments) =>
  //                           prevComments.map((prevComment) => {
  //                             if (prevComment.id === comment.id) {
  //                               // prevComment.likesCount = prevComment.likesCount + 1;
  //                               // console.log(prevComment.likesCount);
  //                               prevComment.children = prevComment.children.map(
  //                                 (child) => {
  //                                   if (child.id === childComment.id) {
  //                                     child.likesCount =
  //                                       (child.likesCount ?? 0) + 1;
  //                                   }
  //                                   return child;
  //                                 }
  //                               );
  //                             }
  //                             return prevComment;
  //                           })
  //                         );
  //                       }}
  //                     >
  //                       <BsHeart size={20} />
  //                     </button>
  //                   </div>
  //                 </>
  //               ))}
  //             </div>
  //           )}
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  return (
    <div className="comments-cont">
      <Header title="Comments" onBack={() => {}} />
      <div className="comment-items-cont">
        {comments.map((comment) => (
          <CommentItem
            comment={comment}
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
      {/* {CommentForm()} */}
      {/* <CommentForm /> */}
    </div>
  );
}
