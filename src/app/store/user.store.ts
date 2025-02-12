import { inject } from "@angular/core";
import { User } from "../model/user.model"
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { UserService } from "../service/user.service";

type UserState = {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users:[],
  loading: false
}

export const UsersStore = signalStore (
  {providedIn: 'root'},
  withState(initialState),
  withMethods(
    (store, usersService = inject(UserService)) => {
      return ({
        async loadAll() {
          patchState(store, { loading: true });
          const users = await usersService.getUsers();
          patchState(store, { users, loading: false });
        }
      });
    }
  )
);
