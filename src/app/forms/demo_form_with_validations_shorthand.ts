import { Component } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';

@Component({
	selector: 'demo-form-with-validations-shorthand',
	templateUrl: './demo_form_with_validations_shorthand.html'
})

export class DemoFormWithValidationsShorthand {
	myForm: FormGroup;

	constructor(fb: FormBuilder){
		this.myForm = fb.group({
			'sku': ['', Validators.required]
		});
	}
	onSubmit(value: any): void {
		console.log(value.sku);
	}
}