import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/country';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() cntry!: Country;


  constructor() { }

  ngOnInit(): void {
  }

}
