import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollComponent } from './add-poll.component';

describe('AddPollComponent', () => {
  let component: AddPollComponent;
  let fixture: ComponentFixture<AddPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
