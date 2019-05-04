import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { audit } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //decodedToken: any;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.decodedToken =  this.auth.jwtHelper.decodeToken(token);
    }
  }
}
