import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFormSku } from './forms/demo_form_sku';
import { DemoFormSkuBuilder } from './forms/demo_form_sku_with_builder';
import { DemoFormWithValidationsExplicit } from './forms/demo_form_with_validations_explicit';
import { DemoFormWithValidationsShorthand } from './forms/demo_form_with_validations_shorthand';
import { DemoFormWithCustomValidation } from './forms/demo_form_with_custom_validations';
import { DemoFormWithEvents } from './forms/demo_form_with_events';
import { DemoFormNgModel } from './forms/demo_form_ng_model';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSku,
    DemoFormSkuBuilder,
    DemoFormWithValidationsExplicit,
    DemoFormWithValidationsShorthand,
    DemoFormWithCustomValidation,
    DemoFormWithEvents,
    DemoFormNgModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
