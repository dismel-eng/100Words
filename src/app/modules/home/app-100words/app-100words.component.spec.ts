import { TestBed } from '@angular/core/testing';
import { App100wordsComponent } from './app-100words.component';

describe('App100wordsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App100wordsComponent],
    }).compileComponents();
  });

  it('should create the App100wordsComponent', () => {
    const fixture = TestBed.createComponent(App100wordsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
