import {Component, OnInit} from 'angular2/core';
import {ListItem} from 'app/list-item';
import {CategoryItem} from 'app/category-item';
import {CategoryService} from 'app/services/category.service';

@Component({
	selector: 'my-category-selector',
	template: `
		<div class="category-selector">
			<h3>Select a category</h3>
			<div ngFor="#category for categoryArray">
				<img src="{{category.image}}" alt="{{category.name}}">
				<span>{{category.label}}</span>
			</div>
		</div>
	`,
	providers: [CategoryService]
})
export class MyCategorySelectorComponent implements OnInit {
	categoryArray = new Array<CategoryItem>();

	constructor(private _categoryService: CategoryService) {
		
	}

	ngInit():any {
		this.categoryArray = _categoryService.getCategories();
	}

}