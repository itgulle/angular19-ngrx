import { Component, inject } from '@angular/core';
import { UsersStore } from '../store/user.store';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'user-list',
  imports: [MatListModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  store = inject(UsersStore);
}
