import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import api from '../api';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  return async (dispatch) => {
    const response = await api.get('/comments');
    const comments = response.data.map((comment) => comment.body);
    dispatch({
      type: FETCH_COMMENTS,
      payload: comments
    });
  };
}