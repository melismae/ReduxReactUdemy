// selectBook is an ActionCreator - it needs to return an action
export function selectBook(book) {
  // action is an object with a type property
  // always contains a type and sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
