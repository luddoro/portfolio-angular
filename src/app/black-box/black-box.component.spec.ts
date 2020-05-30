import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBoxComponent } from './black-box.component';

describe('BlackBoxComponent', () => {
  let component: BlackBoxComponent;
  let fixture: ComponentFixture<BlackBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
