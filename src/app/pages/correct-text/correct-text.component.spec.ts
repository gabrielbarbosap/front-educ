import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectTextComponent } from './correct-text.component';

describe('CorrectTextComponent', () => {
  let component: CorrectTextComponent;
  let fixture: ComponentFixture<CorrectTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrectTextComponent]
    });
    fixture = TestBed.createComponent(CorrectTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
