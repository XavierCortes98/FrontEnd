import { Component, Input, OnInit } from '@angular/core';
import { cardInfo } from '../../../../services/cardInfo/cardInfo.service';
import { cardInfoModel } from '../../../../models/cardInfo.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() id: number | string = 'bulbasaur';
  card: cardInfoModel;

  constructor(private cardService: cardInfo) {}

  ngOnInit() {
    this.getPokemonById();
  }

  getPokemonById() {
    this.cardService
      .getPokemonCardInfo(this.id)
      .subscribe((data: cardInfoModel) => {
        this.card = data;
      });
  }
}
