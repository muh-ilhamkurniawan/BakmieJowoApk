
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-pesanan_edit',
  templateUrl: './pesanan_edit.page.html',
  styleUrls: ['./pesanan_edit.page.scss'],
})
export class PesananEditPage implements OnInit {
   id: any;
								nama_costumer: any;
								makanan: any;
								minuman: any;
								tambahan: any;
								keterangan: any;
								total: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilPesanan(this.id);
    })
  }

  ngOnInit() {
  }

  ambilPesanan(id: any) {
    this._apiService.lihat(id, '/lihatPesanan.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let pesanan = hasil; 
								 this.nama_costumer= pesanan.nama_costumer;
								 this.makanan= pesanan.makanan;
								 this.minuman= pesanan.minuman;
								 this.tambahan= pesanan.tambahan;
								 this.keterangan= pesanan.keterangan;
								 this.total= pesanan.total;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editPesanan() {
    let data = {
      id: this.id,
								 nama_costumer:this.nama_costumer,
								 makanan:this.makanan,
								 minuman:this.minuman,
								 tambahan:this.tambahan,
								 keterangan:this.keterangan,
								 total:this.total,
    }
    this._apiService.edit(data, '/editPesanan.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama_costumer='';
								 this.makanan='';
								 this.minuman='';
								 this.tambahan='';
								 this.keterangan='';
								 this.total='';
          this._apiService.notif('berhasil edit Pesanan');
          this.router.navigateByUrl('/pesanan');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Pesanan');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */