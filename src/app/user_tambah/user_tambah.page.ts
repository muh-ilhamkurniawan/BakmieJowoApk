
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user_tambah',
  templateUrl: './user_tambah.page.html',
  styleUrls: ['./user_tambah.page.scss'],
})
export class UserTambahPage implements OnInit {
  id: any;
   
								nama: any;
								username: any;
								password: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addUser() {
    let data = {
								nama: this.nama,
								username: this.username,
								password: this.password,
    }
    this._apiService.tambah(data, '/tambahUser.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama='';
								 this.username='';
								 this.password='';
          this._apiService.notif('berhasil input User');
          this.router.navigateByUrl('/user');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input User');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */