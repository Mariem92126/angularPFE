import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogaminComponent } from './logamin.component';

describe('LogaminComponent', () => {
  let component: LogaminComponent;
  let fixture: ComponentFixture<LogaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogaminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
