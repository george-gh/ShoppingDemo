import {Component, Input, Output} from 'angular2/core';
import {ListItem} from './list-item';
import {CategoryItem} from './category-item';
import {MyProductComponent} from './my-product.component';

@Component({
	selector: 'my-category-products',
	template: `
		<div>
			<h2>{{myCategory.label}}</h2>
			<ul>
				<li *ngFor='#item of myProducts'>
					<my-product (productElement)="item"></my-product>
				</li>
			</ul>
		</div>
	`,
	inputs: ['myCategory', 'myProducts'],
	outputs: ['productElement'],
	directives: [MyProductComponent]
})
export class MyCategoryProductsComponent {
	products: Array<ListItem> = [];
	currentCategory: CategoryItem;
	@Input() myCategory: CategoryItem;
	@Input() myProducts: ListItem[];

}