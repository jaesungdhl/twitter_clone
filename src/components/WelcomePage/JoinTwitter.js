import React from "react";
import LoginForm from "./LoginForm";
import "./WelcomePage.css";

const JoinTwitter = (props) => {
    return (
        <aside>
                <LoginForm/>
                <div className="sign-up-field">
                    <div className="icon-area"><i class="fab fa-twitter"></i></div>
                        <h1>See what's happening in the world right now</h1>
                        <h2>Join Twitter today.</h2>
                        <div className="auth-btns">
                            <button className="btn btn-primary auth-btn" id="sign-up">Sign Up</button>
                            <button className="btn btn-primary auth-btn" id="log-in">Log in</button>
                        </div>
                </div>
        </aside>
    )
}

export default JoinTwitter;