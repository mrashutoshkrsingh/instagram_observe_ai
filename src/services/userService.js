import currentUser from "../constants/currentUser.json";
import userTimeLineData from "../constants/userTimeLine.json";

export function getCurrentUser() {
  return currentUser;
}

export function getTimeLineUser() {
  const userData = { ...userTimeLineData };
  delete userData.posts;
  return userData;
}
