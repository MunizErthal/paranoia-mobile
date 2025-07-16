import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakarovCallPage } from './makarov-call.page';

describe('MakarovCallPage', () => {
  let component: MakarovCallPage;
  let fixture: ComponentFixture<MakarovCallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakarovCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
