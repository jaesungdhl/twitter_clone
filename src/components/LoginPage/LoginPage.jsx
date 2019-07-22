import React from "react";
import Navbar from "./Navbar";
import LoginPageForm from "./LoginPageForm";

const LoginPage = (props) => {
    return (
        <div class="loginPage">
            <Navbar/>
            <LoginPageForm/>
        </div>
    )
}

export default LoginPage;