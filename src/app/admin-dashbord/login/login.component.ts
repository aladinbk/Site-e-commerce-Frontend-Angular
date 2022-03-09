import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  errorMessage;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.userService.authenticate(this.user).subscribe(res => {
      if (res) {
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['/home-admin']);
      } else {
        this.errorMessage = 'Merci de vérifier votre email ou mot de passe';
      }
    });
  }

}
