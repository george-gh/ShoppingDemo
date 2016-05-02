import {Component, Input, OnInit} from 'angular2/core';
import {ListItem} from './list-item';
import {CategoryItem} from './category-item';
import {ItemsService} from './services/items.service';

@Component({
	selector: 'my-category-products',
	template: `
		<div>
			<h2>Products list</h2>
			<p>Category = {{myCategory.label}} | Array size = {{products.length}}</p>
			<ul>
				<li *ngFor='#item of products'>
					{{item.name}}
				</li>
			</ul>
		</div>
	`,
	inputs: ['myCategory'],
	providers: [ItemsService]
})
export class MyCategoryProductsComponent implements OnInit {
	products: Array<ListItem> = [];
	currentCategory: CategoryItem;
	@Input() myCategory: CategoryItem;

	constructor(private _itemService: ItemsService) {}

	ngOnInit() {
		//this.myCategory = this.currentCategory;
		//this.setProducts(this.currentCategory.id);

	}

	setProducts(catId: number) {
		this.products = this._itemService.getItemsByCategory(catId);
	}
}