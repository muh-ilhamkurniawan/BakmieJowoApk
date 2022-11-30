import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTambahPageRoutingModule } from './user_tambah-routing.module';

import { UserTambahPage } from './user_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTambahPageRoutingModule
  ],
  declarations: [UserTambahPage]
})
export class UserTambahPageModule {}




/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */