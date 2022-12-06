<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$nama=trim($data['nama']);
$username=trim($data['username']);
$password=trim($data['password']);

if($nama!='' and $username!='' and $password!=''){
$query = mysqli_query($koneksi,"insert into user(nama,username,password) values('$nama','$username','$password')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-30 11:44:30 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */