import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //state books equals the outcome of bookReducer
  books: BooksReducer
});

export default rootReducer;
