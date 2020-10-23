import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineaComponent } from './alinea.component';

describe('AlineaComponent', () => {
  let component: AlineaComponent;
  let fixture: ComponentFixture<AlineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
