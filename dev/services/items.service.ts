import {Injectable} from 'angular2/core';
import {ListItem} from '../list-item';

@Injectable()
export class ItemsService {
	items = new Array<ListItem>();

	constructor() {
		this.items = [
			{
				name: 'Milk', 
				quantity: 0, 
				image: '../assets/images/items/milk.jpg', 
				category: '1'
			},
			{
				name: 'Bread',
				quantity: 0,
				image: '../assets/images/items/bread.jpg',
				category: '1'
			},
			{
				name: 'Sugar',
				quantity: 0,
				image: '../assets/images/items/sugar.jpg',
				category: '1'
			},
			{
				name: 'Beer',
				quantity: 0,
				image: '../assets/images/items/beer.jpg',
				category: '2'
			},
			{
				name: 'Wine',
				quantity: 0,
				image: '../assets/images/items/wine.jpg',
				category: '2'
			},
			{
				name: 'Water',
				quantity: 0,
				image: '../assets/images/items/water.jpg',
				category: '2'
			},
			{
				name: 'Dishes',
				quantity: 0,
				image: '../assets/images/items/dishes.jpg',
				category: '3'
			},
			{
				name: 'Glasses',
				quantity: 0,
				image: '../assets/images/items/glasses.jpg',
				category: '3'
			},
			{
				name: 'Cutlery',
				quantity: 0,
				image: '../assets/images/items/cutlery.jpg',
				category: '3'
			}
		];		
	}

	getItemsByCategory(categoryId: string): Array<ListItem> {
		let elements = new Array<ListItem>();
		this.items.map(function(item){
			if (item.category == categoryId) {
				elements.push(item);
			}
		});
		return elements;
	}
}