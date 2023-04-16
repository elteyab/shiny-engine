import {Component} from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-business-hours',
  templateUrl: './business-hours.component.html',
  styleUrls: ['./business-hours.component.css']
})
export class BusinessHoursComponent {
  businessForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.businessForm = this.fb.group({
      description: '',
      start_date: '',
      additionalHour: this.fb.array([]),
    });
  }

  additionalHour(): FormArray {
    return this.businessForm.get("additionalHour") as FormArray
  }

  newAdditional(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  addAdditional() {
    this.additionalHour().push(this.newAdditional());
  }

  removeAdditional(i: number) {
    this.additionalHour().removeAt(i);
  }

  onSubmit() {
    console.log(this.businessForm.value);
  }
}
