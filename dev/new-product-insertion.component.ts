import {Component} from 'angular2/core';

@Component({
	selector: 'new-product-insertion',
	template: `
		<div>
			<h4>Add a new product</h4>
			<label>Name</label>
			<input type='text'>
			<label>Image Url</label>
			<input type='text'>
			<label>Quantity</label>
			<input type='numer'>
		</div>
	`
})
export class NewProductInsertionComponent {

}