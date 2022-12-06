<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$nama_costumer=trim($data['nama_costumer']);
$makanan=trim($data['makanan']);
$minuman=trim($data['minuman']);
$tambahan=trim($data['tambahan']);
$keterangan=trim($data['keterangan']);
$total=trim($data['total']);

if($nama_costumer!='' and $makanan!='' and $minuman!='' and $tambahan!='' and $keterangan!='' and $total!=''){
$query = mysqli_query($koneksi,"insert into pesanan(nama_costumer,makanan,minuman,tambahan,keterangan,total) values('$nama_costumer','$makanan','$minuman','$tambahan','$keterangan','$total')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */