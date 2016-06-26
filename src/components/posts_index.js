import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.state)
        return (
            <div>
                List of blog posts
            </div>
        )
    }
}
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);

// ^^^^ this when importing the bindActionCreators ^^^ is the vvvv same as vvvvv

export default connect(null, { fetchPosts })(PostsIndex);
