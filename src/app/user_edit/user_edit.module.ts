import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditPageRoutingModule } from './user_edit-routing.module';

import { UserEditPage } from './user_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEditPageRoutingModule
  ],
  declarations: [UserEditPage]
})
export class UserEditPageModule {}




/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */