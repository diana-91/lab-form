import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  @Output() onCreate: EventEmitter<User> = new EventEmitter<User>();


  onSubmitUserForm(userForm: NgForm){
    //this.onCreate.emit(this.user);
    this.onCreate.emit(Object.assign({}, this.user));
    this.user = new User();
    userForm.reset();

  }

}
