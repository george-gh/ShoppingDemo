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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW5ldy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtvQkFDQyxZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7b0JBQ3ZDLGdCQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFPeEMsQ0FBQztnQkFMQSxvQ0FBTyxHQUFQLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7b0JBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkF6QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdlQWFUO3dCQUNELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDcEIsQ0FBQzs7c0NBQUE7Z0JBVUYseUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELG1EQVNDLENBQUEiLCJmaWxlIjoibXktbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuL2xpc3QtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LW5ldy1pdGVtJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c2VjdGlvbj5cblx0XHRcdDxoMz5BZGQgYSBuZXcgaXRlbTwvaDM+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG5ldy1pdGVtXCI+XG5cdFx0XHRcdDxsYWJlbD5JdGVtIE5hbWU6IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIml0ZW0tbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50SXRlbS5uYW1lXCIgPlxuXHRcdFx0XHQ8bGFiZWw+UXVhbnRpdHk6IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIml0ZW0tcXVhbnRpdHlcIiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY3VycmVudEl0ZW0ucXVhbnRpdHlcIj5cblx0XHRcdFx0PGJyPlxuXHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJhZGRJdGVtKGN1cnJlbnRJdGVtKVwiPkFkZDwvYnV0dG9uPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNsZWFyXCI+PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHRgLFxuXHRvdXRwdXRzOiBbJ25ld0l0ZW0nXVxufSlcbmV4cG9ydCBjbGFzcyBNeU5ld0l0ZW1Db21wb25lbnQge1xuXHRuZXdJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblx0Y3VycmVudEl0ZW0gPSB7bmFtZTogJycsIHF1YW50aXR5OiAnJ307XG5cblx0YWRkSXRlbSAoaXRlbTogTGlzdEl0ZW0pIHtcblx0XHR0aGlzLm5ld0l0ZW0uZW1pdCh7bmFtZTogaXRlbS5uYW1lLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eX0pO1xuXHRcdHRoaXMuY3VycmVudEl0ZW0gPSB7bmFtZTogJycsIHF1YW50aXR5OiAnJ307XG5cdH1cblx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
