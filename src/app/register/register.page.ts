import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  id: any;

  nama: any;
  username: any;
  password: any;
  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addUser() {
    let data = {
      nama: this.nama,
      username: this.username,
      password: this.password,
    };
    this._apiService.tambah(data, '/tambahUser.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.nama = '';
        this.username = '';
        this.password = '';
        this._apiService.notif('berhasil register');
        this.router.navigateByUrl('/login');
      },
      error: (err: any) => {
        this._apiService.notif('gagal register');
      },
    });
  }
}
