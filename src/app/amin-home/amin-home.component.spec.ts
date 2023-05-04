import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminHomeComponent } from './amin-home.component';

describe('AminHomeComponent', () => {
  let component: AminHomeComponent;
  let fixture: ComponentFixture<AminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
