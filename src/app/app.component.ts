import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './Landing-Page/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundvis';
}