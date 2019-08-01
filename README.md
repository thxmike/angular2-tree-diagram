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
  
``` javascript
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

- Use tree-diagram directive
- Pass array of nodes and config
- See example.json for more details

## Example

```
<tree-diagram [data]="data"></tree-diagram>
...
data = {
  json: [
    {
      "guid": "bc4c7a02-5379-4046-92be-12c67af4295a",
      "displayName": "Elentrix",
      "children": [
        "85d412c2-ebc1-4d56-96c9-7da433ac9bb2",
        "28aac445-83b1-464d-9695-a4157dab6eac"
      ]
    },
    ...
  ],
  config: {
    nodeWidth: 200,
    nodeHeight: 100
  }
}
```
