import React, {Component} from "react";

class LeftNav extends Component{
  render(){
    return(
      <nav className="left-nav">
        <ul className="left-nav-ul">
          <li className="left-nav-li"><div className="list-item"><i class="fab fa-twitter left-twitter-icon"></i></div></li>
          <li className="left-nav-li"><div className="list-item"><i class="fas fa-home left-nav-icon"></i>Home</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="fas fa-hashtag left-nav-icon"></i>Explore</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="fas fa-bell left-nav-icon"></i>Notification</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="far fa-envelope left-nav-icon"></i>Messages</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="far fa-bookmark left-nav-icon"></i>Bookmarks</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="fas fa-list left-nav-icon"></i>Lists</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="fas fa-user-circle left-nav-icon"></i>Profile</div></li>
          <li className="left-nav-li"><div className="list-item"><i class="fas fa-chevron-circle-down left-nav-icon"></i>More</div></li>
        </ul>
        <button className="btn left-nav-search-btn">Search</button>
      </nav>
    )
  }
}

export default LeftNav;