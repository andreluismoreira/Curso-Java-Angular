import { Injectable } from '@angular/core';
import { Pedido } from './pedido/Pedido';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  salvar(pedido: Pedido): Observable<Pedido> {
    pedido.status= 'Novo';
    return this.http.post<Pedido>('http://localhost:8080/api/pedido', pedido);
  }

  atualizar(pedido: Pedido): Observable<any> {
    return this.http.put<Pedido>(`http://localhost:8080/api/pedido/${pedido.id}`, pedido);
  }

  getPedido(): Observable<Pedido[]> { 
     return this.http.get<Pedido[]>('http://localhost:8080/api/pedido');
  }

  getById(id:any): Observable<Pedido>{
    return this.http.get<any>(`http://localhost:8080/api/pedido/${id}`);
  }
  
  deletar(pedido: Pedido): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/pedido/${pedido.id}`);
  }

}
