import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsSoldComponent } from './materials-sold.component';

describe('MaterialsSoldComponent', () => {
  let component: MaterialsSoldComponent;
  let fixture: ComponentFixture<MaterialsSoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsSoldComponent]
    });
    fixture = TestBed.createComponent(MaterialsSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
