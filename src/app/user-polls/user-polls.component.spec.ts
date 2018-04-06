import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollsComponent } from './user-polls.component';

describe('UserPollsComponent', () => {
  let component: UserPollsComponent;
  let fixture: ComponentFixture<UserPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
