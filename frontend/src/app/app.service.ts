import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from './User';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(user: User){
    return this.http.post<User>(`${this.url}add`, user)
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'users')
  }

  // Get User by Id - Read
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}user/${id}`)
  }

  // Update User - Update
  updateUser(id?: number ,user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, user)
  }

  // Delete User - Delete
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

  //
// Add Cliente - Create
  addcliente(cliente: Cliente){
    return this.http.post<Cliente>(`${this.url}add`, cliente)
  }

  // Get Cliente - Read
  getClientes(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'clientes')
  }

  // Get Cliente by Id - Read
  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}cliente/${id}`)
  }

  // Update Cliente - Update
  updateCliente(id?: number ,cliente?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, cliente)
  }

  // Delete Cliente - Delete
  deleteCliente(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }
  //

}