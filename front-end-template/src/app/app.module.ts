import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BaseComponent } from './base/base.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TestComponent } from './test/test.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MultiAutoCompleteComponent } from './multi-auto-complete/multi-auto-complete.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';
import { MenuChildComponent } from './menu-child/menu-child.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    BaseComponent,
    DemoComponent,
    FormComponent,
    TestComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CheckboxComponent,
    MultiAutoCompleteComponent,
    DatePickerComponent,
    InputComponent,
    MenuComponent,
    MenuChildComponent,
    RadioButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
