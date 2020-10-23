import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoDashboardComponent } from './restrito-dashboard.component';

describe('RestritoDashboardComponent', () => {
  let component: RestritoDashboardComponent;
  let fixture: ComponentFixture<RestritoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestritoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestritoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
