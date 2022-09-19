import userTimeLineData from "../constants/userTimeLine.json";

export function getPosts() {
  return userTimeLineData.posts;
}

export function getPostById(id) {
  return userTimeLineData.posts.find((p) => p.id === id);
}

export function getPostCommentsByPostId(postId, isCustom) {
  const post = userTimeLineData.posts.find((p) => p.id === postId);

  if (!post) throw new Error("Post not found");

  if (isCustom) {
    return post.comments.filter((c) => c.isCustom);
  }
  return post.comments.slice();
}
