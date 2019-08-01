(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tree/node/node.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tree/node/node.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line-to\"></div>\n<div id=\"tree-node-{{node.guid}}\"\n     [ngClass]=\"{'tree-element-container': !0, 'tree-element-has-children': node.hasChildren()}\"\n     [style.width.px]=\"node.width\"\n     [style.height.px]=\"node.height\"\n>\n    <div [ngClass]=\"{\n    'tree-element-main': !0,\n    'dragover': node.isDragover,\n    'expanded': node.isExpanded,\n    'dragging': node.isDragging,\n    'tree-new-node': node.isMaker\n    }\"\n         [attr.draggable]=\"node.isMaker ? null : 'true'\"\n         [style.width.px]=\"node.width\"\n         [style.height.px]=\"node.height\"\n         (drop)=\"node.drop($event)\"\n         (dragenter)=\"node.dragenter($event)\"\n         (dragstart)=\"node.dragstart($event)\"\n         (dragover)=\"node.dragover($event)\"\n         (dragend)=\"node.dragend($event)\"\n         (dragleave)=\"node.dragleave($event)\"\n    >\n        <div class=\"rect\"\n             [style.width.px]=\"node.width\"\n             [style.height.px]=\"node.height\"\n        >\n            <div class=\"buttons\">\n                <div class=\"delete\" (click)=\"node.destroy()\"></div>\n                <div class=\"toggler\"\n                     (click)=\"node.toggle()\"\n                ></div>\n                <div class=\"add\" (click)=\"node.addChild()\"></div>\n            </div>\n            <div class=\"tree-text tree-text-non-editable\">\n                <span>{{node.displayName}}</span>\n            </div>\n            <div class=\"tree-text tree-text-editable\">\n                <span #disaplyName contenteditable [innerHtml]=\"node.displayName\"\n                      (blur)=\"node.displayName=$event.srcElement.innerText\"></span>\n                <span class=\"children-count\"> ({{node.childrenCount()}})</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"tree-children\"\n         [style.transform]=\"childrenTransform\"\n         *ngIf=\"node.isExpanded\">\n        <div class=\"tree-elements-group\">\n            <div *ngFor=\"let child of node.children\"\n                 [treeDiagramNode]=\"child\"\n                 class=\"tree-node tree-child\"></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tree/tree.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tree/tree.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-pane\"\n     (mousedown)=\"onmousedown($event)\"\n     (mouseup)=\"onmouseup()\"\n     (mousemove)=\"onmousemove($event)\"\n     (mousewheel)=\"onmousewheel($event)\"\n>\n    <div\n            class=\"tree-paning-container\"\n            [style.transform]=\"paneTransform\"\n    >\n        <div *ngIf=\"nodes\"\n             class=\"tree-roots-elements\"\n\n        >\n\n            <div [treeDiagramNode]=\"node.guid\"\n                 class=\"tree-root tree-node\"\n                 (mousedown)=\"preventMouse($event)\"\n                 *ngFor=\"let node of nodes.roots\"\n            ></div>\n            <div [treeDiagramNode]=\"nodeMaker\"\n                 (click)=\"newNode()\"\n                 (mousedown)=\"preventMouse($event)\"\n                 class=\"tree-root tree-new-node tree-node\"\n            ></div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-data.json */ "./src/app/mock-data.json");
var _mock_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock-data.json */ "./src/app/mock-data.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Angular 2 decorators and services
 */


/**
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.treeConfig = {
            nodeWidth: 150,
            nodeHeight: 100
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tree = {
            json: _mock_data_json__WEBPACK_IMPORTED_MODULE_1__,
            config: this.treeConfig
        };
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n        <tree-diagram [data]=\"tree\"></tree-diagram>\n    ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree */ "./src/app/tree/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _tree__WEBPACK_IMPORTED_MODULE_3__["TreeDiagram"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock-data.json":
/*!********************************!*\
  !*** ./src/app/mock-data.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"guid\":\"bc4c7a02-5379-4046-92be-12c67af4295a\",\"displayName\":\"Elentrix\",\"children\":[\"85d412c2-ebc1-4d56-96c9-7da433ac9bb2\",\"28aac445-83b1-464d-9695-a4157dab6eac\"]},{\"guid\":\"097b8d7c-e0d3-483d-9770-cb5306f7801c\",\"displayName\":\"Insuron\",\"children\":[\"a2d8ec53-de45-4182-af74-58c27dc8c06c\",\"6ceb08e1-3da5-4532-a5d8-437fe714b685\"]},{\"guid\":\"a2d8ec53-de45-4182-af74-58c27dc8c06c\",\"displayName\":\"Plasmox\",\"parentId\":\"097b8d7c-e0d3-483d-9770-cb5306f7801c\",\"children\":[\"c46390bf-31be-4cb6-b91c-15cd55031d32\",\"96ce37a7-3e3d-40b2-96e9-e887ff75a89b\",\"cd4498c4-0ea0-488b-8f58-135bd29e10fc\"]},{\"guid\":\"6ceb08e1-3da5-4532-a5d8-437fe714b685\",\"displayName\":\"Earthwax\",\"parentId\":\"097b8d7c-e0d3-483d-9770-cb5306f7801c\",\"children\":[\"e36b619a-bfa0-4db8-aac2-e28f660324ad\",\"7ebeb305-d581-4500-85b6-e28a46610727\",\"d1a75547-d6eb-474c-ab71-b71f797b7010\"]},{\"guid\":\"c46390bf-31be-4cb6-b91c-15cd55031d32\",\"displayName\":\"Savvy\",\"parentId\":\"a2d8ec53-de45-4182-af74-58c27dc8c06c\",\"children\":[\"95bc2be9-2f20-411e-a13f-0f03d0ff1aa4\",\"b6938a3a-8405-4b55-bd8a-d7f088c0b5a3\"]},{\"guid\":\"96ce37a7-3e3d-40b2-96e9-e887ff75a89b\",\"displayName\":\"Zizzle\",\"parentId\":\"a2d8ec53-de45-4182-af74-58c27dc8c06c\",\"children\":[\"8b82a0b6-56bb-47fe-90e5-e1a107e90208\",\"0ec66087-442f-4663-84f6-f6f99cde0595\",\"7d3abeb6-f864-4b57-bc1a-ef1c4114a571\"]},{\"guid\":\"cd4498c4-0ea0-488b-8f58-135bd29e10fc\",\"displayName\":\"Cubicide\",\"parentId\":\"a2d8ec53-de45-4182-af74-58c27dc8c06c\",\"children\":[\"bbf7794c-b6ad-4f2c-9a3a-28c3287bf049\"]},{\"guid\":\"28aac445-83b1-464d-9695-a4157dab6eac\",\"displayName\":\"Cytrek\",\"parentId\":\"bc4c7a02-5379-4046-92be-12c67af4295a\",\"children\":[]},{\"guid\":\"e36b619a-bfa0-4db8-aac2-e28f660324ad\",\"displayName\":\"Inventure\",\"parentId\":\"6ceb08e1-3da5-4532-a5d8-437fe714b685\",\"children\":[\"67e4fd2b-bdaf-47aa-bb2e-ed89a7a87db2\"]},{\"guid\":\"7ebeb305-d581-4500-85b6-e28a46610727\",\"displayName\":\"Pyramia\",\"parentId\":\"6ceb08e1-3da5-4532-a5d8-437fe714b685\",\"children\":[\"e848a18c-b9ba-4cd1-a749-af89b2442666\"]},{\"guid\":\"d1a75547-d6eb-474c-ab71-b71f797b7010\",\"displayName\":\"Apexia\",\"parentId\":\"6ceb08e1-3da5-4532-a5d8-437fe714b685\",\"children\":[]},{\"guid\":\"95bc2be9-2f20-411e-a13f-0f03d0ff1aa4\",\"displayName\":\"Futurity\",\"parentId\":\"c46390bf-31be-4cb6-b91c-15cd55031d32\",\"children\":[]},{\"guid\":\"b6938a3a-8405-4b55-bd8a-d7f088c0b5a3\",\"displayName\":\"Cytrak\",\"parentId\":\"c46390bf-31be-4cb6-b91c-15cd55031d32\",\"children\":[]},{\"guid\":\"8b82a0b6-56bb-47fe-90e5-e1a107e90208\",\"displayName\":\"Zentury\",\"parentId\":\"96ce37a7-3e3d-40b2-96e9-e887ff75a89b\",\"children\":[]},{\"guid\":\"0ec66087-442f-4663-84f6-f6f99cde0595\",\"displayName\":\"Unia\",\"parentId\":\"96ce37a7-3e3d-40b2-96e9-e887ff75a89b\",\"children\":[]},{\"guid\":\"7d3abeb6-f864-4b57-bc1a-ef1c4114a571\",\"displayName\":\"Brainquil\",\"parentId\":\"96ce37a7-3e3d-40b2-96e9-e887ff75a89b\",\"children\":[]},{\"guid\":\"bbf7794c-b6ad-4f2c-9a3a-28c3287bf049\",\"displayName\":\"Valpreal\",\"parentId\":\"cd4498c4-0ea0-488b-8f58-135bd29e10fc\",\"children\":[]},{\"guid\":\"67e4fd2b-bdaf-47aa-bb2e-ed89a7a87db2\",\"displayName\":\"Tubesys\",\"parentId\":\"e36b619a-bfa0-4db8-aac2-e28f660324ad\",\"children\":[]},{\"guid\":\"e848a18c-b9ba-4cd1-a749-af89b2442666\",\"displayName\":\"Kage\",\"parentId\":\"7ebeb305-d581-4500-85b6-e28a46610727\",\"children\":[]},{\"guid\":\"85d412c2-ebc1-4d56-96c9-7da433ac9bb2\",\"displayName\":\"Asimiline\",\"parentId\":\"bc4c7a02-5379-4046-92be-12c67af4295a\",\"children\":[]}]");

/***/ }),

