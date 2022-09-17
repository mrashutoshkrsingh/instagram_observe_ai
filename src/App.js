import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments/Comments";
import Post from "./pages/Post/Post";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/posts/:postId/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
