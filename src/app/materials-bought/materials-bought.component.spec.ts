import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsBoughtComponent } from './materials-bought.component';

describe('MaterialsBoughtComponent', () => {
  let component: MaterialsBoughtComponent;
  let fixture: ComponentFixture<MaterialsBoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsBoughtComponent]
    });
    fixture = TestBed.createComponent(MaterialsBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
