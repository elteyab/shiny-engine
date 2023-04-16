import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-all-day-menu',
  templateUrl: './all-day-menu.component.html',
  styleUrls: ['./all-day-menu.component.css']
})
export class AllDayMenuComponent {

  workHoursForm2: FormGroup;

  // workHoursForm: any;
  public daysTime: any;

  constructor(private fb: FormBuilder) {

    this.workHoursForm2 = new FormGroup({
      day: new FormControl(),
      morningStartTime: new FormControl(),
      morningCloseTime: new FormControl(),
      afterNoonStartTime: new FormControl(),
      afterNoonCloseTime: new FormControl(),
      isClosed: new FormControl()
    });
// this.workHoursForm2 = this
    this.daysTime = this.demoData();
    console.log("days: ", this.demoData())
  }

  demoData() {
    return {
      "days": [
        {
          "day": "1",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": true
        },
        {
          "day": "2",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": false
        },
        {
          "day": "3",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": false
        },
        {
          "day": "4",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": false
        },
        {
          "day": "5",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": false
        },
        {
          "day": "6",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": false
        },
        {
          "day": "7",
          "morningStartTime": "09:30",
          "morningCloseTime": "09:30",
          "afterNoonStartTime": "15: 20",
          "afterNoonCloseTime": "10:19",
          "isClosed": false
        },
      ]
    }
  }

  submit() {
    console.log("print: ", this.workHoursForm2.value);
  }
}
