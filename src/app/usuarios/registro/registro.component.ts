import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/@service/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],  
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private usersService: UsersService
  ) {
    this.formulario = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      correo: new FormControl(),
      contraseña: new FormControl(),
      dni: new FormControl(),
      nickname: new FormControl(),
      fecha: new FormControl()
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usersService.addUsuario(this.formulario.value)
  }

}
