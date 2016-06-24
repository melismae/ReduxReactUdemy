import React, { Component } from 'react';
import { connect } from 'react-redux';
//import the actions
import { selectBook } from '../actions/index';
// a function to make sure that the action generated flows through all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li onClick={() => this.props.selectBook(book)}
            className="list-group-item"
            key={book.title}>
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// takes application state as argument
function mapStateToProps(state) {
  // whatever is returned from here
  // will show up in BookList
  return {
    books: state.books
  }
}

// Anything returned from the function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    // it flows through the dispatch funtion - like a funnel
    // so here it looks at selectBook and dispatches it
    // selectBook is just a function that creates an object
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container, it needs to know about
// this new dipatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
