// Login.js
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Import Navigate
import { useLogin } from "../hooks/useLogin";

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { login, error, isLoading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  // Check if already authenticated and redirect
  if (localStorage.getItem("user")) {
    return <Navigate to="/" />;
  }

    return(
        <div className="grid justify-center bg-grey-light mx-auto my-20 p-5 rounded-3xl max-w-lg drop-shadow-md">
            <h1 className="text-4xl text-black text-center mb-4">Log In</h1>
            <form className="w-96 grid" onSubmit={handleSubmit}>
                
                <label className="text-gray-500">Email Address*</label>
                <input type="email" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="text-gray-500">Password*</label>
                <input type="password" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your password here" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <div className="btn section flex m-4 ml-0">
                    <button disabled={isLoading}
                        type="submit"
                        className="mx-auto px-5 py-2 px-10 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary"
                        >
                        Log In
                    </button>
                </div>

                {error && (
                <div className="text-red text-center m-2 text-2xl">
                    {error}
                </div>
                )}

                <div className="LoginLink text-center text-gray-500 m-4">
                    New to Verbidise? 
                    <Link to="/signup">
                    <span className="text-primary"> Sign up here</span> 
                    </Link>
                </div>
                
            </form>
        </div>
    );
}

export default LogIn;