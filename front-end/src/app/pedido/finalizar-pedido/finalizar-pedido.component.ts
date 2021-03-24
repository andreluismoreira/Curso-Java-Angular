import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/pedido.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';
import { Pedido } from '../Pedido';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  mesa!: string;
  mesas!: string[];
  pedidos: Pedido[] = [];
  mesaSelecionada!: boolean;
  valorTotal!: number;
  pedidoSelecionado!: Pedido;

  constructor( private pedidoService: PedidoService ) {
    this.mesas = ["1", "2", "3"]
  }

  ngOnInit(): void {
    this.pedidoService
        .getPedido()
        .subscribe( response => this.pedidos = response)
  }

  pesquisarPedidos() {
    console.log(this.mesa)
    let mesaSelecionada = this.mesa
    let pedidoEncontrado: Pedido[] = []
    this.mesaSelecionada = true;
    this.pedidoService
        .getPedido()
        .subscribe( response => {
          this.pedidos.forEach(element => {
            if (mesaSelecionada == element.mesa) {
              pedidoEncontrado.push(element)
              this.pedidos = pedidoEncontrado
            }
            if (mesaSelecionada == "0") {
              this.pedidos = response
            }
          });
        })
  }

  fecharConta() {
    let valorTotalT: number = 0;
    let valorT: number;
    this.pedidos.forEach(element => {
      valorT = +element.value;
      valorTotalT += (element.quant) * (valorT)
      
      this.pedidoSelecionado = element
      this.pedidoSelecionado.status = "Finalizado"
      this.pedidoService
          .atualizar(this.pedidoSelecionado)
          .subscribe( (response: Pedido) => {
            this.pedidoSelecionado.status = response.status
            
          })
    });
    this.valorTotal = valorTotalT;
    SweetAlert.exibirSucesso('Finalizado', `Valor total do pedido R$ ${this.valorTotal}`)
  }
}
