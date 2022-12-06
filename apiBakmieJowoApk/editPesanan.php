<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id=trim($data['id']);
$nama_costumer=trim($data['nama_costumer']);
$makanan=trim($data['makanan']);
$minuman=trim($data['minuman']);
$tambahan=trim($data['tambahan']);
$keterangan=trim($data['keterangan']);
$total=trim($data['total']);

if($nama_costumer!='' and $makanan!='' and $minuman!='' and $tambahan!='' and $keterangan!='' and $total!=''){
$query = mysqli_query($koneksi,"update pesanan set nama_costumer='$nama_costumer',makanan='$makanan',minuman='$minuman',tambahan='$tambahan',keterangan='$keterangan',total='$total' where id='$id'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */