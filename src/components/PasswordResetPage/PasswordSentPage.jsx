import React from "react";
import Navbar from "./Navbar";
import PasswordSentMessage from "./PasswordSentMessage";

const PasswordSentPage = (props) => {
    return (
        <div>
            <Navbar/>
            <PasswordSentMessage/>
        </div>
    )
}

export default PasswordSentPage;