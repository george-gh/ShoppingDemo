import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from 'app/list-item';

@Component({
	selector: 'my-item-edit',
	template: `
		<section>
			<h3>Edit item</h3>
			<div class="container edit-item">
				<label>Item Name: </label>
				<input class="item-name" type="text" [(ngModel)]="managedItem.name" >
				<label>Quantity: </label>
				<input class="item-quantity" type="text" [(ngModel)]="managedItem.quantity">
				<br>
				<button (click)="deleteItem(managedItem)" class="danger">Delete</button>
				<span class="clear"></span>
			</div>
		</section>
	`,
	inputs: ['managedItem'],
	outputs: ['removedItem']
})
export class MyItemEditComponent {
	removedItem = new EventEmitter<ListItem>();
	removed = {name: '', quantity: ''};

	deleteItem(item: ListItem) {
		this.removedItem.emit(item);
	}
}