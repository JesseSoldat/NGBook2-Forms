import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
	selector: 'demo-form-with-events',
	templateUrl: './demo_form_with_events.html'
})

export class DemoFormWithEvents {

	myForm: FormGroup;
	sku: AbstractControl;

	constructor(fb: FormBuilder){
		this.myForm = fb.group({
			'sku': ['', Validators.required]
		});

		this.sku = this.myForm.controls['sku'];

		this.sku.valueChanges.subscribe((value: string) => {
		console.log('sku changed to: ', value);
		});

		this.myForm.valueChanges.subscribe((form: any) => {
			console.log('form changed to: ', form);
		});
	}

	onSubmit(form: any): void{
		console.log(form.sku);
	}

}