import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHostComponent } from './message-host.component';

describe('MessageHostComponent', () => {
  let component: MessageHostComponent;
  let fixture: ComponentFixture<MessageHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
