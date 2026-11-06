# Cara mengedit toko Afda Hijab (versi GitHub)

Toko ini terdiri dari tiga bagian:

- `index.html`  : tampilan toko. Tidak perlu diubah.
- `produk.js`   : daftar produk, nama toko, dan nomor WhatsApp. **Ini yang Anda edit.**
- `foto/`       : folder foto produk.

## Menambah atau mengubah produk
1. Buka repo Anda di github.com, klik file `produk.js`.
2. Klik ikon pensil (Edit this file) di kanan atas.
3. Salin satu baris produk, tempel di bawahnya, lalu ubah nama, kategori, harga, dan warnanya.
   Tiap baris produk diakhiri koma, kecuali baris yang paling akhir.
4. Klik **Commit changes**, lalu **Commit changes** lagi di jendela yang muncul.
5. Tunggu 1-2 menit, lalu muat ulang halaman toko.

## Menambah foto produk
1. Di repo, buka folder `foto`, klik **Add file > Upload files**, pilih foto, lalu **Commit changes**.
   Gunakan nama file sederhana tanpa spasi, misalnya `gelang-manik.jpg`. Ukuran foto sebaiknya di bawah 1 MB.
2. Di `produk.js`, isi bagian `foto` produk itu dengan `"foto/gelang-manik.jpg"`.
3. Commit, tunggu 1-2 menit, muat ulang.

## Mengganti nomor WhatsApp atau nama toko
Ubah `wa` dan `nama` di bagian atas `produk.js`. Nomor diawali 62 tanpa tanda + (contoh: `6283128405394`).

## Kategori
Kategori dibuat otomatis dari kolom `kategori`. Kalau Anda menulis kategori baru, tombol filternya muncul sendiri.
