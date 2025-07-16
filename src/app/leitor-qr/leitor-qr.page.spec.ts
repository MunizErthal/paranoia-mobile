import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeitorQrPage } from './leitor-qr.page';

describe('LeitorQrPage', () => {
  let component: LeitorQrPage;
  let fixture: ComponentFixture<LeitorQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeitorQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
