import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss'],
})
export class PesananPage {
  page = 0;
  perPage = 10;
  pesanan: any[] = [];
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getPesanan();
  }

  paginateArray() {
    this.page++;
    return this.pesanan.filter(
      (x) =>
        x.urutan_list > this.page * this.perPage - this.perPage &&
        x.urutan_list <= this.page * this.perPage
    );
  }

  getPesanan() {
    this._apiService.tampil('tampilPesanan.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.pesanan = res;
        this.lists = this.paginateArray();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  doRefresh(event: any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getPesanan();
    }, 2000);
  }

  loadMore(event: any) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if (array?.length < this.perPage) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  deletePesanan(id: any) {
    this.alertController
      .create({
        header: 'perhatian',
        subHeader: 'Yakin menghapus data ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.hapus(id, '/hapusPesanan.php?id=').subscribe({
                next: (res: any) => {
                  console.log('sukses', res);
                  this.page = 0;
                  this.perPage = 10;
                  this.getPesanan();
                },
                error: (error: any) => {
                  this._apiService.notif('gagal');
                },
              });
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}

/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
