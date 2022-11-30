import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Produk', url: '/produk', icon: 'cube' },
    { title: 'Riwayat_transaksi', url: '/riwayat_transaksi', icon: 'archive' },
    {
      title: 'User',
      url: '/user',
      icon: 'cube',
    },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
