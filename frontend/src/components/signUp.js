import React from "react";
import { Link } from 'react-router-dom';

function signUp(){
    return(
        <div className="grid justify-center bg-grey-light mx-auto my-20 p-5 rounded-3xl max-w-lg">
            <h1 className="text-4xl text-black text-center mb-4">Sign Up</h1>
            <form className="w-96 grid">
                <label className="text-gray-500">First Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your first name here"></input>
                <label className="text-gray-500">Last Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your last name here"></input>
                <label className="text-gray-500">Email Address*</label>
                <input type="email" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your email here"></input>
                <label className="text-gray-500">Password*</label>
                <input type="password" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your password here"></input>
                <div className="btn section flex m-4 ml-0">
                    <button
                        type="submit"
                        className="mx-auto px-5 py-2 px-10 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary"
                        >
                        Sign Up
                    </button>
                </div>
                    <div className="LoginLink text-center text-gray-500 m-4">
                        Already have an account?
                        <Link to="/login">
                        <span className="text-primary">Log in here</span> 
                        </Link> 
                    </div>
                
            </form>
        </div>
    );
}

export default signUp;