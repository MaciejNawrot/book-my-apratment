// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
//
// import { AuthState } from '@interfaces';
// import { LoginAction, SetUserLogged } from './auth-actions';
// import {
//   selectIsLogging,
//   selectIsUserLogged,
//   selectLoginError,
// } from './auth-selectors';
//
// @Injectable()
// export class AuthFacade {
//   public isUserLogged$ = this.store.select(selectIsUserLogged);
//   public isLogging$ = this.store.select(selectIsLogging);
//   public loginError$ = this.store.select(selectLoginError);
//
//   constructor(private store: Store<AuthState>) {}
//
//   public login(email: string, password: string): void {
//     this.store.dispatch(LoginAction({ payload: { email, password }}));
//   }
//
//   public setUserLogged(): void {
//     this.store.dispatch(SetUserLogged());
//   }
// }
