import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoFormComponent } from './novo-pedido/pedido-form.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';

import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import {FormsModule} from'@angular/forms';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component'

@NgModule({
  declarations: [
    PedidoFormComponent,
    EditarPedidoComponent,
    ConsultarPedidoComponent,
    FinalizarPedidoComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule
  ], exports: [
    PedidoFormComponent,
    EditarPedidoComponent,
    ConsultarPedidoComponent,
    FinalizarPedidoComponent
  ]
})
export class PedidoModule { }
