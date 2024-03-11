import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'http://127.0.0.1:4000/apiporras/usuariosuniminuto';

  constructor(private http:HttpClient) { }

  public getusuarios(): Observable <any>{
    return this.http.get<any>(this.url);
  }

  public eliminarUsuario(id: number): Observable<any> {
    return this.http.request<any>('delete', this.url, { body: {"id": id} });
  }

}
