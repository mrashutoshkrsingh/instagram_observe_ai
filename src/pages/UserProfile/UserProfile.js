import React from "react";
import FollowersContainer from "../../components/FollowersContainer/FollowersContainer";
import "./UserProfile.scss";
import { GoVerified } from "react-icons/go";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { BsSave } from "react-icons/bs";
import PostGallery from "../../components/PostGallery/PostGallery";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../services/postService";
import { getTimeLineUser } from "../../services/userService";
import Layout from "../../components/Layout/Layout";

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
    description,
  } = getTimeLineUser();

  const handleOptionsClick = () => alert("Options");

  return (
    <Layout title="User Profile" onOptionsClick={handleOptionsClick}>
      <main className="user-profile-cont">
        <section className="user-profile-sec-1 px-10 py-10">
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
        </section>
        <section className="user-profile-username px-10">
          {username}
          {isVerified && (
            <span className="user-verified">
              <GoVerified />
            </span>
          )}
        </section>
        <section className="user-profile-name px-10">{name}</section>
        <section className="user-profile-description px-10">
          {description}
        </section>
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
        <section className="posts-cont">
          <PostGallery
            images={posts}
            onClick={(id) => {
              navigate(`/posts/${id}`);
            }}
          />
        </section>
      </main>
    </Layout>
  );
}
