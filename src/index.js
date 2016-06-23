// Lodash lib
import _ from 'lodash';

// importing a library called React
import React, { Component } from 'react';
// need to import ReactDOM to insert component into the DOM
import ReactDOM from 'react-dom';

//import the YT npm module
import YTSearch from 'youtube-api-search';

//import the const from the component
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API Key
const API_KEY = "AIzaSyCbyCp9lgQtSGsadfi2sp0mySjEScSIb1Y";

// Create a new component. This component should producer some HTML

// declaring a constant called App and assigning it a function
// this creates a class -> an instance of a component
// const App = function() {
//   return <div>Hi!</div>;
// }

// This takes the function above and moves it into ES6 syntax
class App extends Component {
  constructor(props) {
    super(props);
    //in between the first render and when the data is fetched there is some time - you'll see a flash of 0 then 5
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
      },
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    )
  }

  render () {
    // to throttle the search with Lodash debounce
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)

// This will cause an error because we're not passing the JSX
// ReactDOM.render(App);

// This will cause an error "Target container is not a DOM element" Because we're not telling it where to put it.
// ReactDOM.render(<App />);

// Take this component, render it, and put it into this specific node (or element). Need to pass the JSX & the reference to the container
ReactDOM.render(<App />, document.querySelector('.container'));
