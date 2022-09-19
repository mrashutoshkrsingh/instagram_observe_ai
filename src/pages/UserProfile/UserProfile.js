import React from "react";
import FollowersContainer from "../../components/FollowersContainer/FollowersContainer";
import Header from "../../components/Header/Header";
import "./UserProfile.scss";
import { GoVerified } from "react-icons/go";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { BsSave } from "react-icons/bs";
import PostGallery from "../../components/PostGallery/PostGallery";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { getPosts } from "../../services/postService";
import { getTimeLineUser } from "../../services/userService";

export default function UserProfile() {
  const navigate = useNavigate();
  const posts = getPosts();
  const {
    username,
    isVerified,
    name,
    mobile,
    postsCount,
    followersCount,
    followingsCount,
    dpUrl,
  } = getTimeLineUser();

  return (
    <div className="user-profile-cont">
      <Header title="UserProfile" onBack={() => {}} onOptionsClick={() => {}} />
      <div className="user-profile-sec-1 px-10 py-10">
        <div className="user-profile-img-cont">
          <img
            className="user-profile-img b-50"
            src={dpUrl}
            alt={username}
            width={70}
            height={70}
          />
        </div>
        <FollowersContainer
          postsCount={postsCount}
          followersCount={followersCount}
          followingsCount={followingsCount}
        />
      </div>
      <div className="user-profile-username px-10">
        {username}
        {isVerified && (
          <span className="user-verified">
            <GoVerified />
          </span>
        )}
      </div>
      <div className="user-profile-name px-10">{name}</div>
      <div className="user-profile-description px-10">
        This is a user profile description for the user profile page of the user
        profile page of the user profile page of the user profile page of the
        user profile.
      </div>
      {mobile && <button className="btn-outline">Call</button>}
      <div className="user-profile-tab">
        <button className="tab-btn-item active">
          <TbGridDots />
        </button>
        <button className="tab-btn-item">
          <IoReorderThreeOutline />
        </button>
        <button className="tab-btn-item">
          <BsSave />
        </button>
      </div>
      <div className="posts-cont">
        <PostGallery
          images={posts}
          onClick={(id) => {
            navigate(`/posts/${id}`);
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
