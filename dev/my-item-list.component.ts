import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from './list-item';
import {MyHighlightDirective} from './directives/highlight.directive';

@Component({
	selector: 'my-item-list',
	template: `
		<section>
			<h3>Item list</h3>
			<div class="container">
				<ul>
					<li *ngFor='#item of listArray'
						class="list-element"
						myHighlight 
						(click)="editItem(item)">{{item.name}} ({{item.quantity}})</li>
				</ul>
			</div>
		</section>
	`,
	inputs: ['listArray'],
	outputs: ['chosenItem'],
	directives: [MyHighlightDirective]
})
export class MyItemListComponent {
	chosenItem = new EventEmitter<ListItem>();
	myList = new Array<ListItem>();

	editItem(item: ListItem) {
		this.chosenItem.emit(item);
	}

}