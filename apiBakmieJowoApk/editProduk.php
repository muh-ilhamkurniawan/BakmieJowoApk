<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id=trim($data['id']);
$nama_produk=trim($data['nama_produk']);
$harga=trim($data['harga']);
$kategori=trim($data['kategori']);

if($nama_produk!='' and $harga!='' and $kategori!=''){
$query = mysqli_query($koneksi,"update produk set nama_produk='$nama_produk',harga='$harga',kategori='$kategori' where id='$id'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-30 21:29:13 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */