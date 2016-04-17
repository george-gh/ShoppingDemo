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
                    this.array = new Array();
                    this.categories = new Array();
                    this.array = [
                        {
                            name: 'Milk',
                            quantity: '',
                            image: '',
                            category: ''
                        },
                        {
                            name: 'Bread',
                            quantity: '',
                            image: '',
                            category: ''
                        }
                    ];
                    this.categories = [
                        {
                            name: '',
                            label: '',
                            image: ''
                        }
                    ];
                }
                ItemsService = __decorate([
                    core_1.Injectable({}), 
                    __metadata('design:paramtypes', [])
                ], ItemsService);
                return ItemsService;
            }());
            exports_1("ItemsService", ItemsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2l0ZW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFJQztvQkFIQSxVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztvQkFDOUIsZUFBVSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO29CQUd0QyxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNaOzRCQUNDLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxFQUFFOzRCQUNaLEtBQUssRUFBRSxFQUFFOzRCQUNULFFBQVEsRUFBRSxFQUFFO3lCQUNaO3dCQUNEOzRCQUNDLElBQUksRUFBRSxPQUFPOzRCQUNiLFFBQVEsRUFBRSxFQUFFOzRCQUNaLEtBQUssRUFBRSxFQUFFOzRCQUNULFFBQVEsRUFBRSxFQUFFO3lCQUNaO3FCQUNELENBQUM7b0JBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRzt3QkFDakI7NEJBQ0MsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsS0FBSyxFQUFFLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLEVBQUU7eUJBQ1Q7cUJBQ0QsQ0FBQTtnQkFDRixDQUFDO2dCQTlCRjtvQkFBQyxpQkFBVSxDQUFDLEVBRVgsQ0FBQzs7Z0NBQUE7Z0JBNkJGLG1CQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCx1Q0E0QkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9pdGVtcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJ2FwcC9saXN0LWl0ZW0nO1xuaW1wb3J0IHtDYXRlZ29yeUl0ZW19IGZyb20gJ2FwcC9jYXRlZ29yeS1pdGVtJztcblxuQEluamVjdGFibGUoe1xuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zU2VydmljZSB7XG5cdGFycmF5ID0gbmV3IEFycmF5PExpc3RJdGVtPigpO1xuXHRjYXRlZ29yaWVzID0gbmV3IEFycmF5PENhdGVnb3J5SXRlbT4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFycmF5ID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnTWlsaycsIFxuXHRcdFx0XHRxdWFudGl0eTogJycsIFxuXHRcdFx0XHRpbWFnZTogJycsIFxuXHRcdFx0XHRjYXRlZ29yeTogJydcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdCcmVhZCcsXG5cdFx0XHRcdHF1YW50aXR5OiAnJyxcblx0XHRcdFx0aW1hZ2U6ICcnLFxuXHRcdFx0XHRjYXRlZ29yeTogJydcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0dGhpcy5jYXRlZ29yaWVzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnJyxcblx0XHRcdFx0bGFiZWw6ICcnLFxuXHRcdFx0XHRpbWFnZTogJydcblx0XHRcdH1cblx0XHRdXG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
