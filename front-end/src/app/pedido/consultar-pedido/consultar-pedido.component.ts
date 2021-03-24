import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/pedido.service';
import { Pedido } from '../Pedido';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent implements OnInit {

  pedido!: Pedido[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService
      .getPedido()
      .subscribe( resposta => this.pedido = resposta);
  }

}
