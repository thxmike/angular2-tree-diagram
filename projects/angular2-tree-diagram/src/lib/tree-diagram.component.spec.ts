import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * Load the implementations that should be tested
 */
import { TreeDiagramComponent } from './tree-diagram.component';
import { TreeDiagramService } from './services/tree-diagram.service';

describe(`Tree`, () => {
    let comp: TreeDiagramComponent;
    let fixture: ComponentFixture<TreeDiagramComponent>;

    /**
     * async beforeEach
     */
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TreeDiagramComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [TreeDiagramService]
        })
            /**
             * Compile template and css
             */
            .compileComponents();
    }));

    /**
     * Synchronous beforeEach
     */
    beforeEach(() => {
        fixture = TestBed.createComponent(TreeDiagramComponent);
        comp = fixture.componentInstance;

        /**
         * Trigger initial data binding
         */
        fixture.detectChanges();
    });

    it(`should be readly initialized`, () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it(`should have properties`, () => {
        expect(comp.newNode).toBeDefined();
        expect(comp.onmousedown).toBeDefined();
        expect(comp.onmousemove).toBeDefined();
        expect(comp.onmouseup).toBeDefined();
        expect(comp.makeTransform).toBeDefined();
        expect(comp.preventMouse).toBeDefined();
        expect(comp.onmousewheel).toBeDefined();
    });

});
