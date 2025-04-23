import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundvisButtonComponent } from './fundvis-button.component';

describe('FundvisButtonComponent', () => {
  let component: FundvisButtonComponent;
  let fixture: ComponentFixture<FundvisButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundvisButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundvisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
