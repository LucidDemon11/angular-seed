import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WaybillInquiryComponent } from './waybill-inquiry.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'waybill-inquiry', component: WaybillInquiryComponent }
    ])
  ],
  exports: [RouterModule]
})
export class WaybillInquiryRoutingModule { }
