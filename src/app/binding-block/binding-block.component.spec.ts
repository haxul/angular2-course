import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingBlockComponent } from './binding-block.component';

describe('BindingBlockComponent', () => {
  let component: BindingBlockComponent;
  let fixture: ComponentFixture<BindingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
