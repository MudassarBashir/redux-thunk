import jsonplaceholder from '../apis/jsonplaceholder';

// Our components will now only call this action creator. Not the other
// ones below.
export const fetchPostsAndUsers = () => async dispatch => {
  // Whenever we call an action creator from inside an action creator we must use
  // dispatch like so. Await ensures we wait to get our posts before trying to use
  // them.
  await dispatch(fetchPosts());
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
