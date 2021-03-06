import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading:null,
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading:false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    localStorage.setItem('token', action.payload.token);
    return {
      ...state,
      ...action.payload,
      isAuthenticated:true,
      isLoading:false
    }
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token")
      return {
        ...state,
        token:null,
        isAuthenticated: false,
        isLoading:false,
        user: {}
      };
    default:
      return state;
  }
}
