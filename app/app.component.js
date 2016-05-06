System.register(['angular2/core', './my-new-item.component', './my-item-list.component', './my-item-edit.component', './my-category-selector.component', './my-category-products.component', './services/items.service'], function(exports_1, context_1) {
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
    var core_1, my_new_item_component_1, my_item_list_component_1, my_item_edit_component_1, my_category_selector_component_1, my_category_products_component_1, items_service_1;
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
            },
            function (my_category_products_component_1_1) {
                my_category_products_component_1 = my_category_products_component_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_itemService) {
                    this._itemService = _itemService;
                    this.itemArray = new Array();
                    this.selectedItem = { name: '', quantity: 0, image: '', category: null };
                    this.currentCategory = { id: null, name: '', label: '', image: '' };
                    this.currentProducts = [];
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
                AppComponent.prototype.selectCategory = function (category) {
                    this.currentCategory = category;
                };
                AppComponent.prototype.getProducts = function (currentCategory) {
                    this.currentProducts = this._itemService.getItemsByCategory(currentCategory.id);
                    return this.currentProducts;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header>\n    \t\t<h2>Shopping List</h2>\n    \t</header>\n    \t<div class=\"main\">\n    \t\t<my-category-selector (selectedCategory)=\"selectCategory($event)\"></my-category-selector>\n    \t\t<my-category-products [myProducts]=\"getProducts(currentCategory)\" [myCategory]=\"currentCategory\" *ngIf=\"currentCategory.id != null\"></my-category-products>\n\t        <my-new-item (newItem)=\"addNewItem($event)\"></my-new-item>\n\t        <my-item-list *ngIf=\"itemArray.length > 0\" [listArray]=\"itemArray\" (chosenItem)=\"onSelectItem($event)\"></my-item-list>\n\t        <my-item-edit *ngIf=\"somethingSelected(selectedItem)\" [managedItem]=\"selectedItem\" (removedItem)=\"onRemoveItem($event)\"></my-item-edit>\n        </div>\n    ",
                        directives: [my_new_item_component_1.MyNewItemComponent, my_item_list_component_1.MyItemListComponent, my_item_edit_component_1.MyItemEditComponent, my_category_selector_component_1.MyCategorySelectorComponent, my_category_products_component_1.MyCategoryProductsComponent],
                        inputs: ['newItem', 'chosenItem', 'selectedCategory'],
                        providers: [items_service_1.ItemsService],
                        outputs: ['myProducts', 'myCategory']
                    }), 
                    __metadata('design:paramtypes', [items_service_1.ItemsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBTUMsc0JBQW9CLFlBQTBCO29CQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFMOUMsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7b0JBQ2xDLGlCQUFZLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQ2xFLG9CQUFlLEdBQWlCLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUMzRSxvQkFBZSxHQUFlLEVBQUUsQ0FBQztnQkFJakMsQ0FBQztnQkFFRSxtQ0FBWSxHQUFaLFVBQWEsSUFBYztvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsaUNBQVUsR0FBVixVQUFXLElBQWM7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDN0csQ0FBQztnQkFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsSUFBYztvQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsbUNBQVksR0FBWixVQUFhLElBQWM7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQUVELHFDQUFjLEdBQWQsVUFBZSxRQUFzQjtvQkFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsa0NBQVcsR0FBWCxVQUFZLGVBQTZCO29CQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDN0IsQ0FBQztnQkExREY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDh1QkFXVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQ0FBa0IsRUFBRSw0Q0FBbUIsRUFBRSw0Q0FBbUIsRUFBRSw0REFBMkIsRUFBRSw0REFBMkIsQ0FBQzt3QkFDcEksTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsQ0FBQzt3QkFDckQsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQzt3QkFDekIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztxQkFDeEMsQ0FBQzs7Z0NBQUE7Z0JBMENGLG1CQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCx1Q0F5Q0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TXlOZXdJdGVtQ29tcG9uZW50fSBmcm9tICcuL215LW5ldy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TXlJdGVtTGlzdENvbXBvbmVudH0gZnJvbSAnLi9teS1pdGVtLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtNeUl0ZW1FZGl0Q29tcG9uZW50fSBmcm9tICcuL215LWl0ZW0tZWRpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge015Q2F0ZWdvcnlTZWxlY3RvckNvbXBvbmVudH0gZnJvbSAnLi9teS1jYXRlZ29yeS1zZWxlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge015Q2F0ZWdvcnlQcm9kdWN0c0NvbXBvbmVudH0gZnJvbSAnLi9teS1jYXRlZ29yeS1wcm9kdWN0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuL2xpc3QtaXRlbSc7XHJcbmltcG9ydCB7Q2F0ZWdvcnlJdGVtfSBmcm9tICcuL2NhdGVnb3J5LWl0ZW0nO1xyXG5pbXBvcnQge0l0ZW1zU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9pdGVtcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIFx0PGhlYWRlcj5cclxuICAgIFx0XHQ8aDI+U2hvcHBpbmcgTGlzdDwvaDI+XHJcbiAgICBcdDwvaGVhZGVyPlxyXG4gICAgXHQ8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgXHRcdDxteS1jYXRlZ29yeS1zZWxlY3RvciAoc2VsZWN0ZWRDYXRlZ29yeSk9XCJzZWxlY3RDYXRlZ29yeSgkZXZlbnQpXCI+PC9teS1jYXRlZ29yeS1zZWxlY3Rvcj5cclxuICAgIFx0XHQ8bXktY2F0ZWdvcnktcHJvZHVjdHMgW215UHJvZHVjdHNdPVwiZ2V0UHJvZHVjdHMoY3VycmVudENhdGVnb3J5KVwiIFtteUNhdGVnb3J5XT1cImN1cnJlbnRDYXRlZ29yeVwiICpuZ0lmPVwiY3VycmVudENhdGVnb3J5LmlkICE9IG51bGxcIj48L215LWNhdGVnb3J5LXByb2R1Y3RzPlxyXG5cdCAgICAgICAgPG15LW5ldy1pdGVtIChuZXdJdGVtKT1cImFkZE5ld0l0ZW0oJGV2ZW50KVwiPjwvbXktbmV3LWl0ZW0+XHJcblx0ICAgICAgICA8bXktaXRlbS1saXN0ICpuZ0lmPVwiaXRlbUFycmF5Lmxlbmd0aCA+IDBcIiBbbGlzdEFycmF5XT1cIml0ZW1BcnJheVwiIChjaG9zZW5JdGVtKT1cIm9uU2VsZWN0SXRlbSgkZXZlbnQpXCI+PC9teS1pdGVtLWxpc3Q+XHJcblx0ICAgICAgICA8bXktaXRlbS1lZGl0ICpuZ0lmPVwic29tZXRoaW5nU2VsZWN0ZWQoc2VsZWN0ZWRJdGVtKVwiIFttYW5hZ2VkSXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZEl0ZW0pPVwib25SZW1vdmVJdGVtKCRldmVudClcIj48L215LWl0ZW0tZWRpdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTXlOZXdJdGVtQ29tcG9uZW50LCBNeUl0ZW1MaXN0Q29tcG9uZW50LCBNeUl0ZW1FZGl0Q29tcG9uZW50LCBNeUNhdGVnb3J5U2VsZWN0b3JDb21wb25lbnQsIE15Q2F0ZWdvcnlQcm9kdWN0c0NvbXBvbmVudF0sXHJcbiAgICBpbnB1dHM6IFsnbmV3SXRlbScsICdjaG9zZW5JdGVtJywgJ3NlbGVjdGVkQ2F0ZWdvcnknXSxcclxuICAgIHByb3ZpZGVyczogW0l0ZW1zU2VydmljZV0sXHJcbiAgICBvdXRwdXRzOiBbJ215UHJvZHVjdHMnLCAnbXlDYXRlZ29yeSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cdGl0ZW1BcnJheSA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcclxuXHRzZWxlY3RlZEl0ZW0gPSB7bmFtZTogJycsIHF1YW50aXR5OiAwLCBpbWFnZTogJycsIGNhdGVnb3J5OiBudWxsfTtcclxuXHRjdXJyZW50Q2F0ZWdvcnk6IENhdGVnb3J5SXRlbSA9IHtpZDogbnVsbCwgbmFtZTogJycsIGxhYmVsOiAnJywgaW1hZ2U6ICcnfTtcclxuXHRjdXJyZW50UHJvZHVjdHM6IExpc3RJdGVtW10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbVNlcnZpY2U6IEl0ZW1zU2VydmljZSkge1xyXG5cclxuXHR9XHJcblxyXG4gICAgb25TZWxlY3RJdGVtKGl0ZW06IExpc3RJdGVtKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcblx0fVxyXG5cclxuXHRhZGROZXdJdGVtKGl0ZW06IExpc3RJdGVtKSB7XHJcblx0XHRpZiAoaXRlbS5uYW1lICE9ICcnICYmIGl0ZW0ucXVhbnRpdHkgIT0gMClcclxuXHRcdHRoaXMuaXRlbUFycmF5LnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksIGltYWdlOiBpdGVtLmltYWdlLCBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeX0pO1xyXG5cdH1cclxuXHJcblx0c29tZXRoaW5nU2VsZWN0ZWQoaXRlbTogTGlzdEl0ZW0pOmJvb2xlYW4ge1xyXG5cdFx0aWYgKGl0ZW0ubmFtZSA9PSAnJyAmJiBpdGVtLnF1YW50aXR5ID09IDApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblJlbW92ZUl0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcclxuXHRcdHRoaXMuaXRlbUFycmF5LnNwbGljZSh0aGlzLml0ZW1BcnJheS5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0ge25hbWU6ICcnLCBxdWFudGl0eTogMCwgaW1hZ2U6ICcnLCBjYXRlZ29yeTogJyd9O1xyXG5cdH1cclxuXHJcblx0c2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnk6IENhdGVnb3J5SXRlbSkge1xyXG5cdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdGdldFByb2R1Y3RzKGN1cnJlbnRDYXRlZ29yeTogQ2F0ZWdvcnlJdGVtKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRQcm9kdWN0cyA9IHRoaXMuX2l0ZW1TZXJ2aWNlLmdldEl0ZW1zQnlDYXRlZ29yeShjdXJyZW50Q2F0ZWdvcnkuaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFByb2R1Y3RzO1xyXG5cdH1cclxuXHJcbn1cclxuIl19
