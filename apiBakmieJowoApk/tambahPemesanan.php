<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_user=trim($data['id_user']);
$nama_user=trim($data['nama_user']);
$id_makanan=trim($data['id_makanan']);
$nama_makanan=trim($data['nama_makanan']);
$harga_makanan=trim($data['harga_makanan']);
$id_minuman=trim($data['id_minuman']);
$nama_minuman=trim($data['nama_minuman']);
$harga_minuman=trim($data['harga_minuman']);
$id_tambahan=trim($data['id_tambahan']);
$nama_tambahan=trim($data['nama_tambahan']);
$harga_tambahan=trim($data['harga_tambahan']);
$keterangan=trim($data['keterangan']);
$total=trim($data['total']);

if($id_user!='' and $nama_user!='' and $id_makanan!='' and $nama_makanan!='' and $harga_makanan!='' and $id_minuman!='' and $nama_minuman!='' and $harga_minuman!='' and $id_tambahan!='' and $nama_tambahan!='' and $harga_tambahan!='' and $keterangan!='' and $total!=''){
$query = mysqli_query($koneksi,"insert into pemesanan(id_user,nama_user,id_makanan,nama_makanan,harga_makanan,id_minuman,nama_minuman,harga_minuman,id_tambahan,nama_tambahan,harga_tambahan,keterangan,total) values('$id_user','$nama_user','$id_makanan','$nama_makanan','$harga_makanan','$id_minuman','$nama_minuman','$harga_minuman','$id_tambahan','$nama_tambahan','$harga_tambahan','$keterangan','$total')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-12-01 08:25:59 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */