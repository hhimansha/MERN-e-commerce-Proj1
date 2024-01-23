// useLogin.js
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:9092/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
      if (json.email === 'admin1@admin.com') {
        dispatch({ type: 'LOGIN', payload: { ...json, isAdmin: true } });
        navigate('/admindash');
      } else {
        dispatch({ type: 'LOGIN', payload: json });
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { login, isLoading, error };
};