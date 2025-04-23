import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableComponentComponent } from '../../Table/table-component/table-component.component';

@Component({
  selector: 'accordion-item',
  imports: [NgIf, TableComponentComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  @Input() title = '';
  @Input() count = 0;
  @Input() columns: string[] = [];
  @Input() data: { [key: string]: string }[] = [];

  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
