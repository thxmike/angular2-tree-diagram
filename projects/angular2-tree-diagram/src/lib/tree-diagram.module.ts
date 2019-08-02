import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TreeDiagramComponent } from './tree-diagram.component';
import { NodeComponent } from './components/node.component';
import { TreeDiagramService } from './services/tree-diagram.service';

@NgModule({
    declarations: [
      /**
       * Components / Directives/ Pipes
       */
      TreeDiagramComponent,
      NodeComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
      TreeDiagramComponent,
      NodeComponent
    ],
    providers: [
      TreeDiagramService
    ]
})
export class TreeDiagramModule {

}
