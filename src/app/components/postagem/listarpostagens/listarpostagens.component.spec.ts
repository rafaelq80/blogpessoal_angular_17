import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpostagensComponent } from './listarpostagens.component';

describe('ListarpostagensComponent', () => {
  let component: ListarpostagensComponent;
  let fixture: ComponentFixture<ListarpostagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarpostagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarpostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
