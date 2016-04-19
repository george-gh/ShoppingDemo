import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
	selector: 'my-new-item',
	template: `
		<section>
			<h3>Add a new item</h3>
			<div class="container new-item">
				<label>Item Name: </label>
				<input class="item-name" type="text" [(ngModel)]="currentItem.name" >
				<label>Quantity: </label>
				<input class="item-quantity" type="text" [(ngModel)]="currentItem.quantity">
				<br>
				<button (click)="addItem(currentItem)">Add</button>
				<span class="clear"></span>
			</div>
		</section>
	`,
	outputs: ['newItem']
})
export class MyNewItemComponent {
	newItem = new EventEmitter<ListItem>();
	currentItem = {name: '', quantity: ''};

	addItem (item: ListItem) {
		this.newItem.emit({name: item.name, quantity: item.quantity});
		this.currentItem = {name: '', quantity: ''};
	}
	
}