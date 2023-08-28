import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInteractiveComponent } from './chat-interactive.component';

describe('ChatInteractiveComponent', () => {
  let component: ChatInteractiveComponent;
  let fixture: ComponentFixture<ChatInteractiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatInteractiveComponent]
    });
    fixture = TestBed.createComponent(ChatInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
