import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constants';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  postData = {
    identifier: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  validateInputs() {
    let username = this.postData.identifier.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.identifier &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.jwt) {
            this.storageService
              .store(AuthConstants.AUTH, res)
              .then(res => {
                this.router.navigate(['home']);
              });
          } else {
            this.toastService.presentToast('Email e senha incorretos!');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Problemas de rede!');
        }
      );
    } else {
      this.toastService.presentToast(
        'Por favor, coloque o email e senha corretamente!'
      );
    }
  }
}
