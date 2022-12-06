
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PemesananPage } from './pemesanan.page';

const routes: Routes = [
  {
    path: '',
    component: PemesananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PemesananPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-01 08:25:59 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */