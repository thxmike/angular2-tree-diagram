# Angular tree diagram

## About

This is a fork of the Angular 2+ Hierarchical UI module.
https://github.com/artbelikov/angular2-tree-diagram

## Preview

<img src="http://i.imgur.com/CfQXRGm.png" width="500">

## Demo

On [gh-pages](https://artbelikov.github.io/angular2-tree-diagram/)

## Features

- Drag and drop
- Zoom and pan
- Configurable node width/height
- Add/remove nodes
- Tree-like UI
- Pure CSS relation lines
- No dependencies

## Installation

```command
npm i angular2-tree-diagram
```

## Usage

- Import module in your project. Typically this is done in app.module.ts or a sub module of this component. 
  - The module should look similar to the following:
  
``` typescript
import { TreeDiagramModule } from 'angular2-tree-diagram';
...
...
imports: [
  ...
  ...
  TreeDiagramModule,
  ...
]
```

- Use tree-diagram directive in a consuming component
- Passing in an array of nodes and config

Example:

``` typescript

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-tree',
  templateUrl: './question-tree.component.html',
  styleUrls: ['./question-tree.component.scss']
})
export class QuestionTreeComponent implements OnInit {

  public _data = {
    'json': [
    {
      'guid': 'bc4c7a02-5379-4046-92be-12c67af4295a',
      'displayName': 'Elentrix',
      'children': [
        '85d412c2-ebc1-4d56-96c9-7da433ac9bb2',
        '28aac445-83b1-464d-9695-a4157dab6eac'
      ]
    },
    {
      'guid': '097b8d7c-e0d3-483d-9770-cb5306f7801c',
      'displayName': 'Insuron',
      'children': [
        'a2d8ec53-de45-4182-af74-58c27dc8c06c',
        '6ceb08e1-3da5-4532-a5d8-437fe714b685'
      ]
    }
    ],
    'config': {
      'nodeWidth': 200,
      'nodeHeight': 100
    }
  };

  public get data() {
    return this._data;
  }

  constructor() {}

  ngOnInit() {}
}

```

```html
<tree-diagram [data]="data"></tree-diagram>
```

- See example.json for more details
