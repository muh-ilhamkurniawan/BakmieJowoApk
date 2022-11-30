
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user_edit',
  templateUrl: './user_edit.page.html',
  styleUrls: ['./user_edit.page.scss'],
})
export class UserEditPage implements OnInit {
   id: any;
								nama: any;
								username: any;
								password: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilUser(this.id);
    })
  }

  ngOnInit() {
  }

  ambilUser(id: any) {
    this._apiService.lihat(id, '/lihatUser.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let user = hasil; 
								 this.nama= user.nama;
								 this.username= user.username;
								 this.password= user.password;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editUser() {
    let data = {
      id: this.id,
								 nama:this.nama,
								 username:this.username,
								 password:this.password,
    }
    this._apiService.edit(data, '/editUser.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama='';
								 this.username='';
								 this.password='';
          this._apiService.notif('berhasil edit User');
          this.router.navigateByUrl('/user');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit User');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */