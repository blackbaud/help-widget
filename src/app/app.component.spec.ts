import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SkyModule } from 'blackbaud-skyux2/dist/core';
import { SkyHelpModule } from '../modules/sky-help';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyModule, SkyHelpModule],
      declarations: [AppComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent)
      .toBe(true, 'should create AppComponent');
  });
});
