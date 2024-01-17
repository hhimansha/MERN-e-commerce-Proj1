import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = ({ navigate }) => { // Accept navigate as a prop
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:9092/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorMessage = await response.json();

        if (errorMessage && errorMessage.message) {
          throw new Error(errorMessage.message);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      const json = await response.json();

      // Save user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Update auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);

      // Check if the user is an admin and redirect to AdminDash
      if (json.isAdmin) {
        navigate('/admindash');
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { login, isLoading, error };
};