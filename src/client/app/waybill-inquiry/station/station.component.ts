import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-station',
  templateUrl: 'station.component.html',
  styleUrls: ['../waybill-inquiry.component.css'],
})
export class StationComponent {
  @Input() stationGroup: FormGroup;
}
