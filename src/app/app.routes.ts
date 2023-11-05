import { Routes } from '@angular/router';
import { UserService } from './core/services/user.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/users/users.component').then(
        (c) => c.UsersComponent
      ),
    providers: [UserService],
  },
];
