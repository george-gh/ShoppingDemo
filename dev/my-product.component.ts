import {Component, Input} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
	selector: 'my-product',
	template: `
		<div>
			<span>{{productElement.name}}</span>
			<img src="{{productElement.image}}" alt="{{productElement.name}}" width="80" height="80">
		</div>
	`,
	outputs: ['productElement']
})
export class MyProductComponent {
	@Input() productElement: ListItem;

}