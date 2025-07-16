import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DicaSelectPage } from './dica-select.page';

describe('DicaSelectPage', () => {
  let component: DicaSelectPage;
  let fixture: ComponentFixture<DicaSelectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DicaSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
