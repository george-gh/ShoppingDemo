System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MyItemEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyItemEditComponent = (function () {
                function MyItemEditComponent() {
                    this.removedItem = new core_1.EventEmitter();
                    this.removed = { name: '', quantity: '' };
                }
                MyItemEditComponent.prototype.deleteItem = function (item) {
                    this.removedItem.emit(item);
                };
                MyItemEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-item-edit',
                        template: "\n\t\t<section>\n\t\t\t<h3>Edit item</h3>\n\t\t\t<div class=\"container edit-item\">\n\t\t\t\t<label>Item Name: </label>\n\t\t\t\t<input class=\"item-name\" type=\"text\" [(ngModel)]=\"managedItem.name\" >\n\t\t\t\t<label>Quantity: </label>\n\t\t\t\t<input class=\"item-quantity\" type=\"text\" [(ngModel)]=\"managedItem.quantity\">\n\t\t\t\t<br>\n\t\t\t\t<button (click)=\"deleteItem(managedItem)\" class=\"danger\">Delete</button>\n\t\t\t\t<span class=\"clear\"></span>\n\t\t\t</div>\n\t\t</section>\n\t",
                        inputs: ['managedItem'],
                        outputs: ['removedItem']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyItemEditComponent);
                return MyItemEditComponent;
            }());
            exports_1("MyItemEditComponent", MyItemEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWl0ZW0tZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0MsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztvQkFDM0MsWUFBTyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBS3BDLENBQUM7Z0JBSEEsd0NBQVUsR0FBVixVQUFXLElBQWM7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQXpCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsMmZBYVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUN2QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQ3hCLENBQUM7O3VDQUFBO2dCQVFGLDBCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxREFPQyxDQUFBIiwiZmlsZSI6Im15LWl0ZW0tZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4vbGlzdC1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktaXRlbS1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c2VjdGlvbj5cblx0XHRcdDxoMz5FZGl0IGl0ZW08L2gzPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBlZGl0LWl0ZW1cIj5cblx0XHRcdFx0PGxhYmVsPkl0ZW0gTmFtZTogPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaXRlbS1uYW1lXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1hbmFnZWRJdGVtLm5hbWVcIiA+XG5cdFx0XHRcdDxsYWJlbD5RdWFudGl0eTogPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaXRlbS1xdWFudGl0eVwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJtYW5hZ2VkSXRlbS5xdWFudGl0eVwiPlxuXHRcdFx0XHQ8YnI+XG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZUl0ZW0obWFuYWdlZEl0ZW0pXCIgY2xhc3M9XCJkYW5nZXJcIj5EZWxldGU8L2J1dHRvbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjbGVhclwiPjwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0YCxcblx0aW5wdXRzOiBbJ21hbmFnZWRJdGVtJ10sXG5cdG91dHB1dHM6IFsncmVtb3ZlZEl0ZW0nXVxufSlcbmV4cG9ydCBjbGFzcyBNeUl0ZW1FZGl0Q29tcG9uZW50IHtcblx0cmVtb3ZlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXHRyZW1vdmVkID0ge25hbWU6ICcnLCBxdWFudGl0eTogJyd9O1xuXG5cdGRlbGV0ZUl0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcblx0XHR0aGlzLnJlbW92ZWRJdGVtLmVtaXQoaXRlbSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
