//always need to import React in every component so it's in the scope of the file
import React, { Component } from 'react';

// plain JS function. functional component.
// const SearchBar = () => {
//   return <input />;
// }

// class component
// define a new class called SearchBar and give it all the functionality that React.Component has
// needs to return something - must have a render method
class SearchBar extends Component {
  // All JS classes have a constructor. First & only function called automatically when a new instance of the class is created. Reserved for doing setup in the class.
  constructor(props) {
    // calling the parent method super
    super(props);
    // initializing state by creating a new object -> properties that we want to record on the state
    // each component has its own state
    // only in the Constructor method do we give default state
    this.state = {
      term: ''
    }
  }
  // two ways of handling the onChange event. One with a function, the other with ES6 syntax

  // 1 - function that gets called with onChange
  // render() {
  //   return <input onChange={this.onInputChange} />;
  // }
  //
  // // event handler always called with the event object - describes what happened
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // 2 - ES6 syntax in the onChange handler
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
