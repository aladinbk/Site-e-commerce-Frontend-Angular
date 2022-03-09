import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagescategoriesComponent } from './managescategories.component';

describe('ManagescategoriesComponent', () => {
  let component: ManagescategoriesComponent;
  let fixture: ComponentFixture<ManagescategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagescategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagescategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
