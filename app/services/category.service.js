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
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService() {
                    this.categories = new Array();
                    this.categories = [
                        {
                            name: 'food',
                            label: 'Food',
                            image: '../assets/images/categories/food.jpg'
                        },
                        {
                            name: 'drink',
                            label: 'Drink',
                            image: '../assets/images/categories/drinks.jpg'
                        },
                        {
                            name: 'accessories',
                            label: 'Accessories',
                            image: '../assets/images/categories/accessories.jpg'
                        }
                    ];
                }
                CategoryService.prototype.getCategories = function () {
                    return this.categories;
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHQztvQkFGQSxlQUFVLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7b0JBR3RDLElBQUksQ0FBQyxVQUFVLEdBQUc7d0JBQ2pCOzRCQUNDLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxzQ0FBc0M7eUJBQzdDO3dCQUNEOzRCQUNDLElBQUksRUFBRSxPQUFPOzRCQUNiLEtBQUssRUFBRSxPQUFPOzRCQUNkLEtBQUssRUFBRSx3Q0FBd0M7eUJBQy9DO3dCQUNEOzRCQUNDLElBQUksRUFBRSxhQUFhOzRCQUNuQixLQUFLLEVBQUUsYUFBYTs0QkFDcEIsS0FBSyxFQUFFLDZDQUE2Qzt5QkFDcEQ7cUJBQ0QsQ0FBQTtnQkFDRixDQUFDO2dCQUVELHVDQUFhLEdBQWI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLENBQUM7Z0JBMUJGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTJCYixzQkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsNkNBMEJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NhdGVnb3J5SXRlbX0gZnJvbSAnYXBwL2NhdGVnb3J5LWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIHtcblx0Y2F0ZWdvcmllcyA9IG5ldyBBcnJheTxDYXRlZ29yeUl0ZW0+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jYXRlZ29yaWVzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnZm9vZCcsXG5cdFx0XHRcdGxhYmVsOiAnRm9vZCcsXG5cdFx0XHRcdGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9jYXRlZ29yaWVzL2Zvb2QuanBnJztcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdkcmluaycsXG5cdFx0XHRcdGxhYmVsOiAnRHJpbmsnLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9kcmlua3MuanBnJztcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdhY2Nlc3NvcmllcycsXG5cdFx0XHRcdGxhYmVsOiAnQWNjZXNzb3JpZXMnLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9hY2Nlc3Nvcmllcy5qcGcnO1xuXHRcdFx0fVxuXHRcdF1cblx0fVxuXG5cdGdldENhdGVnb3JpZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2F0ZWdvcmllcztcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
