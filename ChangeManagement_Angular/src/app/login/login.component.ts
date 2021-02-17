import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  model: any = {};

  errorMessage: string | undefined;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, private LoginService: LoginService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login(): void{
    // tslint:disable-next-line:no-debugger
    debugger;
    this.LoginService.Login(this.model).subscribe(
      data => {
        // tslint:disable-next-line:no-debugger
        debugger;
        if (data.Status === 'Success')
        {
          this.router.navigate(['/UpdateList']);
          // tslint:disable-next-line:no-debugger
          debugger;
        }
        else{
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  }
 }
