import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'demo-form-ng-model',
	templateUrl: './demo_form_ng_model.html'
})

export class DemoFormNgModel {
	myForm: FormGroup;
	productionName: string;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'productName': ['', Validators.required]
		});
	}
	onSubmit(value: string): void {
		console.log(value);
	}
}