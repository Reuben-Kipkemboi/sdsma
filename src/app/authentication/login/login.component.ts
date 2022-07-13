// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs/operators';
// import {HttpClient} from '@angular/common/http';

// import { AccountService, AlertService } from '../../_services';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   form!: FormGroup;
//   loading = false;
//   submitted = false;
//   returnUrl!: string;
//   token:any
//   role: any;
//   username: any;


//   constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private accountService: AccountService,
//     private alertService: AlertService,
//     private http: HttpClient,

//   ) {}

//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//     });

//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }
//    onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit
//     this.alertService.clear();

//     // stop here if form is invalid
//     if (this.form.invalid) {
//       return;
//     }

//     this.loading = true;
//     this.accountService.login(this.f['username'].value, 
//       this.f['password'].value).pipe(first()).subscribe(
//         (data) => {
//           this.router.navigate([this.returnUrl]);
//         },
//         (error) => {
//           this.alertService.error(error);
//           this.loading = false;
//         }
        
//       );
//     ;
 
//   }
//   get f() {
//       return this.form.controls;
//     }
//   login() {
//     this.http.post('http://127.0.0.1:8000/login/', this.form.getRawValue())
//     .subscribe((data) =>{
//        this.token = data;
//        //console.log(this.token.username);
//        localStorage.setItem('token', this.token.token)
//        localStorage.setItem('username', this.token.username)
//        localStorage.setItem('email', this.token.email)

//       this.getUser();
//     }); 
//   }
//   getUser() {
//     this.http.post('/all_users/', this.token)
//     .subscribe((data) =>{
//        this.role = data;
//        this.role = this.role.role;
//        //console.log(this.role);
//        if(this.role === 3){
//         this.router.navigate(['student-page/']);
//        }else if(this.role ===2){
//          this.router.navigate(['staff-page/']);
//        }else{
//          this.router.navigate(['admin/']);
//        }
//     }); 
//   }
// }

//   // convenience getter for easy access to form fields
//   // get f() {
//   //   return this.form.controls;
//   // }

//   // onSubmit() {
//   //   this.submitted = true;

//   //   // reset alerts on submit
//   //   this.alertService.clear();

//   //   // stop here if form is invalid
//   //   if (this.form.invalid) {
//   //     return;
//   //   }

//   //   this.loading = true;
//   //   this.accountService.login(this.f['username'].value, 
//   //     this.f['password'].value).pipe(first()).subscribe(
//   //       (data) => {
//   //         this.router.navigate([this.returnUrl]);
//   //       },
//   //       (error) => {
//   //         this.alertService.error(error);
//   //         this.loading = false;
//   //       }
        
//   //     );
//   //   ;
//   // }


import { UserService } from '../../services/user.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  data: any;
  token: any;
  role: any;
  username: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userservice : UserService
  ) {
    localStorage.clear();
  }


  ngOnInit(): void {
    this.form =new FormGroup({
      username:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
});
  }
  
  loginUser() {
    this.http.post('https://moti-vate.herokuapp.com/api/login/', this.form.getRawValue())
    .subscribe((data) =>{
       this.token = data;
       //console.log(this.token.username);
       localStorage.setItem('token', this.token.token)
       localStorage.setItem('username', this.token.username)
       localStorage.setItem('email', this.token.email)

      this.getUser();
    }); 
  }
  
  getUser() {
    this.http.post('https://moti-vate.herokuapp.com/api/user/', this.token)
    .subscribe((data) =>{
       this.role = data;
       this.role = this.role.role;
       //console.log(this.role);
       if(this.role === 3){
        this.router.navigate(['student-page/']);
       }else if(this.role ===2){
         this.router.navigate(['staff-page/']);
       }else{
         this.router.navigate(['admin/']);
       }
    }); 
  }
}