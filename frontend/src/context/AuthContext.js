// AuthContext.js
import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const user = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      return { user, isAdmin: user.isAdmin || false };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { user: null, isAdmin: false };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, isAdmin: false });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      dispatch({ type: 'LOGIN', payload: storedUser });
    }
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
