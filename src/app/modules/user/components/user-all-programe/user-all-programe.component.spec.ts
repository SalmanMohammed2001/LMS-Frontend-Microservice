import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllProgrameComponent } from './user-all-programe.component';

describe('UserAllProgrameComponent', () => {
  let component: UserAllProgrameComponent;
  let fixture: ComponentFixture<UserAllProgrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAllProgrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAllProgrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
