<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id=trim($data['id']);
$tanggal=trim($data['tanggal']);
$nama_costumer=trim($data['nama_costumer']);
$total=trim($data['total']);

if($tanggal!='' and $nama_costumer!='' and $total!=''){
$query = mysqli_query($koneksi,"update riwayat_transaksi set tanggal='$tanggal',nama_costumer='$nama_costumer',total='$total' where id='$id'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-30 20:23:40 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */