import { Component, OnInit } from '@angular/core';
import { AuthState } from 'src/app/_module/state/auth';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authState: AuthState;

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this._auth.authState$.subscribe((p: AuthState) => {
      this.authState = p;
    })
  }
}