import { SocialAuthService, SocialLoginModule, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [SocialLoginModule, GoogleSigninButtonModule, NgIf],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent implements OnInit {
  title = 'angular-google';
  user: any;
  loggedIn: any;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

}
