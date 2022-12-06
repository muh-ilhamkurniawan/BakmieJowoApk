import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: 'pesanan',
    loadChildren: () =>
      import('./pesanan/pesanan.module').then((m) => m.PesananPageModule),
  },
  {
    path: 'pesanan_tambah',
    loadChildren: () =>
      import('./pesanan_tambah/pesanan_tambah.module').then(
        (m) => m.PesananTambahPageModule
      ),
  },
  {
    path: 'pesanan_edit/:id',
    loadChildren: () =>
      import('./pesanan_edit/pesanan_edit.module').then(
        (m) => m.PesananEditPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },

  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full',
  // },
  {
    path: 'produk',
    loadChildren: () =>
      import('./produk/produk.module').then((m) => m.ProdukPageModule),
  },
  {
    path: 'produk_tambah',
    loadChildren: () =>
      import('./produk_tambah/produk_tambah.module').then(
        (m) => m.ProdukTambahPageModule
      ),
  },
  {
    path: 'produk_edit/:id',
    loadChildren: () =>
      import('./produk_edit/produk_edit.module').then(
        (m) => m.ProdukEditPageModule
      ),
  },
  {
    path: 'riwayat_transaksi',
    loadChildren: () =>
      import('./riwayat_transaksi/riwayat_transaksi.module').then(
        (m) => m.Riwayat_transaksiPageModule
      ),
  },
  {
    path: 'riwayat_transaksi_tambah',
    loadChildren: () =>
      import('./riwayat_transaksi_tambah/riwayat_transaksi_tambah.module').then(
        (m) => m.Riwayat_transaksiTambahPageModule
      ),
  },
  {
    path: 'riwayat_transaksi_edit/:id',
    loadChildren: () =>
      import('./riwayat_transaksi_edit/riwayat_transaksi_edit.module').then(
        (m) => m.Riwayat_transaksiEditPageModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserPageModule),
  },
  {
    path: 'user_tambah',
    loadChildren: () =>
      import('./user_tambah/user_tambah.module').then(
        (m) => m.UserTambahPageModule
      ),
  },
  {
    path: 'user_edit/:id',
    loadChildren: () =>
      import('./user_edit/user_edit.module').then((m) => m.UserEditPageModule),
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'pemesanan',
    loadChildren: () =>
      import('./pemesanan/pemesanan.module').then((m) => m.PemesananPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
