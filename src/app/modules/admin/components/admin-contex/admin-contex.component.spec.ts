import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContexComponent } from './admin-contex.component';

describe('AdminContexComponent', () => {
  let component: AdminContexComponent;
  let fixture: ComponentFixture<AdminContexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
