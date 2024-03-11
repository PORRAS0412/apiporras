import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  data: any[] = [];

  constructor(private usuariosService: UsuariosService) {}


  listarUsuarios() {
    this.usuariosService.getusuarios().subscribe(response => {
      this.data = response.body;
      console.log(this.data);
    });
  }

  eliminarUsuario(id: number): void {
    this.usuariosService.eliminarUsuario(id).subscribe(
      response => {
        console.log('Usuario eliminado exitosamente', response);
        this.listarUsuarios();
      },
      error => {
        console.error('Error al eliminar usuario', error);
      }
    );
  }


  ngOnInit(): void {
    //this.listarUsuarios();
  }

}




