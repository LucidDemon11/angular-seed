import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopBarComponent } from './top-bar.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {

}
