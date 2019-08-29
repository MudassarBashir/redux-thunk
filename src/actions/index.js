import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
});

//---------------------------------------------------------
// Old Syntax to help understand better the relationship between
// fetchUser and _fetchUser.
//---------------------------------------------------------

// // This is now our action creator which is called by the component.
// export const fetchUser = function(id) {
//   console.log('fetchUser called with id ', id);
//   return function(dispatch) {
//     console.log('inner function called with id ', id);
//     _fetchUser(id, dispatch);
//   };
// };
//
// // This is the memoized function called by the action creator.
// const _fetchUser = _.memoize(async function(id, dispatch) {
//   console.log('memoized function called with id ', id);
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
