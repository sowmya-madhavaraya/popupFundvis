import { Component } from '@angular/core';
import { FundvisButtonComponent } from '../../Shared/Buttons/fundvis-button/fundvis-button.component';
import { SlideInPanelComponent } from '../../Shared/Slide-In-Panel/slide-in-panel/slide-in-panel.component';

@Component({
  selector: 'landing-page',
  imports: [FundvisButtonComponent, SlideInPanelComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isPanelOpen = false;
  headerTextVal = 'DORA: ICT Providers';

  closeModal() {
    this.isPanelOpen = false;
  }
  showPopupModal() {
    this.isPanelOpen = true;
  }
}
