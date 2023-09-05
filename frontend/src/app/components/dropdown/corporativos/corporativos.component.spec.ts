import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporativosComponent } from './corporativos.component';

describe('CorporativosComponent', () => {
  let component: CorporativosComponent;
  let fixture: ComponentFixture<CorporativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporativosComponent]
    });
    fixture = TestBed.createComponent(CorporativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
