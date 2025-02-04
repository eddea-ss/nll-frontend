import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRegisterComponent } from './step-register.component';

describe('StepRegisterComponent', () => {
  let component: StepRegisterComponent;
  let fixture: ComponentFixture<StepRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
