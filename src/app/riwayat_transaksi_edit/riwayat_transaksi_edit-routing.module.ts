
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Riwayat_transaksiEditPage } from './riwayat_transaksi_edit.page';

const routes: Routes = [
  {
    path: '',
    component: Riwayat_transaksiEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Riwayat_transaksiEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-30 20:23:40 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */