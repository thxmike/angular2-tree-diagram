import { TestBed } from '@angular/core/testing';

import { Angular2TreeDiagramService } from './angular2-tree-diagram.service';

describe('Angular2TreeDiagramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Angular2TreeDiagramService = TestBed.get(Angular2TreeDiagramService);
    expect(service).toBeTruthy();
  });
});
