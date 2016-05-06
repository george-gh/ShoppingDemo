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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0MsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO29CQUMxQyxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztnQkFNaEMsQ0FBQztnQkFKQSxzQ0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBekJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxtVUFZVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ3JCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdkIsVUFBVSxFQUFFLENBQUMsMENBQW9CLENBQUM7cUJBQ2xDLENBQUM7O3VDQUFBO2dCQVNGLDBCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCxxREFRQyxDQUFBIiwiZmlsZSI6Im15LWl0ZW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi9saXN0LWl0ZW0nO1xyXG5pbXBvcnQge015SGlnaGxpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LWl0ZW0tbGlzdCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8aDM+SXRlbSBsaXN0PC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9JyNpdGVtIG9mIGxpc3RBcnJheSdcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWVsZW1lbnRcIlxyXG5cdFx0XHRcdFx0XHRteUhpZ2hsaWdodCBcclxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cImVkaXRJdGVtKGl0ZW0pXCI+e3tpdGVtLm5hbWV9fSAoe3tpdGVtLnF1YW50aXR5fX0pPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRgLFxyXG5cdGlucHV0czogWydsaXN0QXJyYXknXSxcclxuXHRvdXRwdXRzOiBbJ2Nob3Nlbkl0ZW0nXSxcclxuXHRkaXJlY3RpdmVzOiBbTXlIaWdobGlnaHREaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUl0ZW1MaXN0Q29tcG9uZW50IHtcclxuXHRjaG9zZW5JdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcclxuXHRteUxpc3QgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XHJcblxyXG5cdGVkaXRJdGVtKGl0ZW06IExpc3RJdGVtKSB7XHJcblx0XHR0aGlzLmNob3Nlbkl0ZW0uZW1pdChpdGVtKTtcclxuXHR9XHJcblxyXG59Il19
