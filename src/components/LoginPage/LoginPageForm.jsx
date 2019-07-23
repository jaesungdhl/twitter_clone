import React, {Component} from "react";
import "./LoginPage.css";

class LoginPageForm extends Component{
    render(){
        return (
            <div className="container">
                <div className="form-container">
                    <h1>Log in to Twitter</h1>
                    <form>
                        <div class="loginField">
                            <div class="loginInput">
                                <input
                                    placeholder="Phone, email, or username"
                                />
                            </div>
                            <div class="loginInput">
                                <input
                                    placeholder="Password"
                                />
                            </div>
                            <div className="bottom-form-container">
                                <input type="submit" class="login-btn btn btn-primary" value="Log in"/>
                                <input type="checkbox" name="remember-me" class="checkbox"/><label for="remember-me">Remember Me</label><span class="separator">·</span><a class="login-page-forgot-password" href="#">Forgot password?</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="new-page-container">
                    <ul className="activate-list">
                        <li>New to Twitter?<a href="#">Sign up now »</a></li>
                        <li>Already using Twitter via text message?<a href="#">Activate your account »</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LoginPageForm;