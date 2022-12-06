<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$nama_produk=trim($data['nama_produk']);
$harga=trim($data['harga']);
$kategori=trim($data['kategori']);

if($nama_produk!='' and $harga!='' and $kategori!=''){
$query = mysqli_query($koneksi,"insert into produk(nama_produk,harga,kategori) values('$nama_produk','$harga','$kategori')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-30 21:29:13 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */