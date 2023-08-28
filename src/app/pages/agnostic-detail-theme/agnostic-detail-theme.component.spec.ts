import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnosticDetailThemeComponent } from './agnostic-detail-theme.component';

describe('AgnosticDetailThemeComponent', () => {
  let component: AgnosticDetailThemeComponent;
  let fixture: ComponentFixture<AgnosticDetailThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgnosticDetailThemeComponent]
    });
    fixture = TestBed.createComponent(AgnosticDetailThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
