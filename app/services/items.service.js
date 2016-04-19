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
                            category: '1'
                        },
                        {
                            name: 'Bread',
                            quantity: 0,
                            image: '../assets/images/items/bread.jpg',
                            category: '1'
                        },
                        {
                            name: 'Sugar',
                            quantity: 0,
                            image: '../assets/images/items/sugar.jpg',
                            category: '1'
                        },
                        {
                            name: 'Beer',
                            quantity: 0,
                            image: '../assets/images/items/beer.jpg',
                            category: '2'
                        },
                        {
                            name: 'Wine',
                            quantity: 0,
                            image: '../assets/images/items/wine.jpg',
                            category: '2'
                        },
                        {
                            name: 'Water',
                            quantity: 0,
                            image: '../assets/images/items/water.jpg',
                            category: '2'
                        },
                        {
                            name: 'Dishes',
                            quantity: 0,
                            image: '../assets/images/items/dishes.jpg',
                            category: '3'
                        },
                        {
                            name: 'Glasses',
                            quantity: 0,
                            image: '../assets/images/items/glasses.jpg',
                            category: '3'
                        },
                        {
                            name: 'Cutlery',
                            quantity: 0,
                            image: '../assets/images/items/cutlery.jpg',
                            category: '3'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2l0ZW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHQztvQkFGQSxVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztvQkFHN0IsSUFBSSxDQUFDLEtBQUssR0FBRzt3QkFDWjs0QkFDQyxJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsaUNBQWlDOzRCQUN4QyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsa0NBQWtDOzRCQUN6QyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsa0NBQWtDOzRCQUN6QyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsaUNBQWlDOzRCQUN4QyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsaUNBQWlDOzRCQUN4QyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsa0NBQWtDOzRCQUN6QyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsbUNBQW1DOzRCQUMxQyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsb0NBQW9DOzRCQUMzQyxRQUFRLEVBQUUsR0FBRzt5QkFDYjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsb0NBQW9DOzRCQUMzQyxRQUFRLEVBQUUsR0FBRzt5QkFDYjtxQkFDRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQseUNBQWtCLEdBQWxCLFVBQW1CLFVBQWtCO29CQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLElBQUk7d0JBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDckIsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNqQixDQUFDO2dCQXZFRjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkF3RWIsbUJBQUM7WUFBRCxDQXZFQSxBQXVFQyxJQUFBO1lBdkVELHVDQXVFQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2l0ZW1zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1zU2VydmljZSB7XG5cdGl0ZW1zID0gbmV3IEFycmF5PExpc3RJdGVtPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaXRlbXMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdNaWxrJywgXG5cdFx0XHRcdHF1YW50aXR5OiAwLCBcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL21pbGsuanBnJywgXG5cdFx0XHRcdGNhdGVnb3J5OiAnMSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdCcmVhZCcsXG5cdFx0XHRcdHF1YW50aXR5OiAwLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvYnJlYWQuanBnJyxcblx0XHRcdFx0Y2F0ZWdvcnk6ICcxJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1N1Z2FyJyxcblx0XHRcdFx0cXVhbnRpdHk6IDAsXG5cdFx0XHRcdGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9pdGVtcy9zdWdhci5qcGcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJzEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQmVlcicsXG5cdFx0XHRcdHF1YW50aXR5OiAwLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvYmVlci5qcGcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJzInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnV2luZScsXG5cdFx0XHRcdHF1YW50aXR5OiAwLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvd2luZS5qcGcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJzInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnV2F0ZXInLFxuXHRcdFx0XHRxdWFudGl0eTogMCxcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL3dhdGVyLmpwZycsXG5cdFx0XHRcdGNhdGVnb3J5OiAnMidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdEaXNoZXMnLFxuXHRcdFx0XHRxdWFudGl0eTogMCxcblx0XHRcdFx0aW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2l0ZW1zL2Rpc2hlcy5qcGcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJzMnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnR2xhc3NlcycsXG5cdFx0XHRcdHF1YW50aXR5OiAwLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvZ2xhc3Nlcy5qcGcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJzMnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQ3V0bGVyeScsXG5cdFx0XHRcdHF1YW50aXR5OiAwLFxuXHRcdFx0XHRpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvaXRlbXMvY3V0bGVyeS5qcGcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJzMnXG5cdFx0XHR9XG5cdFx0XTtcdFx0XG5cdH1cblxuXHRnZXRJdGVtc0J5Q2F0ZWdvcnkoY2F0ZWdvcnlJZDogc3RyaW5nKTogQXJyYXk8TGlzdEl0ZW0+IHtcblx0XHRsZXQgZWxlbWVudHMgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG5cdFx0dGhpcy5pdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSl7XG5cdFx0XHRpZiAoaXRlbS5jYXRlZ29yeSA9PSBjYXRlZ29yeUlkKSB7XG5cdFx0XHRcdGVsZW1lbnRzLnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGVsZW1lbnRzO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
