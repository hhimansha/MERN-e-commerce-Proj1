import { useAuthContext } from "../hooks/useAuthContext"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
    const { user, dispatch } = useAuthContext();
  const [firstname, setFName] = useState(user.firstname || "");
  const [lastname, setLName] = useState(user.lastname || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState(""); // Initialize to an empty string
  const [confirmPassword, setConfirmPassword] = useState(""); // Initialize to an empty string
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Set the initial password value when the component mounts
  useEffect(() => {
    // You can set a default value or keep it as an empty string
    setPassword(user.password || "");
  }, [user]); // Trigger when the user data changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the new password and confirm password match
    if (password !== confirmPassword) {
        setError("Passwords do not match");
      return;
    }

    const updatedUser = { firstname, lastname, email};

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
    console.log("Backend Response:", json);

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: "UPDATE_USER", payload: json });
      navigate("/user")
      alert("Profile updated!")
    }
  };
  
  

    return(
        <div className="grid justify-center bg-grey-light mx-auto my-20 p-5 rounded-3xl max-w-lg drop-shadow-md">
            <h1 className="text-4xl text-black text-center mb-4">Update profile</h1>
            <form className="w-96 grid" onSubmit={handleSubmit}>
                <label className="text-gray-500">First Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your first name here" onChange={(e) => setFName(e.target.value)} value={firstname}></input>
                <label className="text-gray-500">Last Name</label>
                <input type="text" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your last name here" onChange={(e) => setLName(e.target.value)} value={lastname}></input>
                <label className="text-gray-500">Email Address*</label>
                <input type="email" className="rounded-full p-2 px-5 mb-4 border border-gray-300" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label className="text-gray-500">Password*</label>
                <input
                    type="password"
                    className="rounded-full p-2 px-5 mb-4 border border-gray-300"
                    placeholder="Enter your new password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />  
                <input
                    type="password"
                    className="rounded-full p-2 px-5 mb-4 border border-gray-300"
                    placeholder="Re-enter your new password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                     value={confirmPassword}
                />  
                              
                <div className="btn section flex m-4 ml-0">
                    <button
                        type="submit"
                        className="mx-auto px-5 py-2 px-10 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary"
                        >
                        Update
                    </button>
                </div>
                {error && (
                <div className="text-red text-center m-2 text-2xl">
                    {error}
                </div>
                )}
                
            </form>
        </div>
    );
}

export default ProfileUpdate;