/***/ "./src/app/tree/classes/node-maker.class.ts":
/*!**************************************************!*\
  !*** ./src/app/tree/classes/node-maker.class.ts ***!
  \**************************************************/
/*! exports provided: TreeDiagramNodeMaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDiagramNodeMaker", function() { return TreeDiagramNodeMaker; });
/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.class */ "./src/app/tree/classes/node.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TreeDiagramNodeMaker = /** @class */ (function (_super) {
    __extends(TreeDiagramNodeMaker, _super);
    function TreeDiagramNodeMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMaker = true;
        return _this;
    }
    Object.defineProperty(TreeDiagramNodeMaker.prototype, "isMaker", {
        get: function () {
            return this._isMaker;
        },
        enumerable: true,
        configurable: true
    });
    TreeDiagramNodeMaker.prototype.drop = function (event) {
        event.preventDefault();
        var guid = this.getThisNodeList().draggingNodeGuid;
        this.getThisNodeList().rootNode(guid);
        this.displayName = 'New node';
        return false;
    };
    TreeDiagramNodeMaker.prototype.dragenter = function (event) {
        event.dataTransfer.dropEffect = 'move';
        var guid = this.getThisNodeList().draggingNodeGuid;
        var node = this.getThisNodeList().getNode(guid);
        if (node.parentId) {
            this.displayName = 'Root';
        }
    };
    TreeDiagramNodeMaker.prototype.dragover = function (event) {
        event.preventDefault();
        var guid = this.getThisNodeList().draggingNodeGuid;
        var node = this.getThisNodeList().getNode(guid);
        if (!this.isDragging && node.parentId) {
            this.isDragover = true;
            event.dataTransfer.dropEffect = 'move';
        }
        return false;
    };
    TreeDiagramNodeMaker.prototype.dragleave = function (event) {
        this.displayName = 'New node';
        this.isDragover = false;
    };
    return TreeDiagramNodeMaker;
}(_node_class__WEBPACK_IMPORTED_MODULE_0__["TreeDiagramNode"]));



