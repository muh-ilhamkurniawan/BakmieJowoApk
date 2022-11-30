
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Riwayat_transaksiTambahPage } from './riwayat_transaksi_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: Riwayat_transaksiTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Riwayat_transaksiTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-30 20:23:40 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */