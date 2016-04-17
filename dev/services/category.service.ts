import {Injectable} from 'angular2/core';
import {CategoryItem} from 'app/category-item';

@Injectable()
export class CategoryService {
	categories = new Array<CategoryItem>();

	constructor() {
		this.categories = [
			{
				name: 'food',
				label: 'Food',
				image: '../assets/images/categories/food.jpg';
			},
			{
				name: 'drink',
				label: 'Drink',
				image: '../assets/images/categories/drinks.jpg';
			},
			{
				name: 'accessories',
				label: 'Accessories',
				image: '../assets/images/categories/accessories.jpg';
			}
		]
	}

	getCategories() {
		return this.categories;
	}
}