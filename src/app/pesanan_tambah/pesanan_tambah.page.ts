import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-pesanan_tambah',
  templateUrl: './pesanan_tambah.page.html',
  styleUrls: ['./pesanan_tambah.page.scss'],
})
export class PesananTambahPage implements OnInit {
  id: any;

  nama_costumer: any;
  makanan: any;
  minuman: any;
  tambahan: any;
  keterangan: any;
  total: any;
  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addPesanan() {
    let data = {
      nama_costumer: this.nama_costumer,
      makanan: this.makanan,
      minuman: this.minuman,
      tambahan: this.tambahan,
      keterangan: this.keterangan,
      total: this.total,
    };
    this._apiService.tambah(data, '/tambahPesanan.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.nama_costumer = '';
        this.makanan = '';
        this.minuman = '';
        this.tambahan = '';
        this.keterangan = '';
        this.total = '';
        this._apiService.notif('berhasil input Pesanan');
        this.router.navigateByUrl('/pesanan');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Pesanan');
      },
    });
  }
}

/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
