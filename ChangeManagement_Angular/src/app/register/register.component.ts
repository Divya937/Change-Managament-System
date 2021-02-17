import { Component, NgModule, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Register} from '../register';
import {Observable} from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = false;
  UserForm: any;
  massage: string | undefined;
  constructor(private formbulider: FormBuilder, private loginService: LoginService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
      this.UserForm = this.formbulider.group({
      UserName: ['', [Validators.required]],
      LoginName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    });
  }
   // tslint:disable-next-line:typedef
   onFormSubmit()
  {
    const user = this.UserForm.value;
    this.Createemployee(user);
  }
  // tslint:disable-next-line:typedef
  Createemployee(register: Register)
  {
  this.loginService.CreateUser(register).subscribe(
    () =>
    {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.UserForm.reset();
    });
  }
}
