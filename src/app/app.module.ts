import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
