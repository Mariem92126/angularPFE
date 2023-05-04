import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaminHomeComponent } from './adminamin-home.component';

describe('AdminaminHomeComponent', () => {
  let component: AdminaminHomeComponent;
  let fixture: ComponentFixture<AdminaminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
