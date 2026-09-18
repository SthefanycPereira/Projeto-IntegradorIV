import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio143 } from './exercicio14-3';

describe('Exercicio143', () => {
  let component: Exercicio143;
  let fixture: ComponentFixture<Exercicio143>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio143],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio143);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
