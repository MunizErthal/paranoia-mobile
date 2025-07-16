import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusTemposPage } from './meus-tempos.page';

describe('MeusTemposPage', () => {
  let component: MeusTemposPage;
  let fixture: ComponentFixture<MeusTemposPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeusTemposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
