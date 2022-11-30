import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdukTambahPageRoutingModule } from './produk_tambah-routing.module';

import { ProdukTambahPage } from './produk_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukTambahPageRoutingModule
  ],
  declarations: [ProdukTambahPage]
})
export class ProdukTambahPageModule {}




/* End of file  */

/* Created at 2022-11-30 21:29:13 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */