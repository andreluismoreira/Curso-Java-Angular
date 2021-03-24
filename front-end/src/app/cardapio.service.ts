import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardapio } from './cardapio/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  getPedido(): Observable<Cardapio[]> { 
    return this.http.get<Cardapio[]>('http://localhost:8080/api/cardapio');
 }

 

}
