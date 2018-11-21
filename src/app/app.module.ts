import { UserDataLocalstorageService }      from './services/user-data-localstorage.service';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { StorageServiceModule }             from 'angular-webstorage-service'

import { AppComponent }           from './app.component';
import { NavbarComponent }        from './navbar/navbar.component';
import { UserDataFormComponent }  from './user-data-form/user-data-form.component';
import { UserPageComponent }      from './user-page/user-page.component';
import { HomePageComponent }      from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDataFormComponent,
    UserPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    RouterModule.forRoot([
      { path: '',             component: HomePageComponent },
      { path: 'userDataForm', component: UserDataFormComponent },
      { path: 'userPage',     component: UserPageComponent }
    ])
  ],
  providers: [UserDataLocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
