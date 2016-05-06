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
    var ItemsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemsService = (function () {
                function ItemsService() {
                    this.items = new Array();
                    this.items = [
                        {
                            name: 'Milk',
                            quantity: 0,
                            image: '../assets/images/items/milk.jpg',
                            category: 1
                        },
                        {
                            name: 'Bread',
                            quantity: 0,
                            image: '../assets/images/items/bread.jpg',
                            category: 1
                        },
                        {
                            name: 'Sugar',
                            quantity: 0,
                            image: '../assets/images/items/sugar.jpg',
                            category: 1
                        },
                        {
                            name: 'Beer',
                            quantity: 0,
                            image: '../assets/images/items/beer.jpg',
                            category: 2
                        },
                        {
                            name: 'Wine',
                            quantity: 0,
                            image: '../assets/images/items/wine.jpg',
                            category: 2
                        },
                        {
                            name: 'Water',
                            quantity: 0,
                            image: '../assets/images/items/water.jpg',
                            category: 2
                        },
                        {
                            name: 'Dishes',
                            quantity: 0,
                            image: '../assets/images/items/dishes.jpg',
                            category: 3
                        },
                        {
                            name: 'Glasses',
                            quantity: 0,
                            image: '../assets/images/items/glasses.jpg',
                            category: 3
                        },
                        {
                            name: 'Cutlery',
                            quantity: 0,
                            image: '../assets/images/items/cutlery.jpg',
                            category: 3
                        }
                    ];
                }
                ItemsService.prototype.getItemsByCategory = function (categoryId) {
                    var elements = new Array();
                    this.items.map(function (item) {
                        if (item.category == categoryId) {
                            elements.push(item);
                        }
                    });
                    return elements;
                };
                ItemsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ItemsService);
                return ItemsService;
            }());
            exports_1("ItemsService", ItemsService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2l0ZW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHQztvQkFGQSxVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztvQkFHN0IsSUFBSSxDQUFDLEtBQUssR0FBRzt3QkFDWjs0QkFDQyxJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsaUNBQWlDOzRCQUN4QyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsa0NBQWtDOzRCQUN6QyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsa0NBQWtDOzRCQUN6QyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsaUNBQWlDOzRCQUN4QyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsaUNBQWlDOzRCQUN4QyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsa0NBQWtDOzRCQUN6QyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsbUNBQW1DOzRCQUMxQyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsb0NBQW9DOzRCQUMzQyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsb0NBQW9DOzRCQUMzQyxRQUFRLEVBQUUsQ0FBQzt5QkFDWDtxQkFDRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQseUNBQWtCLEdBQWxCLFVBQW1CLFVBQWtCO29CQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLElBQUk7d0JBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDckIsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNqQixDQUFDO2dCQXZFRjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkF3RWIsbUJBQUM7WUFBRCxDQXZFQSxBQXVFQyxJQUFBO1lBdkVELHVDQXVFQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2l0ZW1zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuLi9saXN0LWl0ZW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlbXNTZXJ2aWNlIHtcclxuXHRpdGVtcyA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLml0ZW1zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ01pbGsnLCBcclxuXHRcdFx0XHRxdWFudGl0eTogMCwgXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL21pbGsuanBnJywgXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdCcmVhZCcsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDAsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL2JyZWFkLmpwZycsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdTdWdhcicsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDAsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL3N1Z2FyLmpwZycsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdCZWVyJyxcclxuXHRcdFx0XHRxdWFudGl0eTogMCxcclxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvYmVlci5qcGcnLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnV2luZScsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDAsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL3dpbmUuanBnJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1dhdGVyJyxcclxuXHRcdFx0XHRxdWFudGl0eTogMCxcclxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvd2F0ZXIuanBnJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0Rpc2hlcycsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDAsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL2Rpc2hlcy5qcGcnLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiAzXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnR2xhc3NlcycsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDAsXHJcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL2dsYXNzZXMuanBnJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0N1dGxlcnknLFxyXG5cdFx0XHRcdHF1YW50aXR5OiAwLFxyXG5cdFx0XHRcdGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9pdGVtcy9jdXRsZXJ5LmpwZycsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IDNcclxuXHRcdFx0fVxyXG5cdFx0XTtcdFx0XHJcblx0fVxyXG5cclxuXHRnZXRJdGVtc0J5Q2F0ZWdvcnkoY2F0ZWdvcnlJZDogbnVtYmVyKTogQXJyYXk8TGlzdEl0ZW0+IHtcclxuXHRcdGxldCBlbGVtZW50cyA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcclxuXHRcdHRoaXMuaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xyXG5cdFx0XHRpZiAoaXRlbS5jYXRlZ29yeSA9PSBjYXRlZ29yeUlkKSB7XHJcblx0XHRcdFx0ZWxlbWVudHMucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZWxlbWVudHM7XHJcblx0fVxyXG59Il19
