import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./WelcomePage.css";

class LoginForm extends Component{
    render(){
        return (
            <div class="login">
                <form>
                    <div class="loginField">
                        <div class="loginInput">
                            <input
                                placeholder="Phone, email, or username"
                            />
                        </div>
                        <div class="loginInput" id="passwordField">
                            <input
                                placeholder="Password"
                            />
                            <Link to="/account/begin_password_reset"><a class="forgot-password" href="#">Forgot password?</a></Link>
                        </div>
                        <input type="submit" class="login-btn btn btn-primary" value="Log in"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;