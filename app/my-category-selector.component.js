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
                }
                MyCategorySelectorComponent.prototype.ngOnInit = function () {
                    this.categoryArray = this._categoryService.getCategories();
                };
                MyCategorySelectorComponent = __decorate([
                    core_1.Component({
                        selector: 'my-category-selector',
                        template: "\n\t\t<div class=\"category-selector\">\n\t\t\t<h3>Select a category</h3>\n\t\t\t<div ngFor=\"#cat of categoryArray\">\n\t\t\t\t<img src=\"{{cat.image}}\" alt=\"{{cat.name}}\">\n\t\t\t\t<span>{{cat.label}}</span>\n\t\t\t</div>\n\t\t</div>\n\t",
                        providers: [category_service_1.CategoryService]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], MyCategorySelectorComponent);
                return MyCategorySelectorComponent;
            }());
            exports_1("MyCategorySelectorComponent", MyCategorySelectorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNhdGVnb3J5LXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFHQyxxQ0FBb0IsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUZyRCxrQkFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO2dCQUkxQyxDQUFDO2dCQUVELDhDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVELENBQUM7Z0JBdEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLG9QQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7cUJBQzVCLENBQUM7OytDQUFBO2dCQVlGLGtDQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxxRUFXQyxDQUFBIiwiZmlsZSI6Im15LWNhdGVnb3J5LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi9saXN0LWl0ZW0nO1xuaW1wb3J0IHtDYXRlZ29yeUl0ZW19IGZyb20gJy4vY2F0ZWdvcnktaXRlbSc7XG5pbXBvcnQge0NhdGVnb3J5U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9jYXRlZ29yeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktY2F0ZWdvcnktc2VsZWN0b3InLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1zZWxlY3RvclwiPlxuXHRcdFx0PGgzPlNlbGVjdCBhIGNhdGVnb3J5PC9oMz5cblx0XHRcdDxkaXYgbmdGb3I9XCIjY2F0IG9mIGNhdGVnb3J5QXJyYXlcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJ7e2NhdC5pbWFnZX19XCIgYWx0PVwie3tjYXQubmFtZX19XCI+XG5cdFx0XHRcdDxzcGFuPnt7Y2F0LmxhYmVsfX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0cHJvdmlkZXJzOiBbQ2F0ZWdvcnlTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNeUNhdGVnb3J5U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRjYXRlZ29yeUFycmF5ID0gbmV3IEFycmF5PENhdGVnb3J5SXRlbT4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYXRlZ29yeVNlcnZpY2U6IENhdGVnb3J5U2VydmljZSkge1xuXHRcdFxuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuY2F0ZWdvcnlBcnJheSA9IHRoaXMuX2NhdGVnb3J5U2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
