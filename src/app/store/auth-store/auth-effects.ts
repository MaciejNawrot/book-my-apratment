import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

// import { AuthService } from '@services/data-integration/auth.service';
import * as AuthActions from './auth-actions';
import { AuthService, GoogleData, GoogleProfile } from '../../services/auth.service';
import UserCredential = firebase.auth.UserCredential;
import { StorageService } from '../../core/services/storage.service';

@Injectable()
export class AuthEffects {
  constructor(
    private usersService: AuthService,
    private storageService: StorageService,
    private actions$: Actions,
    private router: Router,
  ) {}

  public googlePopupLoginEffect$ = createEffect(() => this.actions$
    .pipe(
      ofType(AuthActions.GooglePopupLoginAction),
      switchMap(action => {
        console.log('GooglePopupLoginAction EFFECT');
        return this.usersService.googlePopupSingin()
          .pipe(
            map(googleData => {
              console.log(googleData);
              const token = (googleData.credential as any).accessToken;

              this.storageService.set('token', token);
              this.router.navigate(['/dashboard']);

              const {
                email,
                family_name,
                given_name,
                granted_scopes,
                id,
                locale,
                name,
                verified_email,
              } = googleData.additionalUserInfo.profile as GoogleProfile;

              const requiredData: GoogleData = {
                profile: {
                  email,
                  family_name,
                  given_name,
                  granted_scopes,
                  id,
                  locale,
                  name,
                  verified_email,
                  displayName: googleData.user.displayName,
                  phoneNumber: googleData.user.phoneNumber,
                  photoURL: googleData.user.photoURL,
                },
                token,
              };

              return AuthActions.GooglePopupLoginSuccessAction({payload: requiredData});
            }),
            catchError(err => {
              return of(AuthActions.GooglePopupLoginFailAction());
            })
          );
      })
    )
  );

  // public loginEffect$ = createEffect(() => this.actions$.pipe(
  //   ofType(AuthActions.LoginAction),
  //   switchMap(action => {
  //     return this.usersService.login(action.payload.email, action.payload.password)
  //       .pipe(
  //         map(response =>  {
  //           this.storageService.set(AUTH_TOKEN_KEY, response.data.token);
  //           this.router.navigate(['/dashboard']);
  //
  //           // TODO handle inactive password
  //           return AuthActions.LoginSuccessAction();
  //         }),
  //         catchError((err: HttpErrorResponse) => {
  //           return of(AuthActions.LoginFailAction({ error: err.error }));
  //         }),
  //       );
  //   }),
  // ));
}
