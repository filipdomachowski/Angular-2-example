import { UserDataLocalstorageService } from './../services/user-data-localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  userName:string = '';
  userSurname:string = '';
  userAge:number = null;
  userData: any = {};

  ageLimit:number = 18;
  valid:any = null;
  showAlert:boolean = false;
  userAgeAlert:string = 'You have to be at least 18 years old!'

  constructor( private userDataLocalstorageService: UserDataLocalstorageService) {
    this.userData = this.userDataLocalstorageService.getUserData()
    this.userName = this.userData !== null ? this.userData.name : ''
    this.userSurname = this.userData !== null ? this.userData.surname : ''
    this.userAge = this.userData !== null ? this.userData.age : null
  }

  validateAge(){
    this.valid = this.userAge >= this.ageLimit ? true : false
    if(!this.valid){
      this.showAlert = true
    }
  }
}
