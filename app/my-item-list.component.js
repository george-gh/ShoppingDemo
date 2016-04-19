System.register(['angular2/core', './directives/highlight.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_directive_1;
    var MyItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            MyItemListComponent = (function () {
                function MyItemListComponent() {
                    this.chosenItem = new core_1.EventEmitter();
                    this.myList = new Array();
                }
                MyItemListComponent.prototype.editItem = function (item) {
                    this.chosenItem.emit(item);
                };
                MyItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-item-list',
                        template: "\n\t\t<section>\n\t\t\t<h3>Item list</h3>\n\t\t\t<div class=\"container\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor='#item of listArray'\n\t\t\t\t\t\tclass=\"list-element\"\n\t\t\t\t\t\tmyHighlight \n\t\t\t\t\t\t(click)=\"editItem(item)\">{{item.name}} ({{item.quantity}})</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t",
                        inputs: ['listArray'],
                        outputs: ['chosenItem'],
                        directives: [highlight_directive_1.MyHighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyItemListComponent);
                return MyItemListComponent;
            }());
            exports_1("MyItemListComponent", MyItemListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0MsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO29CQUMxQyxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztnQkFNaEMsQ0FBQztnQkFKQSxzQ0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBekJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxtVUFZVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ3JCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdkIsVUFBVSxFQUFFLENBQUMsMENBQW9CLENBQUM7cUJBQ2xDLENBQUM7O3VDQUFBO2dCQVNGLDBCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCxxREFRQyxDQUFBIiwiZmlsZSI6Im15LWl0ZW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4vbGlzdC1pdGVtJztcbmltcG9ydCB7TXlIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9oaWdobGlnaHQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktaXRlbS1saXN0Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c2VjdGlvbj5cblx0XHRcdDxoMz5JdGVtIGxpc3Q8L2gzPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpICpuZ0Zvcj0nI2l0ZW0gb2YgbGlzdEFycmF5J1xuXHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWVsZW1lbnRcIlxuXHRcdFx0XHRcdFx0bXlIaWdobGlnaHQgXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwiZWRpdEl0ZW0oaXRlbSlcIj57e2l0ZW0ubmFtZX19ICh7e2l0ZW0ucXVhbnRpdHl9fSk8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHRgLFxuXHRpbnB1dHM6IFsnbGlzdEFycmF5J10sXG5cdG91dHB1dHM6IFsnY2hvc2VuSXRlbSddLFxuXHRkaXJlY3RpdmVzOiBbTXlIaWdobGlnaHREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE15SXRlbUxpc3RDb21wb25lbnQge1xuXHRjaG9zZW5JdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblx0bXlMaXN0ID0gbmV3IEFycmF5PExpc3RJdGVtPigpO1xuXG5cdGVkaXRJdGVtKGl0ZW06IExpc3RJdGVtKSB7XG5cdFx0dGhpcy5jaG9zZW5JdGVtLmVtaXQoaXRlbSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
