import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { PedidoModule } from './pedido/pedido.module';
import {PedidoService} from './pedido.service'
import {HttpClientModule} from'@angular/common/http';
import { CardapioComponent } from './cardapio/cardapio.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    PedidoModule
  ],
  providers: [
    PedidoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
