import React from "react";
import { Link } from 'react-router-dom';

function signUp(){
    return(
        <div className="grid justify-center bg-grey-light mx-auto p-5 rounded-3xl max-w-lg shadow-2xl">
            <h1 className="text-4xl text-black text-center mb-4">Sign Up</h1>
            <form className="w-96 grid">
                <label className="text-grey">First Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-black"></input>
                <label className="text-grey">Last Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-black"></input>
                <label className="text-grey">Email Address*</label>
                <input type="email" className="rounded-full p-2 px-5 mb-4 border border-black"></input>
                <label className="text-grey">Password*</label>
                <input type="password" className="rounded-full p-2 px-5 mb-4 border border-black"></input>
                <div className="btn section flex">
                <button type="button" className="px-5 text-20 text-black-600 font-semibold rounded-full border border-black hover:text-white hover:bg-grey hover:border-black">Clear</button>
                <button type="button" className="px-5 py-2 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary ml-3">Submit</button>
                </div>
                
            </form>
        </div>
    );
}

export default signUp;