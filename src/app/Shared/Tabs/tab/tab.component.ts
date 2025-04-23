import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fundvis-tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() title: string = '';
  @Input() isSelected: boolean = false;
  @Input() onSelect!: () => void;
  @Output() tabSelected = new EventEmitter<void>();

  /**
   * On nav tab click emit to parent component where used
   */
  onTabClick() {
    this.tabSelected.emit();
  }
}
