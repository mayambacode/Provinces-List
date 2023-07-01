import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { Province } from 'src/app/province';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox.component';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css'],
})
export class ProvinceComponent implements OnInit {
  @Input() provList!: Province[];

  displayedColumns: string[] = ['name', 'capital', 'population', 'code'];
  dataSource = this.provList;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(province: Province): void {
    this.dialog.open(DialogboxComponent, {
      data: province,
    });
  }
}
