System.register(['angular2/core', 'app/directives/highlight.directive'], function(exports_1, context_1) {
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
                        template: "\n\t\t<section>\n\t\t\t<h3>Item list</h3>\n\t\t\t<div class=\"container\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor='#item of listArray' \n\t\t\t\t\t\tmyHighlight \n\t\t\t\t\t\t(click)=\"editItem(item)\">{{item.name}} ({{item.quantity}})</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0MsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO29CQUMxQyxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztnQkFNaEMsQ0FBQztnQkFKQSxzQ0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBeEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnU0FXVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ3JCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdkIsVUFBVSxFQUFFLENBQUMsMENBQW9CLENBQUM7cUJBQ2xDLENBQUM7O3VDQUFBO2dCQVNGLDBCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCxxREFRQyxDQUFBIiwiZmlsZSI6Im15LWl0ZW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJ2FwcC9saXN0LWl0ZW0nO1xuaW1wb3J0IHtNeUhpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnYXBwL2RpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWl0ZW0tbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24+XG5cdFx0XHQ8aDM+SXRlbSBsaXN0PC9oMz5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9JyNpdGVtIG9mIGxpc3RBcnJheScgXG5cdFx0XHRcdFx0XHRteUhpZ2hsaWdodCBcblx0XHRcdFx0XHRcdChjbGljayk9XCJlZGl0SXRlbShpdGVtKVwiPnt7aXRlbS5uYW1lfX0gKHt7aXRlbS5xdWFudGl0eX19KTwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdGAsXG5cdGlucHV0czogWydsaXN0QXJyYXknXSxcblx0b3V0cHV0czogWydjaG9zZW5JdGVtJ10sXG5cdGRpcmVjdGl2ZXM6IFtNeUhpZ2hsaWdodERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTXlJdGVtTGlzdENvbXBvbmVudCB7XG5cdGNob3Nlbkl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXHRteUxpc3QgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG5cblx0ZWRpdEl0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcblx0XHR0aGlzLmNob3Nlbkl0ZW0uZW1pdChpdGVtKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
