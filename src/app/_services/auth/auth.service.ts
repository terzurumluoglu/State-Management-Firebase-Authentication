import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import 'firebase/auth';
import { providers } from 'src/app/_model/signIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _fireAuth: AngularFireAuth
  ) { }

  SignIn(type: string) {
    let provider = providers.find(p => p.type.name === type);
    provider.type.provider.addScope(provider.type.scope);
    return this._fireAuth.signInWithPopup(provider.type.provider);
  }

  SignOut() {
    return this._fireAuth.signOut();
  }
}