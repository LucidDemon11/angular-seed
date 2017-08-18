import { Component } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css']
})
export class TopBarComponent {
  onClose() {
    console.log('close clicked');
  }

  onAssociateCar() {
    console.log('associate car clicked');
  }

  onViewWaybill() {
    console.log('view waybill clicked');
  }

  onViewME() {
    console.log('view me clicked');
  }

  onViewMES() {
    console.log('view mes clicked');
  }

  onViewEDI() {
    console.log('view edi clicked');
  }

  onSearch() {
    console.log('search clicked');
  }

  onClear() {
    console.log('clear clicked');
  }

  onPrintScreen() {
    console.log('print screen clicked');
  }

  onHelp() {
    console.log('help clicked');
  }
}
