import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemComponent } from './enem.component';

describe('EnemComponent', () => {
  let component: EnemComponent;
  let fixture: ComponentFixture<EnemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnemComponent]
    });
    fixture = TestBed.createComponent(EnemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
