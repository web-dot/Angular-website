import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugreportComponent } from './bugreport.component';

describe('BugreportComponent', () => {
  let component: BugreportComponent;
  let fixture: ComponentFixture<BugreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