/***/ }),

/***/ "./src/app/tree/classes/node.class.ts":
/*!********************************************!*\
  !*** ./src/app/tree/classes/node.class.ts ***!
  \********************************************/
/*! exports provided: TreeDiagramNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDiagramNode", function() { return TreeDiagramNode; });
var TreeDiagramNode = /** @class */ (function () {
    function TreeDiagramNode(props, config, getThisNodeList) {
        this.getThisNodeList = getThisNodeList;
        this._isMaker = false;
        if (!props.guid) {
            return;
        }
        for (var prop in props) {
            if (props.hasOwnProperty(prop)) {
                this[prop] = props[prop];
            }
        }
        this._toggle = false;
        if (config.nodeWidth) {
            this.width = config.nodeWidth;
        }
        if (config.nodeHeight) {
            this.height = config.nodeHeight;
        }
        this.children = new Set(props.children);
    }
    Object.defineProperty(TreeDiagramNode.prototype, "isMaker", {
        get: function () {
            return this._isMaker;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeDiagramNode.prototype, "isExpanded", {
        get: function () {
            return this._toggle;
        },
        enumerable: true,
        configurable: true
    });
    TreeDiagramNode.prototype.destroy = function () {
        this.getThisNodeList().destroy(this.guid);
    };
    TreeDiagramNode.prototype.hasChildren = function () {
        return !!this.children.size;
    };
    TreeDiagramNode.prototype.toggle = function (state) {
        if (state === void 0) { state = !this._toggle; }
        this._toggle = state;
        state && this.getThisNodeList().toggleSiblings(this.guid);
    };
    TreeDiagramNode.prototype.childrenCount = function () {
        return this.children.size;
    };
    TreeDiagramNode.prototype.isRoot = function () {
        return this.parentId == null;
    };
    TreeDiagramNode.prototype.dragenter = function (event) {
        event.dataTransfer.dropEffect = 'move';
    };
    TreeDiagramNode.prototype.dragleave = function (event) {
        this.isDragover = false;
    };
    TreeDiagramNode.prototype.dragstart = function (event) {
        event.dataTransfer.effectAllowed = 'move';
        this.isDragging = true;
        this.toggle(false);
        this.getThisNodeList().draggingNodeGuid = this.guid;
    };
    TreeDiagramNode.prototype.dragover = function (event) {
        event.preventDefault();
        if (!this.isDragging) {
            this.isDragover = true;
        }
        event.dataTransfer.dropEffect = 'move';
        return false;
    };
    TreeDiagramNode.prototype.dragend = function (event) {
        this.isDragover = false;
        this.isDragging = false;
    };
    TreeDiagramNode.prototype.drop = function (event) {
        event.preventDefault();
        var guid = this.getThisNodeList().draggingNodeGuid;
        this.getThisNodeList().transfer(guid, this.guid);
        return false;
    };
    TreeDiagramNode.prototype.addChild = function () {
        var newNodeGuid = this.getThisNodeList().newNode(this.guid);
        this.children.add(newNodeGuid);
        this.toggle(true);
    };
    TreeDiagramNode.ctorParameters = function () { return [
        null,
        null,
        { type: Function }
    ]; };
    return TreeDiagramNode;
}());



/***/ }),

/***/ "./src/app/tree/classes/nodesList.class.ts":
/*!*************************************************!*\
  !*** ./src/app/tree/classes/nodesList.class.ts ***!
  \*************************************************/
/*! exports provided: TreeDiagramNodesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDiagramNodesList", function() { return TreeDiagramNodesList; });
/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.class */ "./src/app/tree/classes/node.class.ts");
/* harmony import */ var _node_maker_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-maker.class */ "./src/app/tree/classes/node-maker.class.ts");


