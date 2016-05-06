System.register(['angular2/core', './services/category.service'], function(exports_1, context_1) {
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
    var core_1, category_service_1;
    var MyCategorySelectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            MyCategorySelectorComponent = (function () {
                function MyCategorySelectorComponent(_categoryService) {
                    this._categoryService = _categoryService;
                    this.categoryArray = new Array();
                    this.selectedCategory = new core_1.EventEmitter();
                }
                MyCategorySelectorComponent.prototype.ngOnInit = function () {
                    this.categoryArray = this._categoryService.getCategories();
                };
                MyCategorySelectorComponent.prototype.setCurrentCategory = function (category) {
                    this.selectedCategory.emit(category);
                };
                MyCategorySelectorComponent = __decorate([
                    core_1.Component({
                        selector: 'my-category-selector',
                        template: "\n\t\t<div class=\"category-selector\">\n\t\t\t<h3>Select a category</h3>\n\t\t\t<div class=\"category-selection\">\n\t\t\t\t<div *ngFor=\"#cat of categoryArray\" class=\"category\">\n\t\t\t\t\t<img src=\"{{cat.image}}\" alt=\"{{cat.name}}\" width=\"150\" height=\"150\" (click)=\"setCurrentCategory(cat)\">\n\t\t\t\t\t<span>{{cat.label}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        providers: [category_service_1.CategoryService],
                        outputs: ['selectedCategory']
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], MyCategorySelectorComponent);
                return MyCategorySelectorComponent;
            }());
            exports_1("MyCategorySelectorComponent", MyCategorySelectorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNhdGVnb3J5LXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFJQyxxQ0FBb0IsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUhyRCxrQkFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO29CQUMxQyxxQkFBZ0IsR0FBRyxJQUFJLG1CQUFZLEVBQWdCLENBQUM7Z0JBRUksQ0FBQztnQkFFekQsOENBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUQsQ0FBQztnQkFFRCx3REFBa0IsR0FBbEIsVUFBbUIsUUFBc0I7b0JBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBNUJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLHlZQVVUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM3QixDQUFDOzsrQ0FBQTtnQkFlRixrQ0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQscUVBY0MsQ0FBQSIsImZpbGUiOiJteS1jYXRlZ29yeS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuL2xpc3QtaXRlbSc7XHJcbmltcG9ydCB7Q2F0ZWdvcnlJdGVtfSBmcm9tICcuL2NhdGVnb3J5LWl0ZW0nO1xyXG5pbXBvcnQge0NhdGVnb3J5U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9jYXRlZ29yeS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktY2F0ZWdvcnktc2VsZWN0b3InLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktc2VsZWN0b3JcIj5cclxuXHRcdFx0PGgzPlNlbGVjdCBhIGNhdGVnb3J5PC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhdGVnb3J5LXNlbGVjdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwiI2NhdCBvZiBjYXRlZ29yeUFycmF5XCIgY2xhc3M9XCJjYXRlZ29yeVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJ7e2NhdC5pbWFnZX19XCIgYWx0PVwie3tjYXQubmFtZX19XCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIiAoY2xpY2spPVwic2V0Q3VycmVudENhdGVnb3J5KGNhdClcIj5cclxuXHRcdFx0XHRcdDxzcGFuPnt7Y2F0LmxhYmVsfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YCxcclxuXHRwcm92aWRlcnM6IFtDYXRlZ29yeVNlcnZpY2VdLFxyXG5cdG91dHB1dHM6IFsnc2VsZWN0ZWRDYXRlZ29yeSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNhdGVnb3J5U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNhdGVnb3J5QXJyYXkgPSBuZXcgQXJyYXk8Q2F0ZWdvcnlJdGVtPigpO1xyXG5cdHNlbGVjdGVkQ2F0ZWdvcnkgPSBuZXcgRXZlbnRFbWl0dGVyPENhdGVnb3J5SXRlbT4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY2F0ZWdvcnlTZXJ2aWNlOiBDYXRlZ29yeVNlcnZpY2UpIHt9XHJcblxyXG5cdG5nT25Jbml0KCk6YW55IHtcclxuXHRcdHRoaXMuY2F0ZWdvcnlBcnJheSA9IHRoaXMuX2NhdGVnb3J5U2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XHJcblx0fVxyXG5cclxuXHRzZXRDdXJyZW50Q2F0ZWdvcnkoY2F0ZWdvcnk6IENhdGVnb3J5SXRlbSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZENhdGVnb3J5LmVtaXQoY2F0ZWdvcnkpO1xyXG5cdH1cclxuXHJcbn0iXX0=
