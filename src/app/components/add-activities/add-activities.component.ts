import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css']
})
export class AddActivitiesComponent implements OnInit {

  acreNos: string[];

  addActivitiesForm: FormGroup;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.acreNos = this.activityService.getAcreNos();
    this.addActivitiesForm = new FormGroup({
      acreNos: new FormControl()
    });
  }

  onSubmit(): void {

  }

}
