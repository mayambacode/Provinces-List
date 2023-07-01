import { Component, Input } from '@angular/core';
import { Country } from './country';
import { Province } from './province';
import  data from '../assets/data/country-province.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  nation : Country = data.country;

  prov:Province []= data.provinces;
  
}
