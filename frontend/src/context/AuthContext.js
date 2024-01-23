import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, isAdmin: action.payload.isAdmin || false, loading: false };
    case 'LOGOUT':
      return { user: null, isAdmin: false, loading: false };
    case 'DELETE_USER':
      return {
        ...state,
        user: state.user.filter((u) => u._id !== action.payload._id),
      };
    case 'LOADING_COMPLETE':
      return { ...state, loading: false }; // New action type
    default:
      return state;
  }
};





export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    Admin: false,
    loading: true, // Add loading state
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      dispatch({ type: 'LOGIN', payload: storedUser });
    }

    // Set loading to false after updating the state
    dispatch({ type: 'LOADING_COMPLETE' });
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {state.loading ? (
        // You can render a loading spinner or a placeholder during loading
        <div>Loading...</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
