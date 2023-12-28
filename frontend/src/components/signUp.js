import React from "react";
import { Link } from 'react-router-dom';

function signUp(){
    return(
        <div className="grid justify-center bg-primary mx-auto p-5 ">
            <h1 className="text-4xl text-black text-center">Sign Up</h1>
            <form className="w-96 grid">
                <label>First Name</label>
                <input type="text" className="rounded-full p-2 px-5"></input>
                <label>Last Name</label>
                <input type="text" className="rounded-full p-2 px-5"></input>
                <label>Email Address*</label>
                <input type="email" className="rounded-full p-2 px-5"></input>
                <label>Password*</label>
                <input type="password" className="rounded-full p-2 px-5"></input>
                <div className="btn section flex">
                <button type="button" className="rounded-full p-2 px-5 bg-grey text-white p-4 m-2">Clear</button>
                <button type="button" className="rounded-full p-2 px-5 bg-grey text-white p-4 m-2">Submit</button>
                </div>
                
            </form>
        </div>
    );
}

export default signUp;