import {Injectable} from 'angular2/core';
import {ListItem} from 'app/list-item';
import {CategoryItem} from 'app/category-item';

@Injectable({

})
export class ItemsService {
	array = new Array<ListItem>();
	categories = new Array<CategoryItem>();

	constructor() {
		this.array = [
			{
				name: 'Milk', 
				quantity: '', 
				image: '', 
				category: ''
			},
			{
				name: 'Bread',
				quantity: '',
				image: '',
				category: ''
			}
		];

		this.categories = [
			{
				name: '',
				label: '',
				image: ''
			}
		]
	}
}