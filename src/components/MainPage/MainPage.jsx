import React, {Component} from "react";
import ProfileCard from "./ProfileCard";
import LeftNav from "./left-nav";
// import RightContainer from "../components/right-container";
// import TopNav from "../components/top-nav";

class MainPage extends Component{
  render(){
    return (
      <div className="main-page">
        <LeftNav />
        <ProfileCard />
      {/* <RightContainer />
      <TopNav /> */}
      </div>
    )
  }  
}

export default MainPage;