import { UserDataPattern } from './../user-data-pattern';
import { Injectable } from '@angular/core';


@Injectable()
export class UserDataLocalstorageService {

  private userData: UserDataPattern;

  constructor() {
    let userData = this.getUserData()
  }

  public addUserData(name: string, surname: string, age: number): void {
    let userData = new UserDataPattern(name, surname, age)
    this.setLocalStorageUserData(userData)
  }

  public getUserData(): UserDataPattern {
    let localStorageItem = JSON.parse(localStorage.getItem('userData'))
    return localStorageItem !== null ? localStorageItem.userData : null
  }

  private setLocalStorageUserData(userData: UserDataPattern): void {
    localStorage.setItem('userData', JSON.stringify({ userData: userData}));
  }

}
