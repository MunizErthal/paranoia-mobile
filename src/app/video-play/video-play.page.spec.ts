import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoPlayPage } from './video-play.page';

describe('VideoPlayPage', () => {
  let component: VideoPlayPage;
  let fixture: ComponentFixture<VideoPlayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
