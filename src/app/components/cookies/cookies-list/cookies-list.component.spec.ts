import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesListComponent } from './cookies-list.component';

describe('CookiesListComponent', () => {
  let component: CookiesListComponent;
  let fixture: ComponentFixture<CookiesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesListComponent]
    });
    fixture = TestBed.createComponent(CookiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
