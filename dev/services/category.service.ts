import {Injectable} from 'angular2/core';
import {CategoryItem} from '../category-item';

@Injectable()
export class CategoryService {
	categories = new Array<CategoryItem>();

	constructor() {
		this.categories = [
			{
				id: 1,
				name: 'food',
				label: 'Food',
				image: '../assets/images/categories/food.jpg';
			},
			{
				id: 2,
				name: 'drink',
				label: 'Drink',
				image: '../assets/images/categories/drinks.jpg';
			},
			{
				id: 3,
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