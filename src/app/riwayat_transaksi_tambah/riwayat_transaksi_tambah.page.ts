import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-riwayat_transaksi_tambah',
  templateUrl: './riwayat_transaksi_tambah.page.html',
  styleUrls: ['./riwayat_transaksi_tambah.page.scss'],
})
export class Riwayat_transaksiTambahPage implements OnInit {
  id: any;

  tanggal: any;
  nama_costumer: any;
  total: any;
  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addRiwayat_transaksi() {
    let data = {
      tanggal: this.tanggal,
      nama_costumer: this.nama_costumer,
      total: this.total,
    };
    this._apiService.tambah(data, '/tambahRiwayat_transaksi.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.tanggal = '';
        this.nama_costumer = '';
        this.total = '';
        this._apiService.notif('berhasil input Riwayat_transaksi');
        this.router.navigateByUrl('/riwayat_transaksi');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Riwayat_transaksi');
      },
    });
  }
}

/* End of file  */

/* Created at 2022-11-30 20:23:40 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
