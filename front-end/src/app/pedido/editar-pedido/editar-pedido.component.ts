import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PedidoService } from 'src/app/pedido.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';
import { Pedido } from '../Pedido';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  pedido!: Pedido[];
  pedidos!: Pedido;
  id!: any;
  pedidoSelecionado!: Pedido;

  constructor(private pedidoService: PedidoService,
    private router: Router,
    private activatedroute: ActivatedRoute) {
      this.pedidoSelecionado = new Pedido();
    }

  ngOnInit(): void {

    // let params: Observable<Params> = this.activatedroute.params 
    // params.subscribe( urlParams =>{
    //     this.id = urlParams['id'];
    //     this.pedidoService 
    //       .getById(this.id)
    //       .subscribe(
    //         response => this.pedidos = response,
    //         errorresponse => this.pedidos = new Pedido()
    //       )
    // })


    this.pedidoService
      .getPedido()
      .subscribe( resposta => this.pedido = resposta);
  }

  preparacaoDeDelecao(pedido: Pedido){
    this.pedidoSelecionado = pedido;
  }

  deletarPedido(){
    this.pedidoService
    .deletar(this.pedidoSelecionado)
    .subscribe(
      response => {
        SweetAlert.exibirSucesso("Sucesso",`Pedido deletado com sucesso`)
        this.ngOnInit();
      },
      erro => SweetAlert.exibirErro("Erro", `Erro ao deletar Pedido`)
    )
  }
}

