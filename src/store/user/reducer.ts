import { type IUser, LOGIN_USER, LOGOUT_USER, type UserActionTypes } from './actions';

export interface UserState {
  user: IUser | null
}

const initialState: UserState = {
  user: null
};

function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }

    case LOGOUT_USER:
      return {
        ...state,
        user: null
      }

    default:
      return state;
  }
}

export default userReducer;
