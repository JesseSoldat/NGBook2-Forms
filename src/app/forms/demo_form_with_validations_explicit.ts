import { Component } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	AbstractControl
} from '@angular/forms';

@Component({
	selector: 'demo-form-with-validations-explicit',
	templateUrl: './demo_form_with_validations_explicit.html'
})

export class DemoFormWithValidationsExplicit {
	myForm: FormGroup;
	sku: AbstractControl;

	constructor(fb: FormBuilder){
		this.myForm = fb.group({
			'sku': ['', Validators.required]
		});
		this.sku = this.myForm.controls['sku'];
	}

	onSubmit(value: string): void {
		console.log(value);
		
		console.log(this.sku.errors);
		
	}
}