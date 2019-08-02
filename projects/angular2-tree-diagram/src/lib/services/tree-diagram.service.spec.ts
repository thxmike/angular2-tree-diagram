import { TestBed } from '@angular/core/testing';

import { TreeDiagramService } from './tree-diagram.service';

describe('TreeDiagramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeDiagramService = TestBed.get(TreeDiagramService);
    expect(service).toBeTruthy();
  });
});
