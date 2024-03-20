import { TestBed } from '@angular/core/testing';
import { AppMenuComponent } from './app-menu.component';

describe('AppMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMenuComponent],
    }).compileComponents();
  });

  it('should create the AppMenuComponent', () => {
    const fixture = TestBed.createComponent(AppMenuComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
