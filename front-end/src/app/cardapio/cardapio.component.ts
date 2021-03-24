import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service';
import { Cardapio } from './cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio: Cardapio[] = []

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService
        .getPedido()
        .subscribe( response => this.cardapio = response)
        
  }

}
