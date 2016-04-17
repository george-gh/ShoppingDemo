System.register(['angular2/core', 'app/my-new-item.component', 'app/my-item-list.component', 'app/my-item-edit.component', 'app/my-category-selector.component'], function(exports_1, context_1) {
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
                    this.selectedItem = { name: '', quantity: '', image: '', category: '' };
                    this.itemList = new core_1.EventEmitter();
                }
                AppComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                AppComponent.prototype.addNewItem = function (item) {
                    if (item.name != '' && item.quantity != '')
                        this.itemArray.push({ name: item.name, quantity: item.quantity, image: item.image, category: item.category });
                };
                AppComponent.prototype.somethingSelected = function (item) {
                    if (item.name == '' && item.quantity == '') {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                AppComponent.prototype.onRemoveItem = function (item) {
                    this.itemArray.splice(this.itemArray.indexOf(item), 1);
                    this.selectedItem = { name: '', quantity: '', image: '', category: '' };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQSwyREFBMkQ7WUFrQjNEO2dCQUFBO29CQUNDLGNBQVMsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO29CQUNsQyxpQkFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNqRSxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7Z0JBdUJ6QyxDQUFDO2dCQXJCRyxtQ0FBWSxHQUFaLFVBQWEsSUFBYztvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsaUNBQVUsR0FBVixVQUFXLElBQWM7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDN0csQ0FBQztnQkFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsSUFBYztvQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQTtvQkFDWixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsbUNBQVksR0FBWixVQUFhLElBQWM7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQXpDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUscWhCQVVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBDQUFrQixFQUFFLDRDQUFtQixFQUFFLDRDQUFtQixFQUFFLDREQUEyQixDQUFDO3dCQUN2RyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO3FCQUNwQyxDQUFDOztnQ0FBQTtnQkEyQkYsbUJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELHVDQTBCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TXlOZXdJdGVtQ29tcG9uZW50fSBmcm9tICdhcHAvbXktbmV3LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7TXlJdGVtTGlzdENvbXBvbmVudH0gZnJvbSAnYXBwL215LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtNeUl0ZW1FZGl0Q29tcG9uZW50fSBmcm9tICdhcHAvbXktaXRlbS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQge015Q2F0ZWdvcnlTZWxlY3RvckNvbXBvbmVudH0gZnJvbSAnYXBwL215LWNhdGVnb3J5LXNlbGVjdG9yLmNvbXBvbmVudCdcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJ2FwcC9saXN0LWl0ZW0nO1xuLy8gaW1wb3J0IHtJdGVtc1NlcnZpY2V9IGZyb20gJ2FwcC9zZXJ2aWNlcy9pdGVtcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aGVhZGVyPlxuICAgIFx0XHQ8aDI+U2hvcHBpbmcgTGlzdDwvaDI+XG4gICAgXHQ8L2hlYWRlcj5cbiAgICBcdDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgXHRcdDxteS1jYXRlZ29yeS1zZWxlY3Rvcj48L215LWNhdGVnb3J5LXNlbGVjdG9yPlxuXHQgICAgICAgIDxteS1uZXctaXRlbSAobmV3SXRlbSk9XCJhZGROZXdJdGVtKCRldmVudClcIj48L215LW5ldy1pdGVtPlxuXHQgICAgICAgIDxteS1pdGVtLWxpc3QgKm5nSWY9XCJpdGVtQXJyYXkubGVuZ3RoID4gMFwiIFtsaXN0QXJyYXldPVwiaXRlbUFycmF5XCIgKGNob3Nlbkl0ZW0pPVwib25TZWxlY3RJdGVtKCRldmVudClcIj48L215LWl0ZW0tbGlzdD5cblx0ICAgICAgICA8bXktaXRlbS1lZGl0ICpuZ0lmPVwic29tZXRoaW5nU2VsZWN0ZWQoc2VsZWN0ZWRJdGVtKVwiIFttYW5hZ2VkSXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZEl0ZW0pPVwib25SZW1vdmVJdGVtKCRldmVudClcIj48L215LWl0ZW0tZWRpdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTXlOZXdJdGVtQ29tcG9uZW50LCBNeUl0ZW1MaXN0Q29tcG9uZW50LCBNeUl0ZW1FZGl0Q29tcG9uZW50LCBNeUNhdGVnb3J5U2VsZWN0b3JDb21wb25lbnRdLFxuICAgIGlucHV0czogWyduZXdJdGVtJywgJ2Nob3Nlbkl0ZW0nXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRpdGVtQXJyYXkgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG5cdHNlbGVjdGVkSXRlbSA9IHtuYW1lOiAnJywgcXVhbnRpdHk6ICcnLCBpbWFnZTogJycsIGNhdGVnb3J5OiAnJ307XG5cdGl0ZW1MaXN0ID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblxuICAgIG9uU2VsZWN0SXRlbShpdGVtOiBMaXN0SXRlbSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0fVxuXG5cdGFkZE5ld0l0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcblx0XHRpZiAoaXRlbS5uYW1lICE9ICcnICYmIGl0ZW0ucXVhbnRpdHkgIT0gJycpXG5cdFx0dGhpcy5pdGVtQXJyYXkucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSwgaW1hZ2U6IGl0ZW0uaW1hZ2UsIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5fSk7XG5cdH1cblxuXHRzb21ldGhpbmdTZWxlY3RlZChpdGVtOiBMaXN0SXRlbSk6Ym9vbGVhbiB7XG5cdFx0aWYgKGl0ZW0ubmFtZSA9PSAnJyAmJiBpdGVtLnF1YW50aXR5ID09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlOlxuXHRcdH1cblx0fVxuXG5cdG9uUmVtb3ZlSXRlbShpdGVtOiBMaXN0SXRlbSkge1xuXHRcdHRoaXMuaXRlbUFycmF5LnNwbGljZSh0aGlzLml0ZW1BcnJheS5pbmRleE9mKGl0ZW0pLCAxKTtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHtuYW1lOiAnJywgcXVhbnRpdHk6ICcnLCBpbWFnZTogJycsIGNhdGVnb3J5OiAnJ307XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
