import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth-actions';
import { authInitialState } from './auth-state';
import { GoogleData } from '../../services/auth.service';

export const authReducer = createReducer(
  authInitialState,
  on(AuthActions.GooglePopupLoginAction, state => {
    console.log(state);
    return {
      ...state,
      login: {
        isUserLogged: false,
        isLoading: true,
        error: null,
      },
    };
  }),
  on(AuthActions.GooglePopupLoginSuccessAction, (state, userData: GoogleData) => {
      return {
        ...state,
        userData,
      };
    }
  ),
  on(AuthActions.GooglePopupLoginFailAction, state => {
    console.log('err');
    return {
      ...state,
    };
  }),
);
