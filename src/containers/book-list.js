import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item" key={book.title}>{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
