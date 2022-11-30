
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-produk_edit',
  templateUrl: './produk_edit.page.html',
  styleUrls: ['./produk_edit.page.scss'],
})
export class ProdukEditPage implements OnInit {
   id: any;
								nama_produk: any;
								harga: any;
								kategori: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilProduk(this.id);
    })
  }

  ngOnInit() {
  }

  ambilProduk(id: any) {
    this._apiService.lihat(id, '/lihatProduk.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let produk = hasil; 
								 this.nama_produk= produk.nama_produk;
								 this.harga= produk.harga;
								 this.kategori= produk.kategori;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editProduk() {
    let data = {
      id: this.id,
								 nama_produk:this.nama_produk,
								 harga:this.harga,
								 kategori:this.kategori,
    }
    this._apiService.edit(data, '/editProduk.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama_produk='';
								 this.harga='';
								 this.kategori='';
          this._apiService.notif('berhasil edit Produk');
          this.router.navigateByUrl('/produk');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Produk');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-11-30 21:29:13 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */