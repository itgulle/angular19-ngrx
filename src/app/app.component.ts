import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersStore } from './store/user.store';
import { JsonPipe } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  store = inject(UsersStore);
  ngOnInit(): void {
    this.loadUsers()
      .then(()=> console.log("user loading."));
  }
  async loadUsers(){
    await this.store.loadAll();
  }
  title = 'user-list';
}
