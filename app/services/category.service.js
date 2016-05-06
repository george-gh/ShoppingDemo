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
                            id: 1,
                            name: 'food',
                            label: 'Food',
                            image: '../assets/images/categories/food.jpg'
                        },
                        {
                            id: 2,
                            name: 'drink',
                            label: 'Drink',
                            image: '../assets/images/categories/drinks.jpg'
                        },
                        {
                            id: 3,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHQztvQkFGQSxlQUFVLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7b0JBR3RDLElBQUksQ0FBQyxVQUFVLEdBQUc7d0JBQ2pCOzRCQUNDLEVBQUUsRUFBRSxDQUFDOzRCQUNMLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxzQ0FBc0M7eUJBQzdDO3dCQUNEOzRCQUNDLEVBQUUsRUFBRSxDQUFDOzRCQUNMLElBQUksRUFBRSxPQUFPOzRCQUNiLEtBQUssRUFBRSxPQUFPOzRCQUNkLEtBQUssRUFBRSx3Q0FBd0M7eUJBQy9DO3dCQUNEOzRCQUNDLEVBQUUsRUFBRSxDQUFDOzRCQUNMLElBQUksRUFBRSxhQUFhOzRCQUNuQixLQUFLLEVBQUUsYUFBYTs0QkFDcEIsS0FBSyxFQUFFLDZDQUE2Qzt5QkFDcEQ7cUJBQ0QsQ0FBQTtnQkFDRixDQUFDO2dCQUVELHVDQUFhLEdBQWI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLENBQUM7Z0JBN0JGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQThCYixzQkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsNkNBNkJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q2F0ZWdvcnlJdGVtfSBmcm9tICcuLi9jYXRlZ29yeS1pdGVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U2VydmljZSB7XHJcblx0Y2F0ZWdvcmllcyA9IG5ldyBBcnJheTxDYXRlZ29yeUl0ZW0+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5jYXRlZ29yaWVzID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmFtZTogJ2Zvb2QnLFxyXG5cdFx0XHRcdGxhYmVsOiAnRm9vZCcsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2NhdGVnb3JpZXMvZm9vZC5qcGcnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0bmFtZTogJ2RyaW5rJyxcclxuXHRcdFx0XHRsYWJlbDogJ0RyaW5rJyxcclxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9kcmlua3MuanBnJztcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdG5hbWU6ICdhY2Nlc3NvcmllcycsXHJcblx0XHRcdFx0bGFiZWw6ICdBY2Nlc3NvcmllcycsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2NhdGVnb3JpZXMvYWNjZXNzb3JpZXMuanBnJztcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXHJcblx0Z2V0Q2F0ZWdvcmllcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhdGVnb3JpZXM7XHJcblx0fVxyXG59Il19
