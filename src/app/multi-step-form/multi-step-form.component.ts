import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gaming } from 'src/tools/plans.object';


@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {
  addUserForm: FormGroup;
  currentStep: number = 2;
  currentPlan: number = 1;
  finishedForm = false;
  plans: any[] = gaming.plans;
  add_ons: any[] = gaming.add_ons;
  selectedPlan: any = {};

  constructor(private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      isYearly: [false],
      onlineService: [false],
      largeStorage: [false],
      customizableProfile: [false],
    });
  }

  get form () {
    return this.addUserForm.controls;
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

  selectPlan(planId: number) {
    this.currentPlan = planId;
    this.selectedPlan = this.plans.filter(plan => plan.id === planId)[0];
  }

  goStep(step: number) {
    this.currentStep = step;
  }

  isThirdStep() {
    this.currentStep += 1;
  }

  onSubmit() {
    console.log('submit form!');
    this.finishedForm = true;
  }
}
