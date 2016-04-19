import {Component, EventEmitter} from 'angular2/core';
import {MyNewItemComponent} from './my-new-item.component';
import {MyItemListComponent} from './my-item-list.component';
import {MyItemEditComponent} from './my-item-edit.component';
import {MyCategorySelectorComponent} from './my-category-selector.component'
import {ListItem} from './list-item';
// import {ItemsService} from 'app/services/items.service';

@Component({
    selector: 'my-app',
    template: `
    	<header>
    		<h2>Shopping List</h2>
    	</header>
    	<div class="main">
    		<my-category-selector></my-category-selector>
	        <my-new-item (newItem)="addNewItem($event)"></my-new-item>
	        <my-item-list *ngIf="itemArray.length > 0" [listArray]="itemArray" (chosenItem)="onSelectItem($event)"></my-item-list>
	        <my-item-edit *ngIf="somethingSelected(selectedItem)" [managedItem]="selectedItem" (removedItem)="onRemoveItem($event)"></my-item-edit>
        </div>
    `,
    directives: [MyNewItemComponent, MyItemListComponent, MyItemEditComponent, MyCategorySelectorComponent],
    inputs: ['newItem', 'chosenItem']
})
export class AppComponent {
	itemArray = new Array<ListItem>();
	selectedItem = {name: '', quantity: 0, image: '', category: ''};
	itemList = new EventEmitter<ListItem>();

    onSelectItem(item: ListItem) {
		this.selectedItem = item;
	}

	addNewItem(item: ListItem) {
		if (item.name != '' && item.quantity != 0)
		this.itemArray.push({name: item.name, quantity: item.quantity, image: item.image, category: item.category});
	}

	somethingSelected(item: ListItem):boolean {
		if (item.name == '' && item.quantity == 0) {
			return false;
		} else {
			return true;
		}
	}

	onRemoveItem(item: ListItem) {
		this.itemArray.splice(this.itemArray.indexOf(item), 1);
		this.selectedItem = {name: '', quantity: 0, image: '', category: ''};
	}
}
