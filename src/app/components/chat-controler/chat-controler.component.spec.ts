import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatControlerComponent } from './chat-controler.component';

describe('ChatControlerComponent', () => {
  let component: ChatControlerComponent;
  let fixture: ComponentFixture<ChatControlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatControlerComponent]
    });
    fixture = TestBed.createComponent(ChatControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
