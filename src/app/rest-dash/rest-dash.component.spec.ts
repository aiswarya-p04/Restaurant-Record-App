import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDashComponent } from './rest-dash.component';

describe('RestDashComponent', () => {
  let component: RestDashComponent;
  let fixture: ComponentFixture<RestDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
