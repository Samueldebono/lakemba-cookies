import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieItemComponent } from './cookie-item.component';

describe('CookieItemComponent', () => {
  let component: CookieItemComponent;
  let fixture: ComponentFixture<CookieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieItemComponent]
    });
    fixture = TestBed.createComponent(CookieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
