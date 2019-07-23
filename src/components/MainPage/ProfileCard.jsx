import React from "react";
import {Link} from "react-router-dom";
import "./MainPage.css";

const ProfileCard = (props) => {
  return (
    <div class="card">
      <div class="profile-link-container">
        <Link to="#"/>
      </div>
      <div class="card-body">
        <div className="profile-pic-user-name-container">
          <div class="profile-pic-container"><div class="profile-pic-container-border"><i class="fas fa-plus-circle"></i></div></div>
          <div className="profile-user-info-container">
            <a className="user-name" href="#">John Lee</a>
            <a className="user-username" href="#">@JohnLee119</a>
          </div>
        </div>
        <div className="twitter-data-info">
          <a className="twitter-data-list" href="#">
            <span className="list-title">Tweets</span>
            <span className="list-counter" id="tweet-count">1</span>
          </a>
          <a className="twitter-data-list" href="#">
            <span className="list-title">Followers</span>
            <span className="list-counter" id="follower-count">10</span>
          </a>
          <a className="twitter-data-list" href="#">
            <span className="list-title">Following</span>
            <span className="list-counter" id="following-count">100</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;