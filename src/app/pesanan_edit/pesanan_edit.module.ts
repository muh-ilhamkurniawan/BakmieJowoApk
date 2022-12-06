import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananEditPageRoutingModule } from './pesanan_edit-routing.module';

import { PesananEditPage } from './pesanan_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananEditPageRoutingModule
  ],
  declarations: [PesananEditPage]
})
export class PesananEditPageModule {}




/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */