import React, {Component} from "react";
import "./PasswordResetPage.css";
import {Link} from "react-router-dom";

class ResetForm extends Component{
    render(){
        return(
            <div className="container">
                <div className="form-container">
                    <h1 id="password-reset-page-header1">Find your Twitter account</h1>
                    <form>
                        <div class="loginField">
                            <h2 id="password-reset-page-header2">Enter your email, phone number, or username.</h2>
                            <div class="loginInput" id="password-reset-page-login-input-container">
                                <input id="password-reset-page-login-input" type="text"/>
                            </div>
                            <div className="bottom-form-container" id="password-reset-page-bottom-form-container">
                                <input type="submit" class="login-btn btn btn-primary" value="Search"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ResetForm;