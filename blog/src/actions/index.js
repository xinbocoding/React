import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userId = _.uniq(_.map(getState().post, 'userId'));
    userId.forEach(id => dispatch(fetchUsers(id)));
}

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({type: 'FETCH_POSTS', payload: response.data});
};
 
export const fetchUsers = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USERS', payload: response.data});
};