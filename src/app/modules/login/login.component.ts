import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { Store } from '@ngrx/store';
import { fromLogin, fromLoginActions } from './store'
import { User } from 'src/app/models/user';
@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<fromLogin.State>
  ) { }

  ngOnInit(): void {
    // this.login('', '');
  }

  login(email: string, password: string) {
    this.store.dispatch(fromLoginActions.login())
  }

}
