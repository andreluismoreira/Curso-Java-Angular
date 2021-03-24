import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PedidoFormComponent } from './novo-pedido/pedido-form.component'
import {ConsultarPedidoComponent} from './consultar-pedido/consultar-pedido.component'
import {EditarPedidoComponent } from './editar-pedido/editar-pedido.component'
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';

const routes: Routes = [
  {
    path: 'novopedido',
    component: PedidoFormComponent
  },
  {
    path: 'consultarpedido',
    component: ConsultarPedidoComponent
  },
  {
    path: 'editarpedido',
    component: EditarPedidoComponent
  },
  {
    path: 'novopedido/:id',
    component: PedidoFormComponent
  },
  {
    path: 'finalizarpedido',
    component: FinalizarPedidoComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
