import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeguroComponent } from './listar-seguro.component';

describe('ListarSeguroComponent', () => {
  let component: ListarSeguroComponent;
  let fixture: ComponentFixture<ListarSeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSeguroComponent]
    });
    fixture = TestBed.createComponent(ListarSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
