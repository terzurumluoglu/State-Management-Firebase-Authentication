import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from '../../../_model/user';
import { AuthService } from "../../../_services";

import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from './auth.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private _auth: AuthService
    ) { }

    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN),
        map((action: LogIn) => action),
        switchMap(action => {
            return this._auth.SignIn(action.payload).pipe(
                map((credential) => {
                    const u: User = new User(credential.user.displayName, credential.user.email);
                    return new LogInSuccess(u);
                }),
                catchError((error) => {
                    return of(new LogInFailure({ error: error }));
                })
            )
        })
    );

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS)
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );

    @Effect({ dispatch: false })
    LogOut: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap(() => {
            localStorage.removeItem('authState');
        })
    );
}