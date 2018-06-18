import { Component, OnInit, Input } from '@angular/core';
import { ItemperaturePressureWind } from '../../models/temperaturePressureWind';
@Component({
  selector: 'app-temperature-pressure-wind',
  templateUrl: './temperature-pressure-wind.component.html',
  styleUrls: ['./temperature-pressure-wind.component.css']
})
export class TemperaturePressureWindComponent implements OnInit {

  @Input() tpwInfo: ItemperaturePressureWind;
  constructor() { }

  ngOnInit() {
  }

}
