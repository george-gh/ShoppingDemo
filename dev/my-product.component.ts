import {Component, Input} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
	selector: 'my-product',
	template: `
		<div>
			<span>{{productElement.name}}</span>
			<img src="{{productElement.image}}" alt="{{productElement.name}}" class="clickable-img" width="80" height="80" (click)="onSelectItem(productElement)">
		</div>
	`,
	outputs: ['productElement']
})
export class MyProductComponent {
	@Input() productElement: ListItem;
	selectedProduct: ListItem;

	onSelectItem(item: ListItem) {
		this.selectedProduct = {name: item.name, quantity: item.quantity, image: item.image, category: item.category};
	}
}