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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWl0ZW0tZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0MsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztvQkFDM0MsWUFBTyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBS3BDLENBQUM7Z0JBSEEsd0NBQVUsR0FBVixVQUFXLElBQWM7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQXpCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsMmZBYVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUN2QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQ3hCLENBQUM7O3VDQUFBO2dCQVFGLDBCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxREFPQyxDQUFBIiwiZmlsZSI6Im15LWl0ZW0tZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJ2FwcC9saXN0LWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1pdGVtLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uPlxuXHRcdFx0PGgzPkVkaXQgaXRlbTwvaDM+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGVkaXQtaXRlbVwiPlxuXHRcdFx0XHQ8bGFiZWw+SXRlbSBOYW1lOiA8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpdGVtLW5hbWVcIiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWFuYWdlZEl0ZW0ubmFtZVwiID5cblx0XHRcdFx0PGxhYmVsPlF1YW50aXR5OiA8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpdGVtLXF1YW50aXR5XCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1hbmFnZWRJdGVtLnF1YW50aXR5XCI+XG5cdFx0XHRcdDxicj5cblx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlSXRlbShtYW5hZ2VkSXRlbSlcIiBjbGFzcz1cImRhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNsZWFyXCI+PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHRgLFxuXHRpbnB1dHM6IFsnbWFuYWdlZEl0ZW0nXSxcblx0b3V0cHV0czogWydyZW1vdmVkSXRlbSddXG59KVxuZXhwb3J0IGNsYXNzIE15SXRlbUVkaXRDb21wb25lbnQge1xuXHRyZW1vdmVkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+KCk7XG5cdHJlbW92ZWQgPSB7bmFtZTogJycsIHF1YW50aXR5OiAnJ307XG5cblx0ZGVsZXRlSXRlbShpdGVtOiBMaXN0SXRlbSkge1xuXHRcdHRoaXMucmVtb3ZlZEl0ZW0uZW1pdChpdGVtKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
