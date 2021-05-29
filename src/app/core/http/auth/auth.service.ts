import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationEndpoint } from 'src/app/configuration/configuration-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post(ConfigurationEndpoint.getLoginEndpoint(), {});
  }
}
