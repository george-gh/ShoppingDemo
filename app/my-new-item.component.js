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
    var MyNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyNewItemComponent = (function () {
                function MyNewItemComponent() {
                    this.newItem = new core_1.EventEmitter();
                    this.currentItem = { name: '', quantity: '' };
                }
                MyNewItemComponent.prototype.addItem = function (item) {
                    this.newItem.emit({ name: item.name, quantity: item.quantity });
                    this.currentItem = { name: '', quantity: '' };
                };
                MyNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'my-new-item',
                        template: "\n\t\t<section>\n\t\t\t<h3>Add a new item</h3>\n\t\t\t<div class=\"container new-item\">\n\t\t\t\t<label>Item Name: </label>\n\t\t\t\t<input class=\"item-name\" type=\"text\" [(ngModel)]=\"currentItem.name\" >\n\t\t\t\t<label>Quantity: </label>\n\t\t\t\t<input class=\"item-quantity\" type=\"text\" [(ngModel)]=\"currentItem.quantity\">\n\t\t\t\t<br>\n\t\t\t\t<button (click)=\"addItem(currentItem)\">Add</button>\n\t\t\t\t<span class=\"clear\"></span>\n\t\t\t</div>\n\t\t</section>\n\t",
                        outputs: ['newItem']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyNewItemComponent);
                return MyNewItemComponent;
            }());
            exports_1("MyNewItemComponent", MyNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW5ldy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtvQkFDQyxZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7b0JBQ3ZDLGdCQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFPeEMsQ0FBQztnQkFMQSxvQ0FBTyxHQUFQLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7b0JBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkF6QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdlQWFUO3dCQUNELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDcEIsQ0FBQzs7c0NBQUE7Z0JBVUYseUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELG1EQVNDLENBQUEiLCJmaWxlIjoibXktbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICdhcHAvbGlzdC1pdGVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktbmV3LWl0ZW0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uPlxuXHRcdFx0PGgzPkFkZCBhIG5ldyBpdGVtPC9oMz5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbmV3LWl0ZW1cIj5cblx0XHRcdFx0PGxhYmVsPkl0ZW0gTmFtZTogPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaXRlbS1uYW1lXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRJdGVtLm5hbWVcIiA+XG5cdFx0XHRcdDxsYWJlbD5RdWFudGl0eTogPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaXRlbS1xdWFudGl0eVwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50SXRlbS5xdWFudGl0eVwiPlxuXHRcdFx0XHQ8YnI+XG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cImFkZEl0ZW0oY3VycmVudEl0ZW0pXCI+QWRkPC9idXR0b24+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2xlYXJcIj48L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdGAsXG5cdG91dHB1dHM6IFsnbmV3SXRlbSddXG59KVxuZXhwb3J0IGNsYXNzIE15TmV3SXRlbUNvbXBvbmVudCB7XG5cdG5ld0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXHRjdXJyZW50SXRlbSA9IHtuYW1lOiAnJywgcXVhbnRpdHk6ICcnfTtcblxuXHRhZGRJdGVtIChpdGVtOiBMaXN0SXRlbSkge1xuXHRcdHRoaXMubmV3SXRlbS5lbWl0KHtuYW1lOiBpdGVtLm5hbWUsIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5fSk7XG5cdFx0dGhpcy5jdXJyZW50SXRlbSA9IHtuYW1lOiAnJywgcXVhbnRpdHk6ICcnfTtcblx0fVxuXHRcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
