import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedalhasPage } from './medalhas.page';

describe('MedalhasPage', () => {
  let component: MedalhasPage;
  let fixture: ComponentFixture<MedalhasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedalhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
