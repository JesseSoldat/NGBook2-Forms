import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFormSku } from './forms/demo_form_sku';
import { DemoFormSkuBuilder } from './forms/demo_form_sku_with_builder';
import { DemoFormWithValidationsExplicit } from './forms/demo_form_with_validations_explicit';
import { DemoFormWithValidationsShorthand } from './forms/demo_form_with_validations_shorthand';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSku,
    DemoFormSkuBuilder,
    DemoFormWithValidationsExplicit,
    DemoFormWithValidationsShorthand
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
