import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsskincareComponent } from './produitsskincare.component';

describe('ProduitsskincareComponent', () => {
  let component: ProduitsskincareComponent;
  let fixture: ComponentFixture<ProduitsskincareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsskincareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsskincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
