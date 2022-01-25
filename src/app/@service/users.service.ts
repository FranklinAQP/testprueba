import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usuarios: User[];
  private usuarios$: Subject<User[]>;

  constructor() {
    this.usuarios = [];
    this.usuarios$ = new Subject();
   }

   addUsuario(p: User){
     this.usuarios.push(p);
     this.usuarios$.next(this.usuarios);
   }

   getUsers(): Observable<User[]>{
    return this.usuarios$.asObservable();
   }
}
