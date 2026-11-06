// =====================================================================
//  DAFTAR PRODUK TOKO  (edit file ini saja untuk menambah / mengubah produk)
//
//  Setelah selesai mengedit di GitHub: tekan "Commit changes", tunggu 1-2 menit,
//  lalu muat ulang halaman toko Anda.
//
//  Menambah produk: salin satu baris { nama: ... }, tempel di bawahnya, lalu ubah isinya.
//  Pastikan tiap baris diakhiri koma, kecuali baris terakhir.
//
//  gambar (ilustrasi bila belum ada foto), pilih salah satu:
//    segi4, pashmina, bergo, khimar, ciput, gelang, rantai, bros, anting
//  warnaLatar : angka 0-360 (warna latar kartu). Contoh: 0 merah, 120 hijau, 220 biru, 330 pink.
//  foto       : alamat file foto di repo, contoh "foto/gelang-manik.jpg". Kosongkan "" kalau belum ada.
// =====================================================================
window.TOKO = {
  nama: "Afda Hijab",
  wa: "6283128405394",   // nomor WhatsApp, awali 62, tanpa + dan tanpa spasi
  produk: [
    { nama: "Hijab Segi Empat Voal", kategori: "Segi Empat", harga: 79000, warna: ["Dusty pink", "Sage", "Mocha"], gambar: "segi4", warnaLatar: 345, foto: "" },
    { nama: "Segi Empat Satin Silk", kategori: "Segi Empat", harga: 69000, warna: ["Champagne", "Hitam", "Navy"], gambar: "segi4", warnaLatar: 32, foto: "" },
    { nama: "Pashmina Plisket", kategori: "Pashmina", harga: 95000, warna: ["Hitam", "Abu", "Mauve"], gambar: "pashmina", warnaLatar: 270, foto: "" },
    { nama: "Pashmina Kaos Premium", kategori: "Pashmina", harga: 55000, warna: ["Hitam", "Putih", "Coksu"], gambar: "pashmina", warnaLatar: 200, foto: "" },
    { nama: "Bergo Instan Jersey", kategori: "Instan", harga: 89000, warna: ["Hitam", "Sage", "Navy", "Mocha"], gambar: "bergo", warnaLatar: 160, foto: "" },
    { nama: "Hijab Instan Sport", kategori: "Instan", harga: 75000, warna: ["Hitam", "Abu", "Biru laut"], gambar: "bergo", warnaLatar: 215, foto: "" },
    { nama: "Khimar Syar'i 2 Layer", kategori: "Syar'i", harga: 149000, warna: ["Hitam", "Navy", "Maroon"], gambar: "khimar", warnaLatar: 140, foto: "" },
    { nama: "Inner Ciput Rajut", kategori: "Inner", harga: 25000, warna: ["Hitam", "Putih", "Nude"], gambar: "ciput", warnaLatar: 15, foto: "" },
    { nama: "Gelang Manik Handmade", kategori: "Aksesoris", harga: 45000, warna: ["Pastel", "Hitam putih", "Earth tone"], gambar: "gelang", warnaLatar: 330, foto: "" },
    { nama: "Gelang Rantai Berlapis Emas", kategori: "Aksesoris", harga: 65000, warna: ["Emas", "Perak"], gambar: "rantai", warnaLatar: 42, foto: "" },
    { nama: "Bros Hijab Mutiara", kategori: "Aksesoris", harga: 35000, warna: ["Putih", "Emas"], gambar: "bros", warnaLatar: 190, foto: "foto/bros-hijab-mutiara.jpg" },
    { nama: "Anting Mutiara Mini", kategori: "Aksesoris", harga: 39000, warna: ["Putih", "Krem"], gambar: "anting", warnaLatar: 20, foto: "" }
  ]
};
