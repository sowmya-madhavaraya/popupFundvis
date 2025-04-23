import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NavTabsComponent } from '../../Tabs/nav-tabs/nav-tabs.component';
import { AccordionComponent } from '../../Accordion/accordion/accordion.component';

@Component({
  selector: 'slide-in-panel',
  imports: [NavTabsComponent, NgClass],
  templateUrl: './slide-in-panel.component.html',
  styleUrl: './slide-in-panel.component.css'
})
export class SlideInPanelComponent {
  @Input() isOpen = false;
  @Input() headerText = '';
  @Output() closed = new EventEmitter<void>();

  closePanel() {
    this.isOpen = false;
    this.closed.emit();
  }
}
