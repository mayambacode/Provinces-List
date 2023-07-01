import { Component, Inject, INJECTOR, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Province } from '../province';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  province: Province;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Province) { 
    this.province =data;
  }

  ngOnInit(): void {
  }

}
