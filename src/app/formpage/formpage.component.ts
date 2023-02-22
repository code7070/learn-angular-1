import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css'],
})
export class FormpageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    username: new FormControl('', Validators.required),
    gender: new FormControl(null),
    emails: this.fb.array([]),
  });

  get emails() {
    return this.userForm.controls['emails'] as FormArray;
  }

  emailForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  addNewEmail() {
    this.emails.push(this.emailForm);
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  ngOnInit(): void {
    this.addNewEmail();
  }

  submit() {
    console.log('FORM SUBMITTED: ', this.userForm);
  }
}
