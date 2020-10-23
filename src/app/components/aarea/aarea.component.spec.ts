import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AareaComponent } from './aarea.component';

describe('AareaComponent', () => {
  let component: AareaComponent;
  let fixture: ComponentFixture<AareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
