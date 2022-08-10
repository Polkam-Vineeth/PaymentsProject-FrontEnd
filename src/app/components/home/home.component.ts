import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";


import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface MsgCode {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class HomeComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

    
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  

  selectedValue = new FormControl('', [Validators.required, Validators.pattern('customerTrans')]);
  selectedValue2: string ="";

  msgcodes: MsgCode[] = [
    {value: 'CHQB', viewValue: 'CHQB'},
    {value: 'CORT', viewValue: 'CORT'},
    {value: 'HOLD', viewValue: 'HOLD'},
    {value: 'INTC', viewValue: 'INTC'},
    {value: 'PHOB', viewValue: 'PHOB'},
    {value: 'PHOI', viewValue: 'PHOI'},
    {value: 'PHON', viewValue: 'PHON'},
    {value: 'REPA', viewValue: 'REPA'},
    {value: 'SDVA', viewValue: 'SDVA'},
  ];
  matcher = new MyErrorStateMatcher();

  currencyCodes = ['INR', 'USD', 'EUR', 'GBP', 'JPY'];
  selectedValue3:string ="INR";
  amountvalue: number = 0;
  digits=".2";
  code="INR";
  changeCurrency(event: Event) {
    const ele = event.target as HTMLSelectElement;
    // this.selected.emit(ele.value);
    console.log("Event",ele.value)
  }
  
  ngOnInit(): void {
  }

  updatedamount:string="";
  updatedamountno=0;

  OnTransfer(): void {
    this.updatedamount = (<HTMLInputElement>document.getElementById("vin")).value;
    this.updatedamountno= Number(this.updatedamount.replace(/,/g, ''));
    console.log(this.updatedamountno);
  }

}
