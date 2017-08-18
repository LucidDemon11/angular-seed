import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-commodity',
  templateUrl: 'commodity.component.html',
  styleUrls: ['../waybill-inquiry.component.css'],
})
export class CommodityComponent {
  @Input() commodityGroup: FormGroup;
}