var TreeDiagramNodesList = /** @class */ (function () {
    function TreeDiagramNodesList(_nodes, config) {
        var _this = this;
        this.config = config;
        this._nodesList = new Map();
        this._nodeTemplate = {
            displayName: 'New node',
            children: [],
            guid: '',
            parentId: null
        };
        _nodes.forEach(function (_node) {
            _this._nodesList.set(_node.guid, new _node_class__WEBPACK_IMPORTED_MODULE_0__["TreeDiagramNode"](_node, config, _this.getThisNodeList.bind(_this)));
        });
        this._makeRoots();
        this.makerGuid = this.uuidv4();
        var node = {
            guid: this.makerGuid,
            parentId: 'root',
            children: [],
            displayName: 'New node'
        };
        var maker = new _node_maker_class__WEBPACK_IMPORTED_MODULE_1__["TreeDiagramNodeMaker"](node, this.config, this.getThisNodeList.bind(this));
        this._nodesList.set(this.makerGuid, maker);
    }
    TreeDiagramNodesList.prototype.values = function () {
        return this._nodesList.values();
    };
    TreeDiagramNodesList.prototype.getNode = function (guid) {
        return this._nodesList.get(guid);
    };
    TreeDiagramNodesList.prototype.rootNode = function (guid) {
        var node = this.getNode(guid);
        node.isDragging = false;
        node.isDragover = false;
        if (node.parentId) {
            var parent_1 = this.getNode(node.parentId);
            parent_1.children.delete(guid);
        }
        node.parentId = null;
        this._makeRoots();
        var maker = this.getNode(this.makerGuid);
        maker.isDragging = false;
        maker.isDragover = false;
    };
    TreeDiagramNodesList.prototype.transfer = function (origin, target) {
        var _origin = this.getNode(origin);
        var _target = this.getNode(target);
        _origin.isDragover = false;
        _origin.isDragging = false;
        _target.isDragover = false;
        if (_origin.parentId === target || origin === target) {
            return;
        }
        var remakeRoots = _origin.isRoot();
        if (_origin.parentId) {
            var _parent = this.getNode(_origin.parentId);
            _parent.children.delete(origin);
            if (!_parent.hasChildren()) {
                _parent.toggle(false);
            }
        }
        _target.children.add(origin);
        _origin.parentId = target;
        remakeRoots && this._makeRoots();
        this.serialize();
    };
    TreeDiagramNodesList.prototype.getThisNodeList = function () {
        return this;
    };
    TreeDiagramNodesList.prototype.toggleSiblings = function (guid) {
        var _this = this;
        var target = this.getNode(guid);
        if (target.parentId) {
            var parent_2 = this.getNode(target.parentId);
            parent_2.children.forEach(function (nodeGuid) {
                if (nodeGuid === guid) {
                    return;
                }
                _this.getNode(nodeGuid).toggle(false);
            });
        }
        else {
            for (var _i = 0, _a = this.roots; _i < _a.length; _i++) {
                var root = _a[_i];
                if (root.guid === guid) {
                    continue;
                }
                root.toggle(false);
            }
        }
    };
    TreeDiagramNodesList.prototype.serialize = function () {
        var out = [];
        this._nodesList.forEach(function (node) {
            var json = {
                guid: node.guid,
                displayName: node.displayName,
                parentId: node.parentId
            };
            json.children = Array.from(node.children);
            out.push(json);
        });
        return out;
    };
    TreeDiagramNodesList.prototype.destroy = function (guid) {
        var _this = this;
        var target = this.getNode(guid);
        if (target.parentId) {
            var parent_3 = this.getNode(target.parentId);
            parent_3.children.delete(guid);
        }
        if (target.hasChildren()) {
            target.children.forEach(function (child) {
                var theNode = _this.getNode(child);
                theNode.parentId = null;
            });
        }
        this._nodesList.delete(guid);
        this._makeRoots();
        console.warn(this.values());
    };
    TreeDiagramNodesList.prototype.newNode = function (parentId) {
        if (parentId === void 0) { parentId = null; }
        var _nodeTemplate = Object.assign({}, this._nodeTemplate);
        _nodeTemplate.guid = this.uuidv4();
        _nodeTemplate.parentId = parentId;
        this._nodesList.set(_nodeTemplate.guid, new _node_class__WEBPACK_IMPORTED_MODULE_0__["TreeDiagramNode"](_nodeTemplate, this.config, this.getThisNodeList.bind(this)));
        this._makeRoots();
        return _nodeTemplate.guid;
    };
    TreeDiagramNodesList.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    TreeDiagramNodesList.prototype._makeRoots = function () {
        this.roots = Array.from(this.values()).filter(function (node) { return node.isRoot(); });
    };
    TreeDiagramNodesList.ctorParameters = function () { return [
        { type: Array },
        null
    ]; };
    return TreeDiagramNodesList;
}());



/***/ }),

/***/ "./src/app/tree/index.js":
/*!*******************************!*\
  !*** ./src/app/tree/index.js ***!
  \*******************************/
/*! exports provided: TreeDiagram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.module */ "./src/app/tree/tree.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDiagram", function() { return _tree_module__WEBPACK_IMPORTED_MODULE_0__["TreeDiagram"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/tree/node/index.ts":
/*!************************************!*\
  !*** ./src/app/tree/node/index.ts ***!
  \************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.component */ "./src/app/tree/node/node.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node_component__WEBPACK_IMPORTED_MODULE_0__["Node"]; });




/***/ }),

