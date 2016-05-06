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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW5ldy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtvQkFDQyxZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7b0JBQ3ZDLGdCQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFPeEMsQ0FBQztnQkFMQSxvQ0FBTyxHQUFQLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7b0JBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkF6QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdlQWFUO3dCQUNELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDcEIsQ0FBQzs7c0NBQUE7Z0JBVUYseUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELG1EQVNDLENBQUEiLCJmaWxlIjoibXktbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4vbGlzdC1pdGVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktbmV3LWl0ZW0nLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGgzPkFkZCBhIG5ldyBpdGVtPC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBuZXctaXRlbVwiPlxyXG5cdFx0XHRcdDxsYWJlbD5JdGVtIE5hbWU6IDwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaXRlbS1uYW1lXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRJdGVtLm5hbWVcIiA+XHJcblx0XHRcdFx0PGxhYmVsPlF1YW50aXR5OiA8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIml0ZW0tcXVhbnRpdHlcIiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY3VycmVudEl0ZW0ucXVhbnRpdHlcIj5cclxuXHRcdFx0XHQ8YnI+XHJcblx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbShjdXJyZW50SXRlbSlcIj5BZGQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNsZWFyXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRgLFxyXG5cdG91dHB1dHM6IFsnbmV3SXRlbSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeU5ld0l0ZW1Db21wb25lbnQge1xyXG5cdG5ld0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xyXG5cdGN1cnJlbnRJdGVtID0ge25hbWU6ICcnLCBxdWFudGl0eTogJyd9O1xyXG5cclxuXHRhZGRJdGVtIChpdGVtOiBMaXN0SXRlbSkge1xyXG5cdFx0dGhpcy5uZXdJdGVtLmVtaXQoe25hbWU6IGl0ZW0ubmFtZSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHl9KTtcclxuXHRcdHRoaXMuY3VycmVudEl0ZW0gPSB7bmFtZTogJycsIHF1YW50aXR5OiAnJ307XHJcblx0fVxyXG5cdFxyXG59Il19
