import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {countries} from "../countries";

@Component({
  selector: 'app-legend-map',
  templateUrl: './legend-map.component.html',
  styleUrls: ['./legend-map.component.css']
})
export class LegendMapComponent {
  @Input() list: any;
  data: Array<any> = countries;

  constructor() {
  }

  getCountryNameFromCode(code: string) {
    return this.data
      .find(item => item.code === code)['name'];
  }

  getCountriesContinentFromCode(list: any, code: string) {
    const arr = this.data
      .filter(item => item.continent === code).map(item => item.code);

    return list.filter((item: any) => arr.includes(item.code));
  }


  getAllCountriesPerContinent(continent: string) {
    return this.getCountriesContinentFromCode(this.list, continent).map((item: any) => ' ' +this.getCountryNameFromCode(item.code));
  }

}
