import { HttpClient } from '@angular/common/http';
import { Injectable, inject, Signal } from '@angular/core';
import { User } from '../models/user';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private _http = inject(HttpClient);

  findAll(): Signal<User[]> {
    return toSignal(this._http.get<User[]>(this.url), { initialValue: [] });
  }
}
