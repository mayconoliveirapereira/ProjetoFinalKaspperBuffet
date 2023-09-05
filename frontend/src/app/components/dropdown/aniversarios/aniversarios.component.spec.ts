import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversariosComponent } from './aniversarios.component';

describe('AniversariosComponent', () => {
  let component: AniversariosComponent;
  let fixture: ComponentFixture<AniversariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AniversariosComponent]
    });
    fixture = TestBed.createComponent(AniversariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
