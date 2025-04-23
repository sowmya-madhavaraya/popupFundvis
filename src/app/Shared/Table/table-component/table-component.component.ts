import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FundvisButtonComponent } from '../../Buttons/fundvis-button/fundvis-button.component';

@Component({
  selector: 'app-table-component',
  imports: [NgFor, NgIf, FundvisButtonComponent],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {
  @Input() columns: string[] = [];
  @Input() data: { [key: string]: string }[] = [];
}
