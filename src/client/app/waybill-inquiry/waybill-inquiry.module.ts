import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TopBarModule } from '../shared/top-bar/top-bar.module';
import { BillLadingComponent } from './bill-lading/bill-lading.component';
import { CommodityComponent } from './commodity/commodity.component';
import { ShipperCosigneeComponent } from './shipper-cosignee/shipper-cosignee.component';
import { StationComponent } from './station/station.component';
import { WaybillInquiryRoutingModule } from './waybill-inquiry-routing.module';
import { WaybillInquiryComponent } from './waybill-inquiry.component';



@NgModule({
  imports: [CommonModule, WaybillInquiryRoutingModule, TopBarModule, ReactiveFormsModule],
  declarations: [
    WaybillInquiryComponent,
    StationComponent,
    ShipperCosigneeComponent,
    CommodityComponent,
    BillLadingComponent,
  ],
  providers: [],
  exports: []
})
export class WaybillInquiryModule { }
