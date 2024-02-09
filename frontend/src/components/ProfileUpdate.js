import { useAuthContext } from "../hooks/useAuthContext"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProfileUpdate = () => {
    const { user, dispatch } = useAuthContext();
    const [firstname, setFName] = useState(user.firstname || "");
    const [lastname, setLName] = useState(user.lastname || "");
    const [email, setEmail] = useState(user.email || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

  
    useEffect(() => {
      setPassword(user.password || "");
    }, [user]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
  
      const updatedUser = { firstname, lastname, email };
  
      const response = await fetch(
        `http://localhost:9092/api/users/user/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(updatedUser),
        }
      );
  
      const json = await response.json();
  
      if (!response.ok) {
        setError(json.error);
      }
  
      if (response.ok) {
        dispatch({ type: "UPDATE_USER", payload: json });
        navigate("/user");

      }
    };
  
    return(
        <div>
        <div className="grid justify-center bg-grey-light mx-auto mb-16 mt-12 p-5 rounded-xl max-w-lg drop-shadow-md">
            <h1 className="text-2xl text-black text-center mb-4">Update profile</h1>
            <form className="w-96 grid" onSubmit={handleSubmit}>
                <label className="text-gray-500">First Name</label>
                <input type="text" className="rounded-lg p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your first name here" onChange={(e) => setFName(e.target.value)} value={firstname}></input>
                <label className="text-gray-500">Last Name</label>
                <input type="text" className="rounded-lg p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your last name here" onChange={(e) => setLName(e.target.value)} value={lastname}></input>
                <label className="text-gray-500">Email Address</label>
                <input type="email" className="rounded-lg p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="text-gray-500">Password</label>
                <input
                    type="password"
                    className="rounded-lg p-2 px-5 mb-4 border border-gray-300"
                    placeholder="Enter your new password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    /> 
                <label className="text-gray-500">Re-enter Password</label> 
                <input
                    type="password"
                    className="rounded-lg p-2 px-5 mb-4 border border-gray-300"
                    placeholder="Re-enter your new password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                     value={confirmPassword}
                />  
                
                              
                <div className="btn section flex m-4 ml-0">
                    <button
                        type="submit"
                        className="mx-auto px-5 py-2 px-10 text-20 text-white font-semibold rounded-lg border focus:outline-none bg-primary"
                        >
                        Update
                    </button>
                </div>

                {error && (
                    
                    
                    <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-full bg-red-50 dark:text-red-400 justify-center border-red-400 border-2 " role="alert">
                        <svg class="flex-shrink-0 w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div class="ms-3 text-lg font-medium">
                        {error}
                        </div>
                    </div>
                )}
            </form>
            
        </div>

        </div>
    );
}

export default ProfileUpdate;