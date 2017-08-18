import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-shipper-cosignee',
  templateUrl: 'shipper-cosignee.component.html',
  styleUrls: ['../waybill-inquiry.component.css'],
})
export class ShipperCosigneeComponent {
  @Input() shipperCosigneeGroup: FormGroup;
}
