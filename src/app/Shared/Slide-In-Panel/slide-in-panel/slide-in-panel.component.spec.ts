import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInPanelComponent } from './slide-in-panel.component';

describe('SlideInPanelComponent', () => {
  let component: SlideInPanelComponent;
  let fixture: ComponentFixture<SlideInPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideInPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideInPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
