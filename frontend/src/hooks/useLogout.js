import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    const { dispatch } = useAuthContext();
    
    const Logout = () => {
        if (dispatch) {
            // remove user from storage
            localStorage.removeItem('user');

            // dispatch logout function
            dispatch({ type: 'LOGOUT' });
        } else {
            console.error("Dispatch function not available");
        }
    }

    return { Logout };
}

