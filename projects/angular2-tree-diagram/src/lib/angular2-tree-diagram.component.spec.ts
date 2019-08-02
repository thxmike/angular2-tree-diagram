import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2TreeDiagramComponent } from './angular2-tree-diagram.component';

describe('Angular2TreeDiagramComponent', () => {
  let component: Angular2TreeDiagramComponent;
  let fixture: ComponentFixture<Angular2TreeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2TreeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2TreeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
