import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogaminComponent } from './adminlogamin.component';

describe('AdminlogaminComponent', () => {
  let component: AdminlogaminComponent;
  let fixture: ComponentFixture<AdminlogaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlogaminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlogaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
