import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneAppleComponent } from './iphone-apple.component';

describe('IphoneAppleComponent', () => {
  let component: IphoneAppleComponent;
  let fixture: ComponentFixture<IphoneAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IphoneAppleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IphoneAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
