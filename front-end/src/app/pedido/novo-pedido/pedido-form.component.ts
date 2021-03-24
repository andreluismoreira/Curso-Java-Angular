import { Component, OnInit } from '@angular/core';
import { Pedido } from '../Pedido'
import { PedidoService } from '../../pedido.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { SweetAlert } from 'src/app/shared/sweet-alert';


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  pedido!: Pedido;
  id!: number;
  success: boolean = false;
  errors!: string[];
  mesa!: string;
  mesas!: string[];

  constructor(private pedidoService: PedidoService,
    private activatedroute: ActivatedRoute) {
    
    this.pedido = new Pedido;
    this.mesas = ["1", "2", "3"]
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedroute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      this.pedidoService
        .getById(this.id)
        .subscribe(
          response => this.pedido = response,
          errorresponse => this.pedido = new Pedido()
        )
    })

  }

  onSubmit() {
    
    if (this.id) {
      this.pedidoService
        .atualizar(this.pedido)
        .subscribe(response => {
          SweetAlert.exibirSucesso("Sucesso", `Pedido atualizado com sucesso`)
        }, errorsResponse => {
          SweetAlert.exibirErro("Erro", `Erro ao atualizar Pedido `)

        })
    } else {
      this.pedidoService
        .salvar(this.pedido)
        .subscribe(response => {
          SweetAlert.exibirSucesso("Sucesso", `Pedido salvo com sucesso`)
          this.pedido = response;
        }, errorsResponse => {
          SweetAlert.exibirErro("Erro", `Erro ao criar Pedido `)
        })
    }
  }
}
