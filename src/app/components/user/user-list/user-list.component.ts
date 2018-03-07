import { Component } from '@angular/core';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: Array<User> = [];

  onCreateUser(user: User){
    this.users.push(user);
    
  }
}
