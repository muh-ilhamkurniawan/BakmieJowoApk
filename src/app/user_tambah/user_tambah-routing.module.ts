
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTambahPage } from './user_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: UserTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */