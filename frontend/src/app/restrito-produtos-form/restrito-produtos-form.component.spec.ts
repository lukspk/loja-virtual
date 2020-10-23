import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoProdutosFormComponent } from './restrito-produtos-form.component';

describe('RestritoProdutosFormComponent', () => {
  let component: RestritoProdutosFormComponent;
  let fixture: ComponentFixture<RestritoProdutosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestritoProdutosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestritoProdutosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
