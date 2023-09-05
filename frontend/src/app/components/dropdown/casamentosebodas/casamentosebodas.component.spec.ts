import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasamentosebodasComponent } from './casamentosebodas.component';

describe('CasamentosebodasComponent', () => {
  let component: CasamentosebodasComponent;
  let fixture: ComponentFixture<CasamentosebodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasamentosebodasComponent]
    });
    fixture = TestBed.createComponent(CasamentosebodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
