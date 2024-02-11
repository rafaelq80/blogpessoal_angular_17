import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpostagemComponent } from './cardpostagem.component';

describe('CardpostagemComponent', () => {
  let component: CardpostagemComponent;
  let fixture: ComponentFixture<CardpostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpostagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardpostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
