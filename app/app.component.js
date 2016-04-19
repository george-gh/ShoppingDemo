System.register(['angular2/core', './my-new-item.component', './my-item-list.component', './my-item-edit.component', './my-category-selector.component'], function(exports_1, context_1) {
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
    var core_1, my_new_item_component_1, my_item_list_component_1, my_item_edit_component_1, my_category_selector_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_new_item_component_1_1) {
                my_new_item_component_1 = my_new_item_component_1_1;
            },
            function (my_item_list_component_1_1) {
                my_item_list_component_1 = my_item_list_component_1_1;
            },
            function (my_item_edit_component_1_1) {
                my_item_edit_component_1 = my_item_edit_component_1_1;
            },
            function (my_category_selector_component_1_1) {
                my_category_selector_component_1 = my_category_selector_component_1_1;
            }],
        execute: function() {
            // import {ItemsService} from 'app/services/items.service';
            AppComponent = (function () {
                function AppComponent() {
                    this.itemArray = new Array();
                    this.selectedItem = { name: '', quantity: 0, image: '', category: '' };
                    this.itemList = new core_1.EventEmitter();
                }
                AppComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                AppComponent.prototype.addNewItem = function (item) {
                    if (item.name != '' && item.quantity != 0)
                        this.itemArray.push({ name: item.name, quantity: item.quantity, image: item.image, category: item.category });
                };
                AppComponent.prototype.somethingSelected = function (item) {
                    if (item.name == '' && item.quantity == 0) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                AppComponent.prototype.onRemoveItem = function (item) {
                    this.itemArray.splice(this.itemArray.indexOf(item), 1);
                    this.selectedItem = { name: '', quantity: 0, image: '', category: '' };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header>\n    \t\t<h2>Shopping List</h2>\n    \t</header>\n    \t<div class=\"main\">\n    \t\t<my-category-selector></my-category-selector>\n\t        <my-new-item (newItem)=\"addNewItem($event)\"></my-new-item>\n\t        <my-item-list *ngIf=\"itemArray.length > 0\" [listArray]=\"itemArray\" (chosenItem)=\"onSelectItem($event)\"></my-item-list>\n\t        <my-item-edit *ngIf=\"somethingSelected(selectedItem)\" [managedItem]=\"selectedItem\" (removedItem)=\"onRemoveItem($event)\"></my-item-edit>\n        </div>\n    ",
                        directives: [my_new_item_component_1.MyNewItemComponent, my_item_list_component_1.MyItemListComponent, my_item_edit_component_1.MyItemEditComponent, my_category_selector_component_1.MyCategorySelectorComponent],
                        inputs: ['newItem', 'chosenItem']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQSwyREFBMkQ7WUFrQjNEO2dCQUFBO29CQUNDLGNBQVMsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO29CQUNsQyxpQkFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNoRSxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7Z0JBdUJ6QyxDQUFDO2dCQXJCRyxtQ0FBWSxHQUFaLFVBQWEsSUFBYztvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsaUNBQVUsR0FBVixVQUFXLElBQWM7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDN0csQ0FBQztnQkFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsSUFBYztvQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsbUNBQVksR0FBWixVQUFhLElBQWM7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQXpDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUscWhCQVVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBDQUFrQixFQUFFLDRDQUFtQixFQUFFLDRDQUFtQixFQUFFLDREQUEyQixDQUFDO3dCQUN2RyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO3FCQUNwQyxDQUFDOztnQ0FBQTtnQkEyQkYsbUJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELHVDQTBCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TXlOZXdJdGVtQ29tcG9uZW50fSBmcm9tICcuL215LW5ldy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge015SXRlbUxpc3RDb21wb25lbnR9IGZyb20gJy4vbXktaXRlbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge015SXRlbUVkaXRDb21wb25lbnR9IGZyb20gJy4vbXktaXRlbS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQge015Q2F0ZWdvcnlTZWxlY3RvckNvbXBvbmVudH0gZnJvbSAnLi9teS1jYXRlZ29yeS1zZWxlY3Rvci5jb21wb25lbnQnXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuL2xpc3QtaXRlbSc7XG4vLyBpbXBvcnQge0l0ZW1zU2VydmljZX0gZnJvbSAnYXBwL3NlcnZpY2VzL2l0ZW1zLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxoZWFkZXI+XG4gICAgXHRcdDxoMj5TaG9wcGluZyBMaXN0PC9oMj5cbiAgICBcdDwvaGVhZGVyPlxuICAgIFx0PGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICBcdFx0PG15LWNhdGVnb3J5LXNlbGVjdG9yPjwvbXktY2F0ZWdvcnktc2VsZWN0b3I+XG5cdCAgICAgICAgPG15LW5ldy1pdGVtIChuZXdJdGVtKT1cImFkZE5ld0l0ZW0oJGV2ZW50KVwiPjwvbXktbmV3LWl0ZW0+XG5cdCAgICAgICAgPG15LWl0ZW0tbGlzdCAqbmdJZj1cIml0ZW1BcnJheS5sZW5ndGggPiAwXCIgW2xpc3RBcnJheV09XCJpdGVtQXJyYXlcIiAoY2hvc2VuSXRlbSk9XCJvblNlbGVjdEl0ZW0oJGV2ZW50KVwiPjwvbXktaXRlbS1saXN0PlxuXHQgICAgICAgIDxteS1pdGVtLWVkaXQgKm5nSWY9XCJzb21ldGhpbmdTZWxlY3RlZChzZWxlY3RlZEl0ZW0pXCIgW21hbmFnZWRJdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkSXRlbSk9XCJvblJlbW92ZUl0ZW0oJGV2ZW50KVwiPjwvbXktaXRlbS1lZGl0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtNeU5ld0l0ZW1Db21wb25lbnQsIE15SXRlbUxpc3RDb21wb25lbnQsIE15SXRlbUVkaXRDb21wb25lbnQsIE15Q2F0ZWdvcnlTZWxlY3RvckNvbXBvbmVudF0sXG4gICAgaW5wdXRzOiBbJ25ld0l0ZW0nLCAnY2hvc2VuSXRlbSddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGl0ZW1BcnJheSA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcblx0c2VsZWN0ZWRJdGVtID0ge25hbWU6ICcnLCBxdWFudGl0eTogMCwgaW1hZ2U6ICcnLCBjYXRlZ29yeTogJyd9O1xuXHRpdGVtTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+KCk7XG5cbiAgICBvblNlbGVjdEl0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cdH1cblxuXHRhZGROZXdJdGVtKGl0ZW06IExpc3RJdGVtKSB7XG5cdFx0aWYgKGl0ZW0ubmFtZSAhPSAnJyAmJiBpdGVtLnF1YW50aXR5ICE9IDApXG5cdFx0dGhpcy5pdGVtQXJyYXkucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSwgaW1hZ2U6IGl0ZW0uaW1hZ2UsIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5fSk7XG5cdH1cblxuXHRzb21ldGhpbmdTZWxlY3RlZChpdGVtOiBMaXN0SXRlbSk6Ym9vbGVhbiB7XG5cdFx0aWYgKGl0ZW0ubmFtZSA9PSAnJyAmJiBpdGVtLnF1YW50aXR5ID09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0b25SZW1vdmVJdGVtKGl0ZW06IExpc3RJdGVtKSB7XG5cdFx0dGhpcy5pdGVtQXJyYXkuc3BsaWNlKHRoaXMuaXRlbUFycmF5LmluZGV4T2YoaXRlbSksIDEpO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0ge25hbWU6ICcnLCBxdWFudGl0eTogMCwgaW1hZ2U6ICcnLCBjYXRlZ29yeTogJyd9O1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
