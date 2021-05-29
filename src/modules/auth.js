import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';
const LOGOUT = 'auth/LOGOUT';

// export const login = createAction(LOGIN, (user) => user);
export const logout = createAction(LOGOUT);

export const login = (email, password) => async (dispatch) => {
  console.log('login', 'dd');
  dispatch({ type: LOGIN });
  try {
    const res = await axios({
      method: 'post',
      url: '/auth/login',
      data: {
        email,
        password,
      },
    });
    console.log('try');
    if (res.data.status === 200) {
      console.log('success');
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
    } else {
      alert(res.data.text);
      dispatch({ type: LOGIN_FAIL, payload: res.data.text });
    }
  } catch (e) {
    console.error('login error', e);
  }
};

const initialState = {
  user: null,
};

const auth = handleActions(
  {
    // [LOGIN]: (state, { payload: user }) => ({ ...state, user }),
    [LOGIN]: (state) => state,
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({ ...state, user }),
    [LOGOUT]: (state, { payload: user }) => ({ ...state, user }),
  },
  initialState
);

export default auth;
