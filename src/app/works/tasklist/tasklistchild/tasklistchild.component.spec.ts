import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistchildComponent } from './tasklistchild.component';

describe('TasklistchildComponent', () => {
  let component: TasklistchildComponent;
  let fixture: ComponentFixture<TasklistchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
