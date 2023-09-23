import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {
  addUserForm: FormGroup;
  currentStep: number = 1;

  constructor(private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    });
  }

  previousStep() {
    this.currentStep -= 1;
  }

  isFirstStep() {
    // if (this.addUserForm.valid) {
      this.currentStep += 1;
    //}
  }

  isSecondStep() {
    this.currentStep += 1;
  }

  isThirdStep() {
    this.currentStep += 1;
  }

  onSubmit() {
    console.log('submit form!');
  }
}
