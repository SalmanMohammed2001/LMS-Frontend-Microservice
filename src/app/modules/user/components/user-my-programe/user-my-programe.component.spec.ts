import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyProgrameComponent } from './user-my-programe.component';

describe('UserMyProgrameComponent', () => {
  let component: UserMyProgrameComponent;
  let fixture: ComponentFixture<UserMyProgrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMyProgrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMyProgrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
