import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProgramComponent } from './admin-all-program.component';

describe('AdminAllProgramComponent', () => {
  let component: AdminAllProgramComponent;
  let fixture: ComponentFixture<AdminAllProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAllProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAllProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
