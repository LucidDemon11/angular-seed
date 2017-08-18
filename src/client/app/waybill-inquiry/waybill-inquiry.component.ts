import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-waybill-inquiry',
  templateUrl: 'waybill-inquiry.component.html',
  styleUrls: ['waybill-inquiry.component.css'],
})
export class WaybillInquiryComponent implements OnInit {
  loadEmptyOptions = ['ALL', 'SOME', 'MANY', 'SO MANY'];
  statusOptions = ['ALL', 'SOME', 'MANY', 'SO MANY'];
  waybillForm: FormGroup;
  dateRange: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  onSubmitWaybill() {
    console.log(this.waybillForm);
  }

  private initializeForm() {
    this.waybillForm = this.fb.group({
      'equipmentInitial': ['', [Validators.required]],
      'equipmentNumber': ['', [Validators.required]],
      'fromDate': ['', [Validators.required]],
      'toDate': ['', [Validators.required]],
      'waybillRoad': ['', [Validators.required]],
      'loadEmpty': ['', [Validators.required]],
      'waybillNumber': ['', [Validators.required]],
      'status': ['', [Validators.required]],
      'shipperCosigneeGroup': this.fb.group({
        'shipper': ['', [Validators.required]],
        'cosignee': ['', [Validators.required]]
      }),
      'stationGroup': this.fb.group({
        'originRoad': ['', [Validators.required]],
        'originCity': ['', [Validators.required]],
        'originStreet': ['', [Validators.required]],
        'destinationRoad': ['', [Validators.required]],
        'destinationCity': ['', [Validators.required]],
        'destinationStreet': ['', [Validators.required]],
      }),
      'billLadingGroup': this.fb.group({
        'shipperId': ['', [Validators.required]],
        'billLadingNumber': ['', [Validators.required]]
      }),
      'commodityGroup': this.fb.group({
        'commodityName': ['', [Validators.required]],
        'stcc': ['', [Validators.required]],
        'unna': ['', [Validators.required]]
      }),
    });

    // ALTERNATE WAY TO INSTANSIATE THE FORM MANUALLY WITHOUT FORM BUILDER
    //
    // this.waybillForm = new FormGroup({
    //   'equipmentInitial': new FormControl(null),
    //   'equipmentNumber': new FormControl(null),
    //   'dateRange': new FormGroup({
    //     'fromDate': new FormControl(null),
    //     'toDate': new FormControl(null)
    //   }),
    //   'waybillRoad': new FormControl(null),
    //   'loadEmpty': new FormControl(null),
    //   'waybillNumber': new FormControl(null),
    //   'status': new FormControl(null),
    //   'shipperCosigneeGroup': new FormGroup({
    //     'shipper': new FormControl(null),
    //     'cosignee': new FormControl(null)
    //   }),
    //   'stationGroup': new FormGroup({
    //     'originRoad': new FormControl(null),
    //     'originCity': new FormControl(null),
    //     'originStreet': new FormControl(null),
    //     'destinationRoad': new FormControl(null),
    //     'destinationCity': new FormControl(null),
    //     'destinationStreet': new FormControl(null),
    //   }),
    //   'billLadingGroup': new FormGroup({
    //     'shipperId': new FormControl(null),
    //     'billLadingNumber': new FormControl(null)
    //   }),
    //   'commodityGroup': new FormGroup({
    //     'commodityName': new FormControl(null),
    //     'stcc': new FormControl(null),
    //     'unna': new FormControl(null)
    //   }),
    // });
  }
}
