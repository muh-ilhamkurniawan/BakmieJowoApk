
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-riwayat_transaksi_edit',
  templateUrl: './riwayat_transaksi_edit.page.html',
  styleUrls: ['./riwayat_transaksi_edit.page.scss'],
})
export class Riwayat_transaksiEditPage implements OnInit {
   id: any;
								tanggal: any;
								nama_costumer: any;
								total: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilRiwayat_transaksi(this.id);
    })
  }

  ngOnInit() {
  }

  ambilRiwayat_transaksi(id: any) {
    this._apiService.lihat(id, '/lihatRiwayat_transaksi.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let riwayat_transaksi = hasil; 
								 this.tanggal= riwayat_transaksi.tanggal;
								 this.nama_costumer= riwayat_transaksi.nama_costumer;
								 this.total= riwayat_transaksi.total;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editRiwayat_transaksi() {
    let data = {
      id: this.id,
								 tanggal:this.tanggal,
								 nama_costumer:this.nama_costumer,
								 total:this.total,
    }
    this._apiService.edit(data, '/editRiwayat_transaksi.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.tanggal='';
								 this.nama_costumer='';
								 this.total='';
          this._apiService.notif('berhasil edit Riwayat_transaksi');
          this.router.navigateByUrl('/riwayat_transaksi');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Riwayat_transaksi');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-11-30 20:23:40 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */