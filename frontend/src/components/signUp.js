import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

function SignUp(){
    const[firstname, setFName] = useState('')
    const[lastname, setLName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('') 
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(firstname, lastname, email, password)
    }

    return(
        <div className="grid justify-center bg-grey-light mx-auto my-20 p-5 rounded-3xl max-w-lg drop-shadow-md">
            <h1 className="text-4xl text-black text-center mb-4">Sign Up</h1>
            <form className="w-96 grid" onSubmit={handleSubmit}>
                <label className="text-gray-500">First Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your first name here" onChange={(e) => setFName(e.target.value)} value={firstname}></input>
                <label className="text-gray-500">Last Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your last name here" onChange={(e) => setLName(e.target.value)} value={lastname}></input>
                <label className="text-gray-500">Email Address*</label>
                <input type="email" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="text-gray-500">Password*</label>
                <input type="password" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your password here" onChange={(e) => setPassword(e.target.value)} value={password}></input>
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
                    <span className="text-primary"> Log in here</span> 
                    </Link> 
                </div>
                
            </form>
        </div>
    );
}

export default SignUp;