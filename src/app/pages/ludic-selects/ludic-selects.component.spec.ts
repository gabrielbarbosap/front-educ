import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudicSelectsComponent } from './ludic-selects.component';

describe('LudicSelectsComponent', () => {
  let component: LudicSelectsComponent;
  let fixture: ComponentFixture<LudicSelectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LudicSelectsComponent]
    });
    fixture = TestBed.createComponent(LudicSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
