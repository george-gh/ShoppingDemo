import {Component, Input} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
	selector: 'my-product',
	template: `
		<div>
			<span>{{product.name}}</span>
			<img src="{{product.image}}" alt="{{product.name}}" width="50" height="50">
		</div>
	`,
	inputs: ['productElement: product']
})
export class MyProductComponent {
	@Input() product: ListItem;

}