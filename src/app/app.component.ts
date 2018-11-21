import { UserDataLocalstorageService } from './services/user-data-localstorage.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eversis-recruitment';

  constructor(private userDataLocalstorageService: UserDataLocalstorageService){

  }

}
