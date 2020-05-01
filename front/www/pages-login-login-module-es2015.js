(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div class=\"mainscreen\">\n    <div class=\"logo\">\n      <img src=\"assets/images/logo_size_invert copy.PNG\" />\n      <h2>Bem-Vindo</h2>\n    </div>\n    <form>\n      <ion-list class=\"background-e51b23 form-login\">\n        <ion-item>\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input  autocomplete=\"off\" type=\"text\" name=\"identifier\" [(ngModel)]=\"postData.identifier\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Senha</ion-label>\n          <ion-input autocomplete=\"off\" type=\"password\" name=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"light\" (click)=\"loginAction()\">Entrar</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"medium\" (click)=\"loginAction()\">Registrar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </form>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainscreen {\n  background-color: #e51b23;\n  color: #fff;\n  height: 100%;\n  width: 100%;\n}\n\n.logo {\n  padding: 25% 10%;\n  text-align: center;\n}\n\n.logo img {\n  width: 100%;\n}\n\n.logo h2 {\n  margin-top: 0px;\n  font-size: 1em;\n}\n\n.form-login {\n  margin: 30% 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxjYWlvbWVsemVyXFxEZXZlbG9wbWVudFxcbWVnYWhhY2stdGltZTUxXFxmcm9udC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0dSOztBREFBO0VBQ0kscUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluc2NyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTUxYjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubG9nb3tcclxuICAgIHBhZGRpbmc6MjUlIDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufVxyXG4uZm9ybS1sb2dpbntcclxuICAgIG1hcmdpbjogMzAlIDEwcHggMTBweDtcclxufSIsIi5tYWluc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MWIyMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMjUlIDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9nbyBoMiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5mb3JtLWxvZ2luIHtcbiAgbWFyZ2luOiAzMCUgMTBweCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");







let LoginPage = class LoginPage {
    constructor(router, authService, storageService, toastService) {
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.postData = {
            identifier: '',
            password: ''
        };
    }
    ngOnInit() { }
    validateInputs() {
        console.log(this.postData);
        let username = this.postData.identifier.trim();
        let password = this.postData.password.trim();
        return (this.postData.identifier &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0);
    }
    loginAction() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe((res) => {
                if (res.userData) {
                    // Storing the User data.
                    this.storageService
                        .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData)
                        .then(res => {
                        this.router.navigate(['home']);
                    });
                }
                else {
                    this.toastService.presentToast('Incorrect username and password.');
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter email/username or password.');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map