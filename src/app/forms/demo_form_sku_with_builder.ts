import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'demo-form-sku-builder',
	templateUrl: './demo_form_sku_with_builder.html'
})

export class DemoFormSkuBuilder {
	myForm: FormGroup;

	constructor(fb: FormBuilder){
		this.myForm = fb.group({
			'sku': ['ABC123']
		});
	}

	onSubmit(value: string):void {
		console.log(value);
	}
}