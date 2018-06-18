import { WeatherService } from './../../weather.service';
import { ITile } from './../../models/Tile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() dayTileInfo: ITile;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onTileClick() {
    this.weatherService.updateDayInfoFor(this.dayTileInfo.dayNum);
  }

}
