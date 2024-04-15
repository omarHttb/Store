import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsBoughtListComponent } from './materials-bought-list.component';

describe('MaterialsBoughtListComponent', () => {
  let component: MaterialsBoughtListComponent;
  let fixture: ComponentFixture<MaterialsBoughtListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsBoughtListComponent]
    });
    fixture = TestBed.createComponent(MaterialsBoughtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
