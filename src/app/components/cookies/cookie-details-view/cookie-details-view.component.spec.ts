import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDetailsViewComponent } from './cookie-details-view.component';

describe('CookieDetailsViewComponent', () => {
  let component: CookieDetailsViewComponent;
  let fixture: ComponentFixture<CookieDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieDetailsViewComponent]
    });
    fixture = TestBed.createComponent(CookieDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
