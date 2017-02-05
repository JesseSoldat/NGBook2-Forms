import { Component } from '@angular/core';

@Component({
	selector: 'demo-form-sku',
	templateUrl: './demo_form_sku.html'
})

export class DemoFormSku {
	onSubmit(form: any):void {
		console.log(form);
	}
}