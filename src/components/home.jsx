import React from "react";
import Feed from "../components/feed";
import LeftNav from "../components/left-nav";
import RightContainer from "../components/right-container";
import TopNav from "../components/top-nav";

function Home() {
    return (<div>
      <Feed />
      <LeftNav />
      <RightContainer />
      <TopNav />
    </div>)
  }

export default Home;