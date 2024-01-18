import { createContext, useReducer } from 'react';

export const BooksContext = createContext();

export const booksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return { 
        book: action.payload 
      };
    case 'CREATE_BOOK':
      return { 
        book: [action.payload, ...state.book] 
      };
    case 'DELETE_BOOK':
      return{
        book : state.book.filter((b) => b._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, { 
    book: null
  });
  
  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      { children }
    </BooksContext.Provider>
  );
};
