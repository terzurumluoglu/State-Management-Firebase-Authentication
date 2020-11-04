import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, AuthState, LogIn, LogOut } from 'src/app/_module/state/auth';
import { AuthService } from 'src/app/_services';
import { LOGINTYPES } from "../../../_model/signIn";
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  loginTypes: any[] = LOGINTYPES;
  authState: AuthState;
  constructor(
    private _auth: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getState();
  }

  SignIn(type: string) {
    this.store.dispatch(new LogIn(type));
  }

  SignOut() {
    this.store.dispatch(new LogOut());
  }

  getState() {
    this._auth.authState$.subscribe((p: AuthState) => {
      this.authState = p;
    })
  }
}