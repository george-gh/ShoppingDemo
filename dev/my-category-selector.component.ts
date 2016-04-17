import {Component} from 'angular2/core';
import {ListItem} from 'app/list-item';
import {CategoryItem} from 'app/category-item';
import {CategoryService} from 'app/services/category.service';

@Component({
	selector: 'my-category-selector',
	template: `
		<div class="category-selector">
			<h3>Select a category</h3>
			<div ngFor="#categ for categoryArray">
				<img src="{{categ.image}}" alt="{{categ.name}}">
				<span>{{categ.label}}</span>
			</div>
		</div>
	`,
	providers: [CategoryService]
})
export class MyCategorySelectorComponent {
	categoryArray = new Array<CategoryItem>();

	constructor(private _categoryService: CategoryService) {
		this.categoryArray = _categoryService.getCategories();
	}

}