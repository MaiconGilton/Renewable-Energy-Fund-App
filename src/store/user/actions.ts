export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  account: {
    balance: number
    funds: {
      wind: number
      solar: number
      nature: number
    }
  }
}

interface ILoginUserAction {
  type: typeof LOGIN_USER
  payload: IUser
}

interface ILogoutUserAction {
  type: typeof LOGOUT_USER
}

export type UserActionTypes = ILoginUserAction | ILogoutUserAction

export function loginUser(user: IUser): ILoginUserAction {
  return {
    type: LOGIN_USER,
    payload: user
  };
}

export function logoutUser(): ILogoutUserAction {
  return {
    type: LOGOUT_USER
  };
}
