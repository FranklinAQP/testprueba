import { Component, OnInit } from '@angular/core';
import { User } from '../@models/user.model';
import { UsersService } from '../@service/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  public usuarios: User[];

  constructor(
    private usersService: UsersService
  ) { 
    this.usuarios = []
  };

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(usuarios =>
      this.usuarios = usuarios
  
  }

}
