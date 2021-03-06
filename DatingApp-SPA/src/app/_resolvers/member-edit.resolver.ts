import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';


@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private alertify: AlertifyService, private userService: UserService, private router: Router,
                private authService: AuthService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('problem retrieving your data');
                console.log('dentro de memberEdit: ' + this.authService.decodedToken.nameid);
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }

}
