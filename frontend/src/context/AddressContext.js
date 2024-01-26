import { createContext, useReducer } from 'react';

export const AddressContext = createContext();

export const addressReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return { 
        userAddresses: action.payload 
      };
    case 'CREATE_ADDRESS':
    return { 
        userAddresses: [action.payload, ...state.userAddress] 
    };
    case 'DELETE_ADDRESS':
      return{
        userAddresses : state.userAddress.filter((b) => b._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export const AddressContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, { 
    userAddresses: []
  });
  
  
  return (
    <AddressContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AddressContext.Provider>
  );
};
