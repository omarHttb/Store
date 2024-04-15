import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsSoldListComponent } from './materials-sold-list.component';

describe('MaterialsSoldListComponent', () => {
  let component: MaterialsSoldListComponent;
  let fixture: ComponentFixture<MaterialsSoldListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsSoldListComponent]
    });
    fixture = TestBed.createComponent(MaterialsSoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
