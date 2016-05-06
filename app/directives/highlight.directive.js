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
    var MyHighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyHighlightDirective = (function () {
                function MyHighlightDirective(_ref, _renderer) {
                    this._ref = _ref;
                    this._renderer = _renderer;
                    this._defaultColor = 'blue';
                    this._startingColor = 'black';
                }
                MyHighlightDirective.prototype.ngOnInit = function () {
                    this.setTextColor(this._startingColor);
                };
                MyHighlightDirective.prototype.onMouseEnter = function () {
                    this.setTextColor(this._defaultColor);
                    this._renderer.setElementStyle(this._ref.nativeElement, 'cursor', 'pointer');
                };
                MyHighlightDirective.prototype.onMouseLeave = function () {
                    this.setTextColor('');
                };
                MyHighlightDirective.prototype.setTextColor = function (color) {
                    this._renderer.setElementStyle(this._ref.nativeElement, 'color', color);
                };
                MyHighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MyHighlightDirective);
                return MyHighlightDirective;
            }());
            exports_1("MyHighlightDirective", MyHighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUlJLDhCQUFxQixJQUFnQixFQUFVLFNBQW1CO29CQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFZO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7b0JBSDdELGtCQUFhLEdBQUcsTUFBTSxDQUFDO29CQUN2QixtQkFBYyxHQUFHLE9BQU8sQ0FBQztnQkFFdUMsQ0FBQztnQkFFdEUsdUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFSiwyQ0FBWSxHQUFaO29CQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQzdFLENBQUM7Z0JBRUQsMkNBQVksR0FBWjtvQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJDQUFZLEdBQVosVUFBYSxLQUFhO29CQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3hFLENBQUM7Z0JBNUJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLElBQUksRUFBRTs0QkFDTCxjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNoQztxQkFDRCxDQUFDOzt3Q0FBQTtnQkF1QkYsMkJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHVEQXNCQyxDQUFBIiwiZmlsZSI6ImRpcmVjdGl2ZXMvaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXHJcblx0aG9zdDoge1xyXG5cdFx0Jyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXHJcblx0XHQnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG5cdH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15SGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwcml2YXRlIF9kZWZhdWx0Q29sb3IgPSAnYmx1ZSc7XHJcblx0cHJpdmF0ZSBfc3RhcnRpbmdDb2xvciA9ICdibGFjayc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX3JlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgIFx0dGhpcy5zZXRUZXh0Q29sb3IodGhpcy5fc3RhcnRpbmdDb2xvcik7XHJcbiAgICB9XHJcblxyXG5cdG9uTW91c2VFbnRlcigpIHtcclxuXHRcdHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuX2RlZmF1bHRDb2xvcik7XHJcblx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fcmVmLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpXHJcblx0fVxyXG5cclxuXHRvbk1vdXNlTGVhdmUoKSB7XHJcblx0XHR0aGlzLnNldFRleHRDb2xvcignJyk7XHJcblx0fVxyXG5cclxuXHRzZXRUZXh0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX3JlZi5uYXRpdmVFbGVtZW50LCAnY29sb3InLCBjb2xvcilcclxuXHR9XHJcbn0iXX0=
