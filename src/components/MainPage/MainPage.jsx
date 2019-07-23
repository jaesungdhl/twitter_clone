import React, {Component} from "react";
import ProfileCard from "./ProfileCard";
// import LeftNav from "../components/left-nav";
// import RightContainer from "../components/right-container";
// import TopNav from "../components/top-nav";

class MainPage extends Component{
  render(){
    return (
      <div>
        <ProfileCard />
      {/* <LeftNav />
      <RightContainer />
      <TopNav /> */}
      </div>
    )
  }  
}

export default MainPage;