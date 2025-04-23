import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fundvis-button',
  imports: [],
  templateUrl: './fundvis-button.component.html',
  styleUrl: './fundvis-button.component.css'
})
export class FundvisButtonComponent {
  @Input() buttonContent: string = '';
  @Output() onButtonClick = new EventEmitter<void>();

  handleClick() {
    this.onButtonClick.emit();
  }
}
