import React from "react";
import {Link} from "react-router-dom";

const PasswordSentMessage = (props) => {
    return (
        <div className="container">
            <div className="form-container">
                <h1 id="password-reset-page-header1">Check your email</h1>
                <form>
                    <div class="loginField">
                        <div class="loginInput" id="password-reset-page-login-input-container">
                        We've sent an email to <strong>ja********@n****.***</strong>. Click the link in the email to reset your password.
                        <br/><br/>
If you don't see the email, check other places it might be, like your junk, spam, social, or other folders.
                        </div>
                        <div className="bottom-form-container" id="password-reset-page-bottom-form-container">
                            <Link to="#">I didn't receive the email</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordSentMessage;