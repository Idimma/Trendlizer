import { LOGIN } from './types';

export const navigateToLogin = () => dispatch => {
  dispatch({
    type: LOGIN
  });
};
