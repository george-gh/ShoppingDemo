import {Component, OnInit} from 'angular2/core';
import {ListItem} from './list-item';
import {CategoryItem} from './category-item';
import {CategoryService} from './services/category.service';

@Component({
	selector: 'my-category-selector',
	template: `
		<div class="category-selector">
			<h3>Select a category</h3>
			<div class="category-selection">
				<div *ngFor="#cat of categoryArray" class="category">
					<img src="{{cat.image}}" alt="{{cat.name}}" width="150" height="150">
					<span>{{cat.label}}</span>
				</div>
			</div>
		</div>
	`,
	providers: [CategoryService]
})
export class MyCategorySelectorComponent implements OnInit {
	categoryArray = new Array<CategoryItem>();

	constructor(private _categoryService: CategoryService) {
		
	}

	ngOnInit():any {
		this.categoryArray = this._categoryService.getCategories();
	}

}