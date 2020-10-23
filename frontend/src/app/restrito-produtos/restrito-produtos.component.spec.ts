import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoProdutosComponent } from './restrito-produtos.component';

describe('RestritoProdutosComponent', () => {
  let component: RestritoProdutosComponent;
  let fixture: ComponentFixture<RestritoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestritoProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestritoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
