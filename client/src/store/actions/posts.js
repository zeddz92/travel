import * as actionTypes from './types';

function requestPosts() {
    return {
        type: actionTypes.REQUEST_POSTS,
        error: false
    }
}

function receivePosts(category, res) {
    return {
        type: actionTypes.RECEIVE_POSTS,
        payload: {
          ...res.data
        },
        error: false
    }
}

function errorPost(category, error) {
    return {
        type: actionTypes.ERROR_POSTS,
        error: {message: error.message, code: error.status}
    }
}

const fetchPosts = (url, category) => (dispatch, getState, api) => {
    dispatch(requestPosts(category));

    return api.get(url)
        .then(
            response => dispatch(receivePosts(category, response)),
            error => dispatch(errorPost(category, error))
        );
};


export const fetchPostBy = (category = null, page = 1) => (dispatch) => {
    let url =`/categories/${category}/posts?page=${page}`;

    if (!category) {
        url = `/posts?page=${page}`
    }

    return dispatch(fetchPosts(url, category))

};