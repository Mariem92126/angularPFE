import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfacturesComponent } from './adminfactures.component';

describe('AdminfacturesComponent', () => {
  let component: AdminfacturesComponent;
  let fixture: ComponentFixture<AdminfacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfacturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
