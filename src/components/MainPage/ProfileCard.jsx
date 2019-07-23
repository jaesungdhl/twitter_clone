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
          <div class="profile-pic-container"><i class="fas fa-plus-circle"></i></div>
        </div>
        <p class="card-text"></p>
      </div>
    </div>
  );
}

export default ProfileCard;