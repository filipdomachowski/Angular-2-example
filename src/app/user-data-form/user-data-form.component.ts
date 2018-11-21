import { UserDataPattern } from './../user-data-pattern';
import { UserDataLocalstorageService } from './../services/user-data-localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent {

  rForm: FormGroup;
  userName: string = '';
  userSurname: string = '';
  userAge: number = null;
  userData: any = {};

  userNameAlert: string = "Name field can't be blank, only letters allowed!"
  userSurnameAlert: string = "Surname field can't be blank, only letters allowed!"
  userAgeAlert: string = "Age field can't be blank, only numbers allowed!"

  constructor(private fb: FormBuilder, private userDataLocalstorageService: UserDataLocalstorageService) {
    this.rForm = fb.group({
      'userName':     [null, Validators.compose([ Validators.pattern("^[a-zA-Z]+$")] )],
      'userSurname':  [null, Validators.compose([ Validators.pattern("^[a-zA-Z]+$")] )],
      'userAge':      [null, Validators.compose([ Validators.pattern("^[0-9]*$")] )]
    })

    this.userData = this.userDataLocalstorageService.getUserData()
    this.userName = this.userData !== null ? this.userData.name : ''
    this.userSurname = this.userData !== null ? this.userData.surname : ''
    this.userAge = this.userData !== null ? this.userData.age : null

  };

  private addUserData():void {
    this.userDataLocalstorageService.addUserData(this.userName, this.userSurname, this.userAge);
  };

};
