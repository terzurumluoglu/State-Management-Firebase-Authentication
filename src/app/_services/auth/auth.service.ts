import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Store } from '@ngrx/store';
import * as firebase from "firebase/app";
import 'firebase/auth';
import { from, Observable } from 'rxjs';
import { providers } from 'src/app/_model/signIn';
import { AppState, AuthState } from 'src/app/_module/state/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<AuthState> = this.store.select(p => p.authState);

  constructor(
    private _fireAuth: AngularFireAuth,
    private store: Store<AppState>
  ) { }

  SignIn(type: string) {
    let provider = providers.find(p => p.type.name === type);
    provider.type.provider.addScope(provider.type.scope);
    return from(this._fireAuth.signInWithPopup(provider.type.provider));
  }

  SignOut() {
    return from(this._fireAuth.signOut());
  }
}