import React, {Component} from "react";
import Navbar from "./Navbar";
import ResetForm from "./ResetForm";

class PasswordResetPage extends Component{
    render(){
        return (
            <div>
                <Navbar/>
                <ResetForm/>
            </div>
        )
    }
}

export default PasswordResetPage;