import { Component, Input } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [AccordionItemComponent, NgFor],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items: {
    title: string;
    count: number;
    columns: string[];
    data: any[];
  }[] = [];
}
