import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidProductComponent } from './invalid-product.component';

describe('InvalidProductComponent', () => {
  let component: InvalidProductComponent;
  let fixture: ComponentFixture<InvalidProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
