
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEditPage } from './user_edit.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */