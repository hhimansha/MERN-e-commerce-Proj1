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
      return {
        book: state.book.filter((b) => b._id !== action.payload)
      };
    case 'UPDATE_BOOK_LIST':
      return {
        book: action.payload,
      };
    default:
      return state;
  }
};

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, { 
    book: []
  });
  
  
  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      { children }
    </BooksContext.Provider>
  );
};