/***/ "./src/app/tree/node/node.component.scss":
/*!***********************************************!*\
  !*** ./src/app/tree/node/node.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggler {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -10px;\n  background: #2c4c63;\n  margin: 0 auto;\n  display: none;\n  z-index: 10;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.children-count {\n  display: none;\n}\n\n.tree-element-has-children > .tree-element-main .toggler {\n  display: block;\n}\n\n.tree-element-has-children > .tree-element-main .children-count {\n  display: inline;\n}\n\n.tree-element-has-children > .tree-children {\n  display: inline-block;\n}\n\n.rect {\n  position: relative;\n  background-color: #fafafa !important;\n  border: 1px solid #dadada;\n  box-sizing: border-box;\n  -webkit-print-color-adjust: exact;\n  cursor: default !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  border-radius: 2px;\n}\n\n.tree-element-main {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.tree-element-main:hover .buttons {\n  display: block;\n}\n\n.tree-element-main.expanded .rect {\n  background-color: #bce5ff !important;\n}\n\n.tree-element-main.expanded .toggler {\n  transform: rotateZ(-45deg);\n  background: #427396;\n}\n\n.tree-element-main.dragover .rect {\n  box-shadow: 0 0 5px #427396;\n}\n\n.tree-element-main.dragging .buttons {\n  display: none !important;\n}\n\n.tree-element-main.dragging .tree-node:before {\n  display: none !important;\n}\n\n.tree-element-container {\n  z-index: 100;\n}\n\n.tree-children {\n  text-align: center;\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n  perspective: 3000px;\n  perspective-origin: center bottom;\n}\n\n.tree-children:before {\n  content: \"\";\n  width: calc(50% - 1px);\n  position: absolute;\n  height: 30px;\n  left: 0;\n  top: -45px;\n  border-right: 1px solid #dadada;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.line-to {\n  position: absolute;\n  top: -30px;\n  border-top: 1px solid #dadada;\n  width: calc(100% + 30px);\n  display: none;\n}\n\n.tree-node {\n  position: relative;\n  display: inline-block;\n  margin: 15px;\n  vertical-align: top;\n}\n\n.tree-node:before {\n  content: \"\";\n  width: calc(50% - 1px);\n  position: absolute;\n  height: 30px;\n  left: 0;\n  top: -30px;\n  border-right: 1px solid #dadada;\n}\n\n.tree-node:only-of-type > .line-to {\n  display: none !important;\n}\n\n.buttons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n}\n\n.buttons .delete {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color: #a34851;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n}\n\n.buttons .add {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color: #256947;\n  position: absolute;\n  right: -10px;\n  bottom: -10px;\n}\n\n.buttons .add:before {\n  content: \"\";\n  position: absolute;\n  height: 12px;\n  width: 4px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: #2ba423;\n}\n\n.buttons .add:after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 4px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: #2ba423;\n}\n\n.tree-text {\n  z-index: 10;\n  white-space: pre-line;\n}\n\n.tree-text span {\n  cursor: pointer;\n}\n\n.tree-elements-group {\n  position: relative;\n}\n\n.tree-elements-group > div > .line-to {\n  left: 0;\n  display: block;\n}\n\n.tree-elements-group > div:first-of-type > .line-to {\n  right: -30px;\n  width: calc(50% + 30px);\n  display: block;\n  left: auto;\n}\n\n.tree-elements-group > div:last-of-type > .line-to {\n  left: 0;\n  right: auto;\n  width: 50%;\n  display: block;\n}\n\n.tree-elements-group > .tree-child:last-child {\n  margin-right: 0;\n}\n\n.tree-elements-group > .tree-child:first-child {\n  margin-left: 0;\n}\n\n.tree-text-non-editable {\n  display: none;\n}\n\n.tree-new-node .rect {\n  opacity: 0.5;\n  border: 1px dashed #dadada;\n  cursor: pointer !important;\n}\n\n.tree-new-node:hover .rect, .tree-new-node.dragover .rect {\n  opacity: 1;\n}\n\n.tree-new-node .tree-children, .tree-new-node .buttons {\n  display: none !important;\n}\n\n.tree-new-node .tree-text-non-editable {\n  display: block;\n}\n\n.tree-new-node .tree-text-editable {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtlci9Qcm9qZWN0cy9ocC9hbmd1bGFyMi10cmVlLWRpYWdyYW0vc3JjL2FwcC90cmVlL25vZGUvbm9kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJlZS9ub2RlL25vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBZEEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNTRjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QURRSTtFQUNFLGNBQUE7QUNMTjs7QURVSTtFQUNFLGVBQUE7QUNSTjs7QURXRTtFQUNFLHFCQUFBO0FDVEo7O0FEY0E7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDWEY7O0FEYUk7RUFDRSxjQUFBO0FDWE47O0FEZUk7RUFDRSxvQ0FBQTtBQ2JOOztBRGVJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ2JOOztBRGlCSTtFQUNFLDJCQUFBO0FDZk47O0FEbUJJO0VBQ0Usd0JBQUE7QUNqQk47O0FEbUJJO0VBQ0Usd0JBQUE7QUNqQk47O0FEc0JBO0VBQ0UsWUFBQTtBQ25CRjs7QURzQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUNuQkY7O0FEb0JFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURzQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQ25CRjs7QURzQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbkJGOztBRG9CRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUNsQko7O0FEcUJJO0VBQ0Usd0JBQUE7QUNuQk47O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ3JCRjs7QURzQkU7RUFsSkEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFpSkUseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDakJKOztBRG1CRTtFQXpKQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQXdKRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNkSjs7QURlSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2JOOztBRGVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDYk47O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDZkY7O0FEZ0JFO0VBQ0UsZUFBQTtBQ2RKOztBRGtCQTtFQUNFLGtCQUFBO0FDZkY7O0FEaUJJO0VBQ0UsT0FBQTtFQUNBLGNBQUE7QUNmTjs7QURtQkk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2pCTjs7QURxQkk7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDbkJOOztBRHNCRTtFQUNFLGVBQUE7QUNwQko7O0FEc0JFO0VBQ0UsY0FBQTtBQ3BCSjs7QUR3QkE7RUFDRSxhQUFBO0FDckJGOztBRHlCRTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDdEJKOztBRHlCSTtFQUNFLFVBQUE7QUN2Qk47O0FEMEJFO0VBQ0Usd0JBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsY0FBQTtBQ3hCSjs7QUQwQkU7RUFDRSxhQUFBO0FDeEJKIiwiZmlsZSI6InNyYy9hcHAvdHJlZS9ub2RlL25vZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdHJlZS1idXR0b24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRvZ2dsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiAjMmM0YzYzO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMTA7XG4gIEBpbmNsdWRlIHRyZWUtYnV0dG9uO1xufVxuXG4uY2hpbGRyZW4tY291bnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZS1lbGVtZW50LWhhcy1jaGlsZHJlbiB7XG4gID4gLnRyZWUtZWxlbWVudC1tYWluIHtcbiAgICAudG9nZ2xlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnJlY3Qge1xuXG4gICAgfVxuICAgIC5jaGlsZHJlbi1jb3VudCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICB9XG4gID4gLnRyZWUtY2hpbGRyZW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG59XG5cbi5yZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRyZWUtZWxlbWVudC1tYWluIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgJjpob3ZlciB7XG4gICAgLmJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gICYuZXhwYW5kZWQge1xuICAgIC5yZWN0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiY2U1ZmYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvZ2dsZXIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDI3Mzk2O1xuICAgIH1cbiAgfVxuICAmLmRyYWdvdmVyIHtcbiAgICAucmVjdCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM0MjczOTY7XG4gICAgfVxuICB9XG4gICYuZHJhZ2dpbmcge1xuICAgIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRyZWUtbm9kZTpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4udHJlZS1lbGVtZW50LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnRyZWUtY2hpbGRyZW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwZXJzcGVjdGl2ZTogMzAwMHB4O1xuICBwZXJzcGVjdGl2ZS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDFweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTQ1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZGFkYTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4ubGluZS10byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWRhZGE7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRyZWUtbm9kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDFweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTMwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZGFkYTtcbiAgfVxuICAmOm9ubHktb2YtdHlwZSB7XG4gICAgPiAubGluZS10byB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC5kZWxldGUge1xuICAgIEBpbmNsdWRlIHRyZWUtYnV0dG9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzQ4NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICB0b3A6IC0xMHB4O1xuICB9XG4gIC5hZGQge1xuICAgIEBpbmNsdWRlIHRyZWUtYnV0dG9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTY5NDc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgd2lkdGg6IDRweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYmE0MjM7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYTQyMztcbiAgICB9XG4gIH1cbn1cblxuLnRyZWUtdGV4dCB7XG4gIHotaW5kZXg6IDEwO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4udHJlZS1lbGVtZW50cy1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJiA+IGRpdiB7XG4gICAgJiA+IC5saW5lLXRvIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAmID4gLmxpbmUtdG8ge1xuICAgICAgcmlnaHQ6IC0zMHB4O1xuICAgICAgd2lkdGg6IGNhbGMoNTAlICsgMzBweCk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgfVxuICB9XG4gICYgPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgICAmID4gLmxpbmUtdG8ge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICA+IC50cmVlLWNoaWxkOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICA+IC50cmVlLWNoaWxkOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4udHJlZS10ZXh0LW5vbi1lZGl0YWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50cmVlLW5ldy1ub2RlIHtcbiAgLnJlY3Qge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RhZGFkYTtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAmOmhvdmVyLCAmLmRyYWdvdmVyIHtcbiAgICAucmVjdCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAudHJlZS1jaGlsZHJlbiwgLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAudHJlZS10ZXh0LW5vbi1lZGl0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnRyZWUtdGV4dC1lZGl0YWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiLnRvZ2dsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiAjMmM0YzYzO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY2hpbGRyZW4tY291bnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZS1lbGVtZW50LWhhcy1jaGlsZHJlbiA+IC50cmVlLWVsZW1lbnQtbWFpbiAudG9nZ2xlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRyZWUtZWxlbWVudC1oYXMtY2hpbGRyZW4gPiAudHJlZS1lbGVtZW50LW1haW4gLmNoaWxkcmVuLWNvdW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnRyZWUtZWxlbWVudC1oYXMtY2hpbGRyZW4gPiAudHJlZS1jaGlsZHJlbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udHJlZS1lbGVtZW50LW1haW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRyZWUtZWxlbWVudC1tYWluOmhvdmVyIC5idXR0b25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udHJlZS1lbGVtZW50LW1haW4uZXhwYW5kZWQgLnJlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlNWZmICFpbXBvcnRhbnQ7XG59XG4udHJlZS1lbGVtZW50LW1haW4uZXhwYW5kZWQgLnRvZ2dsZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogIzQyNzM5Njtcbn1cbi50cmVlLWVsZW1lbnQtbWFpbi5kcmFnb3ZlciAucmVjdCB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzQyNzM5Njtcbn1cbi50cmVlLWVsZW1lbnQtbWFpbi5kcmFnZ2luZyAuYnV0dG9ucyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi50cmVlLWVsZW1lbnQtbWFpbi5kcmFnZ2luZyAudHJlZS1ub2RlOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRyZWUtZWxlbWVudC1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi50cmVlLWNoaWxkcmVuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGVyc3BlY3RpdmU6IDMwMDBweDtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xufVxuLnRyZWUtY2hpbGRyZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTQ1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYWRhZGE7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmxpbmUtdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGFkYWRhO1xuICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50cmVlLW5vZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnRyZWUtbm9kZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxcHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZGFkYTtcbn1cbi50cmVlLW5vZGU6b25seS1vZi10eXBlID4gLmxpbmUtdG8ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnV0dG9ucyAuZGVsZXRlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMzQ4NTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC0xMHB4O1xufVxuLmJ1dHRvbnMgLmFkZCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2OTQ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYm90dG9tOiAtMTBweDtcbn1cbi5idXR0b25zIC5hZGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiA0cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJhNDIzO1xufVxuLmJ1dHRvbnMgLmFkZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogNHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiYTQyMztcbn1cblxuLnRyZWUtdGV4dCB7XG4gIHotaW5kZXg6IDEwO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG4udHJlZS10ZXh0IHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmVlLWVsZW1lbnRzLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUtZWxlbWVudHMtZ3JvdXAgPiBkaXYgPiAubGluZS10byB7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRyZWUtZWxlbWVudHMtZ3JvdXAgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IC5saW5lLXRvIHtcbiAgcmlnaHQ6IC0zMHB4O1xuICB3aWR0aDogY2FsYyg1MCUgKyAzMHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IGF1dG87XG59XG4udHJlZS1lbGVtZW50cy1ncm91cCA+IGRpdjpsYXN0LW9mLXR5cGUgPiAubGluZS10byB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50cmVlLWVsZW1lbnRzLWdyb3VwID4gLnRyZWUtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi50cmVlLWVsZW1lbnRzLWdyb3VwID4gLnRyZWUtY2hpbGQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnRyZWUtdGV4dC1ub24tZWRpdGFibGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZS1uZXctbm9kZSAucmVjdCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkYWRhZGE7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuLnRyZWUtbmV3LW5vZGU6aG92ZXIgLnJlY3QsIC50cmVlLW5ldy1ub2RlLmRyYWdvdmVyIC5yZWN0IHtcbiAgb3BhY2l0eTogMTtcbn1cbi50cmVlLW5ldy1ub2RlIC50cmVlLWNoaWxkcmVuLCAudHJlZS1uZXctbm9kZSAuYnV0dG9ucyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi50cmVlLW5ldy1ub2RlIC50cmVlLXRleHQtbm9uLWVkaXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udHJlZS1uZXctbm9kZSAudHJlZS10ZXh0LWVkaXRhYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tree/node/node.component.ts":
/*!*********************************************!*\
  !*** ./src/app/tree/node/node.component.ts ***!
  \*********************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_nodesList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/nodesList.service */ "./src/app/tree/services/nodesList.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Node = /** @class */ (function () {
    function Node(nodesSrv, sanitizer) {
        this.nodesSrv = nodesSrv;
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(Node.prototype, "treeDiagramNode", {
        set: function (guid) {
            this.node = this.nodesSrv.getNode(guid);
            var calculation = "translate(calc(-50% + " + Math.round(this.node.width / 2) + "px), 45px)";
            if (document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl') {
                calculation = "translate(calc(50% - " + Math.round(this.node.width / 2) + "px), 45px)";
            }
            this.childrenTransform = this.sanitizer.bypassSecurityTrustStyle(calculation);
        },
        enumerable: true,
        configurable: true
    });
    Node.ctorParameters = function () { return [
        { type: _services_nodesList_service__WEBPACK_IMPORTED_MODULE_1__["NodesListService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Node.prototype, "treeDiagramNode", null);
    Node = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[treeDiagramNode]',
            template: __webpack_require__(/*! raw-loader!./node.component.html */ "./node_modules/raw-loader/index.js!./src/app/tree/node/node.component.html"),
            styles: [__webpack_require__(/*! ./node.component.scss */ "./src/app/tree/node/node.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_nodesList_service__WEBPACK_IMPORTED_MODULE_1__["NodesListService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], Node);
    return Node;
}());



/***/ }),

/***/ "./src/app/tree/services/nodesList.service.ts":
/*!****************************************************!*\
  !*** ./src/app/tree/services/nodesList.service.ts ***!
  \****************************************************/
/*! exports provided: NodesListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesListService", function() { return NodesListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_nodesList_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/nodesList.class */ "./src/app/tree/classes/nodesList.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NodesListService = /** @class */ (function () {
    function NodesListService() {
    }
    NodesListService.prototype.loadNodes = function (nodes, config) {
        this._nodesList = new _classes_nodesList_class__WEBPACK_IMPORTED_MODULE_1__["TreeDiagramNodesList"](nodes, config);
        return this._nodesList;
    };
    NodesListService.prototype.getNodes = function () {
        return this._nodesList.values();
    };
    NodesListService.prototype.getNode = function (guid) {
        return guid && this._nodesList.getNode(guid);
    };
    NodesListService.prototype.newNode = function () {
        this._nodesList.newNode();
    };
    NodesListService.prototype.makerNode = function () {
        return this._nodesList.makerGuid;
    };
    NodesListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NodesListService);
    return NodesListService;
}());



