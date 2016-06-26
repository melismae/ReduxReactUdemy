import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props) {
        this.props.createPost(props)
            //note - this then block DOES NOT WORK. it was part of the tutorial.
            // .then((res) => {
            //     // blog post has been created, navigate the user to the index
            //     // navigate by calling .this.context.router.push
            //     this.context.router.push('/');
            // })
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title'
    }
    if (!values.categories) {
        errors.categories = 'Enter at least one category'
    }
    if (!values.content) {
        errors.content = 'Enter some content'
    }
    return errors;
}

export default reduxForm({
    // name of the form - doesn't have to match the component but has to be unique
    form: 'PostsNew',
    // fields to watch
    fields: [
        'title',
        'categories',
        'content'
    ],
    validate
}, null, { createPost })(PostsNew);
