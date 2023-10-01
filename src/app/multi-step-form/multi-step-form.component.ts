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
  currentStep: number = 1;
  currentPlan: number = 1;
  finishedForm = false;
  plans: any[] = gaming.plans;
  addOns: any[] = gaming.add_ons;
  selectedPlan: any = {};
  selectedAddOns: any[] = [];
  totalPayment: number = 0;

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
    // }
  }

  isSecondStep() {
    this.currentStep += 1;
  }

  selectAddOn(addOnId: number) {
    if (this.selectedAddOns.filter(addOn => addOn.id === addOnId).length > 0) {
      this.selectedAddOns = this.selectedAddOns.filter(addOn => addOn.id !== addOnId);
    } else {
      this.selectedAddOns.push(this.addOns.filter(addOn=> addOn.id === addOnId)[0]);
    }

    if (this.selectedAddOns.length > 1) {
      this.selectedAddOns.sort(this.sortAddOns);
    }
  }

  sortAddOns(a: any, b: any){
    return a.id - b.id;
  }

  selectPlan(planId: number) {
    this.currentPlan = planId;
  }

  goStep(step: number) {
    this.currentStep = step;
  }

  isThirdStep() {
    this.selectedPlan = this.plans.filter(plan => plan.id === this.currentPlan)[0];
    if (this.form['isYearly'].value) {
      this.totalPayment = this.selectedPlan.price.yearly +
        this.selectedAddOns.map(addOn => addOn.price.yearly).reduce((a, b) => a + b, 0); 
    } else {
      this.totalPayment = this.selectedPlan.price.monthly +
        this.selectedAddOns.map(addOn => addOn.price.monthly).reduce((a, b) => a + b, 0);
    }
    this.currentStep += 1;
  }

  onSubmit() {
    console.log('submit form!');
    this.finishedForm = true;
  }
}
