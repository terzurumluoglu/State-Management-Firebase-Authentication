import { Component, OnInit } from '@angular/core';
import { LOGINTYPES } from "../../../_model/login-type";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  loginTypes: any[] = LOGINTYPES;
  constructor() { }

  ngOnInit(): void {
  }

  SignIn(type: string) {
    console.log(type);
  }

}