/***/ }),

/***/ "./src/app/tree/tree.component.scss":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-print-color-adjust: exact;\n  position: relative;\n  display: block;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  height: 100vh;\n  text-align: center;\n}\n\n.tree-roots-elements {\n  position: relative;\n  text-align: center;\n  display: inline-block;\n  white-space: nowrap;\n  cursor: default !important;\n  font-size: 0;\n  transform-origin: center;\n}\n\n.tree-node {\n  position: relative;\n  display: inline-block;\n  margin: 15px;\n  vertical-align: top;\n}\n\n.tree-node:only-of-type > .line-to {\n  display: none;\n}\n\n.tree-pane, .tree-paning-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtlci9Qcm9qZWN0cy9ocC9hbmd1bGFyMi10cmVlLWRpYWdyYW0vc3JjL2FwcC90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0k7RUFDRSxhQUFBO0FDQ047O0FESUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50cmVlLXJvb3RzLWVsZW1lbnRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udHJlZS1ub2RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgJjpvbmx5LW9mLXR5cGUge1xuICAgID4gLmxpbmUtdG8ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnRyZWUtcGFuZSwgLnRyZWUtcGFuaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufSIsIjpob3N0IHtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50cmVlLXJvb3RzLWVsZW1lbnRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udHJlZS1ub2RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi50cmVlLW5vZGU6b25seS1vZi10eXBlID4gLmxpbmUtdG8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZS1wYW5lLCAudHJlZS1wYW5pbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_nodesList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/nodesList.service */ "./src/app/tree/services/nodesList.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tree = /** @class */ (function () {
    function Tree(nodesSrv, sanitizer) {
        this.nodesSrv = nodesSrv;
        this.sanitizer = sanitizer;
        this._config = {
            nodeWidth: 200,
            nodeHeight: 100
        };
        this.paneDragging = false;
        this.zoom = 1;
        this.paneX = 0;
        this.paneY = 0;
    }
    Object.defineProperty(Tree.prototype, "data", {
        set: function (_data) {
            if (!_data || !Array.isArray(_data.json))
                return;
            if (typeof _data.config === 'object') {
                this._config = Object.assign(this._config, _data.config);
            }
            this.nodes = this.nodesSrv.loadNodes(_data.json, this._config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "nodeMaker", {
        get: function () {
            return this.nodesSrv.makerNode();
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.newNode = function () {
        this.nodesSrv.newNode();
    };
    Tree.prototype.onmousedown = function (event) {
        this.paneDragging = true;
    };
    Tree.prototype.onmousemove = function (event) {
        if (this.paneDragging) {
            var movementX = event.movementX, movementY = event.movementY;
            this.paneX += movementX;
            this.paneY += movementY;
            this.makeTransform();
        }
    };
    Tree.prototype.onmouseup = function () {
        this.paneDragging = false;
    };
    Tree.prototype.makeTransform = function () {
        this.paneTransform = this.sanitizer.bypassSecurityTrustStyle("translate(" + this.paneX + "px, " + this.paneY + "px) scale(" + this.zoom + ")");
    };
    Tree.prototype.preventMouse = function (event) {
        event.stopPropagation();
    };
    Tree.prototype.onmousewheel = function (event) {
        var delta;
        event.preventDefault();
        delta = event.detail || event.wheelDelta;
        this.zoom += delta / 1000 / 2;
        this.zoom = Math.min(Math.max(this.zoom, 0.2), 3);
        this.makeTransform();
    };
    Tree.ctorParameters = function () { return [
        { type: _services_nodesList_service__WEBPACK_IMPORTED_MODULE_1__["NodesListService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Tree.prototype, "data", null);
    Tree = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-diagram',
            template: __webpack_require__(/*! raw-loader!./tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_nodesList_service__WEBPACK_IMPORTED_MODULE_1__["NodesListService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], Tree);
    return Tree;
}());



/***/ }),

/***/ "./src/app/tree/tree.module.ts":
/*!*************************************!*\
  !*** ./src/app/tree/tree.module.ts ***!
  \*************************************/
/*! exports provided: TreeDiagram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDiagram", function() { return TreeDiagram; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node */ "./src/app/tree/node/index.ts");
/* harmony import */ var _services_nodesList_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/nodesList.service */ "./src/app/tree/services/nodesList.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TreeDiagram = /** @class */ (function () {
    function TreeDiagram() {
    }
    TreeDiagram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                /**
                 * Components / Directives/ Pipes
                 */
                _tree_component__WEBPACK_IMPORTED_MODULE_2__["Tree"],
                _node__WEBPACK_IMPORTED_MODULE_3__["Node"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            exports: [
                _tree_component__WEBPACK_IMPORTED_MODULE_2__["Tree"],
                _node__WEBPACK_IMPORTED_MODULE_3__["Node"]
            ],
            providers: [
                _services_nodesList_service__WEBPACK_IMPORTED_MODULE_4__["NodesListService"]
            ]
        })
    ], TreeDiagram);
    return TreeDiagram;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miker/Projects/hp/angular2-tree-diagram/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map