import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio142 } from './exercicio14-2';

describe('Exercicio142', () => {
  let component: Exercicio142;
  let fixture: ComponentFixture<Exercicio142>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio142],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio142);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
