import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsAndDestiantionsComponent } from './deals-and-destiantions.component';

describe('DealsAndDestiantionsComponent', () => {
  let component: DealsAndDestiantionsComponent;
  let fixture: ComponentFixture<DealsAndDestiantionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealsAndDestiantionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealsAndDestiantionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
