# Website Ulang Tahun ♥

## Mengubah isi
Semua teks ada di **`config.js`** (nama, tanggal, kunci rahasia, linimasa 2017–2026, kisah, alasan, kuis, kupon, janji, surat). Cukup ubah tulisan di dalam tanda kutip. Tidak perlu menyentuh `index.html`.

## Foto
Ganti/tambah file di folder `photos/` (1.jpg … 9.jpg). Nomor `f:` di `config.js` menunjuk ke nama file. Untuk foto baru, beri nama 10.jpg, 11.jpg, dst., lalu pakai `f:10`. Galeri otomatis hanya menampilkan 1–9, jadi ubah daftar `[1,2,...,9]` di `index.html` bila perlu.

## Galeri Kenangan (hingga 50 foto)
1. Kecilkan & beri nomor otomatis: `python tools/kompres_foto.py "folder-foto-asli"` (butuh `pip install pillow`). Hasilnya masuk ke `photos/galeri/1.jpg … 50.jpg`, diurutkan berdasarkan tanggal foto.
2. Atau manual: taruh foto di `photos/galeri/` dengan nama `1.jpg`, `2.jpg`, … `50.jpg` (jpg/jpeg/png/webp). Nomor yang kosong dilewati otomatis.
3. Teks kecil di foto & jumlah foto awal diatur di bagian `galeri` pada `config.js`.

## Musik
Taruh `music.mp3` di folder utama. Tanpa file ini, dipakai melodi piano bawaan.

## Pesan suara / video
Taruh file di folder `media/` (mis. `media/pesan.mp3`, `media/video.mp4`), lalu isi bagian `media` di `config.js`. Gunakan MP4 (H.264) di bawah 25 MB agar mudah diunggah.

## Kunci rahasia & hitung mundur
- `kunci.tanya` dan `kunci.jawab`: pertanyaan dan semua jawaban yang diterima.
- `ultah`: hadiah terbuka otomatis mulai waktu ini (mengikuti jam HP/laptop).
- Mode tes: tambahkan `?preview` di akhir alamat (mis. `index.html?preview`) untuk melewati hitung mundur. Jangan bagikan alamat tersebut.
- Catatan: kunci ini hanya pengaman ringan (jawaban ada di kode), cocok untuk kejutan, bukan untuk rahasia.

## Deploy ke GitHub Pages
1. Buat repository baru (disarankan Private jika memakai lagu berhak cipta; Pages privat butuh akun berbayar, jika tidak, pakai Public).
2. Upload semua isi folder ini, termasuk `config.js`, `photos/`, `media/`, `music.mp3`.
3. Settings → Pages → Deploy from a branch → `main` / root → Save.
4. Situs aktif di `https://USERNAME.github.io/NAMA-REPO/`. Buat QR code dari link itu untuk kartu ucapan.
