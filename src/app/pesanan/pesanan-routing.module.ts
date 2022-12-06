
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananPage } from './pesanan.page';

const routes: Routes = [
  {
    path: '',
    component: PesananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */