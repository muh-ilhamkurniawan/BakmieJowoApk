import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananTambahPageRoutingModule } from './pesanan_tambah-routing.module';

import { PesananTambahPage } from './pesanan_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananTambahPageRoutingModule
  ],
  declarations: [PesananTambahPage]
})
export class PesananTambahPageModule {}




/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */