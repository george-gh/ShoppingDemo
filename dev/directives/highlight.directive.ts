import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

@Directive({
	selector: '[myHighlight]',
	host: {
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}
})
export class MyHighlightDirective implements OnInit {
	private _defaultColor = 'blue';
	private _startingColor = 'black';

    constructor (private _ref: ElementRef, private _renderer: Renderer) {}

    ngOnInit():any {
    	this.setTextColor(this._startingColor);
    }

	onMouseEnter() {
		this.setTextColor(this._defaultColor);
		this._renderer.setElementStyle(this._ref.nativeElement, 'cursor', 'pointer')
	}

	onMouseLeave() {
		this.setTextColor('');
	}

	setTextColor(color: string) {
		this._renderer.setElementStyle(this._ref.nativeElement, 'color', color)
	}
}