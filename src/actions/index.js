import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=melbotoclock';

export function fetchPosts(params) {
    return function(dispatch) {
        return axios
            .get(`${ROOT_URL}/posts${API_KEY}`)
            .then(results => {
                return dispatch({
                    type: FETCH_POSTS,
                    payload: results.data
                });
            });
    }
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    }
}
