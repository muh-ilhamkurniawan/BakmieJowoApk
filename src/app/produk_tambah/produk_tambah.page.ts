
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-produk_tambah',
  templateUrl: './produk_tambah.page.html',
  styleUrls: ['./produk_tambah.page.scss'],
})
export class ProdukTambahPage implements OnInit {
  id: any;
   
								nama_produk: any;
								harga: any;
								kategori: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addProduk() {
    let data = {
								nama_produk: this.nama_produk,
								harga: this.harga,
								kategori: this.kategori,
    }
    this._apiService.tambah(data, '/tambahProduk.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama_produk='';
								 this.harga='';
								 this.kategori='';
          this._apiService.notif('berhasil input Produk');
          this.router.navigateByUrl('/produk');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Produk');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-11-30 21:29:13 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */