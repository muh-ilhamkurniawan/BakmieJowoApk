import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Riwayat_transaksiTambahPageRoutingModule } from './riwayat_transaksi_tambah-routing.module';

import { Riwayat_transaksiTambahPage } from './riwayat_transaksi_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Riwayat_transaksiTambahPageRoutingModule
  ],
  declarations: [Riwayat_transaksiTambahPage]
})
export class Riwayat_transaksiTambahPageModule {}




/* End of file  */

/* Created at 2022-11-30 20:23:40 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */