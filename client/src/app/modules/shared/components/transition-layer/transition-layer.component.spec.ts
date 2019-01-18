import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionLayerComponent } from './transition-layer.component';

describe('TransitionLayerComponent', () => {
  let component: TransitionLayerComponent;
  let fixture: ComponentFixture<TransitionLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
