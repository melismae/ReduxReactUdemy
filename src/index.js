// importing a library called React
import React from 'react';
// need to import ReactDOM to insert component into the DOM
import ReactDOM from 'react-dom';
//import the const from the component
import SearchBar from './components/search_bar';
// YouTube API Key
const API_KEY = "AIzaSyCbyCp9lgQtSGsadfi2sp0mySjEScSIb1Y";

// Create a new component. This component should producer some HTML

// declaring a constant called App and assigning it a function
// this creates a class -> an instance of a component
// const App = function() {
//   return <div>Hi!</div>;
// }

// This takes the function above and moves it into ES6 syntax
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it on the page (in the DOM)

// This will cause an error because we're not passing the JSX
// ReactDOM.render(App);

// This will cause an error "Target container is not a DOM element" Because we're not telling it where to put it.
// ReactDOM.render(<App />);

// Take this component, render it, and put it into this specific node (or element). Need to pass the JSX & the reference to the container
ReactDOM.render(<App />, document.querySelector('.container'));
