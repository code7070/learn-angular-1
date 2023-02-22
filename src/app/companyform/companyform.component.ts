import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.css'],
})
export class CompanyformComponent {
  adminForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  companyForm = this.fb.group({
    companyName: new FormControl('', [Validators.required]),
    admins: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get admins() {
    return this.companyForm.controls['admins'] as FormArray;
  }

  addNewAdmin() {
    this.admins.push(this.adminForm);
  }
}
