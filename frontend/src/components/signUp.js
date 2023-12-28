import React from "react";
import { Link } from 'react-router-dom';

function signUp(){
    return(
        <div className="signupf orm">
            <h1>Sign Up</h1>
            <form className="w-70">
                <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email Address*</label>
                <input type="email"></input>
                <label>Password*</label>
                <input type="password"></input>
                <button type="button">Submit</button>
            </form>
        </div>
    );
}

export default signUp;