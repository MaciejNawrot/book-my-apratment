import { createAction, props } from '@ngrx/store';
import { GoogleData } from '../../services/auth.service';

enum AuthActionsTypes {
  GOOGLE_POPUP_LOGIN = '[AUTH STORE] Google Popup Login',
  GOOGLE_POPUP_LOGIN_SUCCESS = '[AUTH STORE] Google Popup Login Success',
  GOOGLE_POPUP_LOGIN_FAIL = '[AUTH STORE] Google Popup Login Fail',
}

export const GooglePopupLoginAction = createAction(
  AuthActionsTypes.GOOGLE_POPUP_LOGIN,
);

export const GooglePopupLoginSuccessAction = createAction(
  AuthActionsTypes.GOOGLE_POPUP_LOGIN_SUCCESS,
  (response) => response.payload,
);

export const GooglePopupLoginFailAction = createAction(
  AuthActionsTypes.GOOGLE_POPUP_LOGIN_FAIL,
);
