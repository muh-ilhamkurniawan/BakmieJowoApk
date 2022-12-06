-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 08:39 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bakmiejowo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan1`
--

CREATE TABLE `pemesanan1` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(100) NOT NULL,
  `id_makanan` int(11) NOT NULL,
  `nama_makanan` varchar(100) NOT NULL,
  `harga_makanan` int(11) NOT NULL,
  `id_minuman` int(11) NOT NULL,
  `nama_minuman` varchar(100) NOT NULL,
  `harga_minuman` int(11) NOT NULL,
  `id_tambahan` int(11) NOT NULL,
  `nama_tambahan` varchar(100) NOT NULL,
  `harga_tambahan` int(11) NOT NULL,
  `keterangan` varchar(150) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `id` int(11) NOT NULL,
  `nama_costumer` varchar(100) NOT NULL,
  `makanan` varchar(100) NOT NULL,
  `minuman` varchar(100) NOT NULL,
  `tambahan` varchar(100) NOT NULL,
  `keterangan` varchar(150) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan`
--

INSERT INTO `pesanan` (`id`, `nama_costumer`, `makanan`, `minuman`, `tambahan`, `keterangan`, `total`) VALUES
(1, 'ilhamkur', 'Bakmie Jowo Goreng', 'Es Teh', 'Kerupuk', '', 22000),
(2, 'Rizki', 'Bakmir Rebus', 'Teh Anget', 'Kerupuk', 'Porsi besar', 24000),
(3, 'ilham', 'Bakmie Jowo Goreng', 'Teh Tawar', '', 'biasa', 23000),
(4, 'Rizki', 'Bakmie Jowo Goreng', 'Teh Tawar', '', 'Biasa', 20000),
(5, 'Rizki', 'Bakmie Jowo Goreng', 'Teh Tawar', '', 'Biasa', 20000),
(6, 'admin', 'makanan', 'minuman', '', 'ket', 12000),
(7, 'admin', 'makanan', 'minuman', '', 'ket', 12000),
(8, 'admin', 'makan', 'minum', '', 'ket', 20000),
(9, 'admin', 'akan', 'minum', '', 'ket', 20000),
(10, 'admin', 'makan', 'minum', '-', '-', 12000);

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama_produk` varchar(100) NOT NULL,
  `harga` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `nama_produk`, `harga`, `kategori`) VALUES
(1, 'Bakmie Jowo Goreng', 18000, 'Makanan'),
(3, 'Teh Anget banget', 5000, 'Minuman'),
(4, 'Jeruk Anget', 6000, 'Minuman'),
(6, 'Kerupuk', 3000, 'Tambahan'),
(8, 'Kecap', 4000, 'Tambahan'),
(9, 'Kerupuk Ikan', 5000, 'Tambahan');

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_transaksi`
--

CREATE TABLE `riwayat_transaksi` (
  `id` int(11) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nama_costumer` varchar(100) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat_transaksi`
--

INSERT INTO `riwayat_transaksi` (`id`, `tanggal`, `nama_costumer`, `total`) VALUES
(2, '2022-11-30 13:54:23', 'rizki', 222000),
(3, '2022-11-30 13:54:23', 'ilham', 50000),
(10, '2020-11-30 14:09:14', 'bariq', 5600),
(11, '2022-12-01 00:56:50', 'Arya', 5500),
(12, '2022-12-01 02:27:33', 'ilham1', 3000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nama`, `username`, `password`) VALUES
(1, 'Admin Ganteng', 'admin', 'admin123'),
(3, 'Muhammad Ilham Kurniawan', 'ilhamkur', 'ilham123'),
(5, 'IlhamKurniawan', 'ilhamkur', 'ilham123'),
(7, 'Bariq Baharudin cuaks', 'Bariqriq', 'bariq123'),
(8, 'tes', 'tes', 'b93939873fd4923043b9dec975811f66'),
(9, 'fadly', 'fadlyar', 'fadli123'),
(10, 'ilham', 'ilhamkur', 'ilham123'),
(11, 'rizki', 'rizkiar', '123'),
(12, 'ilham kurniawan', 'ilham1', 'ilham123'),
(13, 'ilham2', 'ilham2', 'ilham123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pemesanan1`
--
ALTER TABLE `pemesanan1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_makanan` (`id_makanan`),
  ADD KEY `id_minuman` (`id_minuman`),
  ADD KEY `id_tambahan` (`id_tambahan`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `riwayat_transaksi`
--
ALTER TABLE `riwayat_transaksi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pemesanan1`
--
ALTER TABLE `pemesanan1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pesanan`
--
ALTER TABLE `pesanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `riwayat_transaksi`
--
ALTER TABLE `riwayat_transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pemesanan1`
--
ALTER TABLE `pemesanan1`
  ADD CONSTRAINT `pemesanan1_ibfk_1` FOREIGN KEY (`id_makanan`) REFERENCES `produk` (`id`),
  ADD CONSTRAINT `pemesanan1_ibfk_2` FOREIGN KEY (`id_minuman`) REFERENCES `produk` (`id`),
  ADD CONSTRAINT `pemesanan1_ibfk_3` FOREIGN KEY (`id_tambahan`) REFERENCES `produk` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
