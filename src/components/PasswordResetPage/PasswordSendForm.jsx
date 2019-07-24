import React from "react";
import {Link} from "react-router-dom";

const PasswordSendForm = (props) => {
    return (
        <div className="container">
            <div className="form-container">
                <h1 id="password-reset-page-header1">How do you want to reset your password?</h1>
                <form>
                    <div class="loginField">
                        <h2 id="password-reset-page-header2">We found the following information associated with your account.</h2>
                        <div class="loginInput" id="password-reset-page-login-input-container">
                            <label for="correct-account"><input id="password-send-page-login-input" name="correct-account" type="radio" checked/>Email a link to <strong>ja********@n****.***</strong></label>
                        </div>
                        <div className="bottom-form-container" id="password-reset-page-bottom-form-container">
                            <Link to ="/account/reset_password_sent"><input type="submit" class="login-btn btn btn-primary" value="Continue" style={{width: "7em"}}/></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordSendForm;