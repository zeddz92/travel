import i18next from '../../locale/i18n';

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
            ...res.data,
            lng: i18next.languages[0]
        },
        error: false
    }
}

function errorPost(category, error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_POSTS,
        error: {message: error.message, code:  response.status}
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
    let url = `/categories/${category}/posts?page=${page}&lng=${i18next.languages[0]}`;

    if (!category) {
        url = `/posts?page=${page}&lng=${i18next.languages[0]}`
    }

    return dispatch(fetchPosts(url, category))

};