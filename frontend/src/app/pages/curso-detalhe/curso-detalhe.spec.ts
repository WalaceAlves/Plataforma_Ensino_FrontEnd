import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoDetalhe } from './curso-detalhe';

describe('CursoDetalhe', () => {
  let component: CursoDetalhe;
  let fixture: ComponentFixture<CursoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(CursoDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
