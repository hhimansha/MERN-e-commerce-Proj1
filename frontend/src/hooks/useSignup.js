// useSignup.js
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (firstname, lastname, email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:9092/api/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname, lastname, email, password })
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
            const AdminRole = json.AdminRole || false; // Check if the logged-in user is an admin
            dispatch({ type: 'LOGIN', payload: { ...json, AdminRole } });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return { signup, isLoading, error };
};
