/* =====================================================================
   config.js — SEMUA ISI WEBSITE ADA DI SINI. Cukup ubah teks di dalam tanda kutip.
   Jangan hapus tanda koma (,) dan tanda kutip (" ") di ujung baris.
   Foto: nomor f = file di folder photos/ (f:6 → photos/6.jpg).
   ===================================================================== */
const CFG={
  pasangan:"Wahidha",                 // panggilan di judul & sapaan
  panjang:"Wahidha Khoizullisa",      // nama lengkap (dipakai di surat)
  dari:"Sattviko Wahyu Ramdhani",     // namamu
  mulai:"2017-10-17",                 // tanggal jadian (TAHUN-BULAN-TANGGAL)
  umur:"23",                          // umur baru; kosongkan "" jika tak ingin
  ultah:"2026-11-17T00:00:00",        // hadiah terbuka mulai waktu ini (jam perangkat)
  intro:"Dari dulu sampai hari ini, kamu selalu ada. Selamat ulang tahun yang ke-23, Wahidha, cintaku.",

  /* 1. KUNCI RAHASIA — pertanyaan yang hanya kalian berdua tahu */
  kunci:{
    aktif:true,                       // false = tanpa kunci
    tanya:"Tanggal berapa aku mulai mendekatimu? (tanggal-bulan-tahun)",
    jawab:["17 Oktober 2017","17-10-2017","17/10/2017","17 10 2017","171017"],  // semua jawaban yang diterima
    petunjuk:"Kita masih memakai seragam Dewan Penggalang saat itu ♥"
  },

  /* 5. LINIMASA PER TAHUN 2017–2026 (f boleh dikosongkan: f:0) */
  tahun:[
    {y:2017,j:"Awal Cerita",t:"17 Oktober 2017, waktu kita sekelas dan satu organisasi aku mlai melirikmu dan mencoba mendekat",f:6},
    {y:2018,j:"Kamu Mulai Respon",t:"Pada tahun ini kamu sudah mulai meresponku dan menjawab semua pesan-pesanku,ini adalah langkah awalku mendekatimu.",f:0},
    {y:2019,j:"Masa Terakhir Bersekolah Bersama",t:"Ini adalah tahun dimana kita mulai akan berpisah,dimasa ini juga kita juga ragu mau lanjut atau tidak.",f:0},
    {y:2020,j:"Di Lingkungan Baru Masing-Masing",t:"Pada masa ini kita mulai menjalani pendidikan yang terpisah dan kita sudah mulai jarang bertemu.",f:0},
    {y:2021,j:"Masa SMA",t:"Ganti seragam, ganti mimpi, tapi hatiku tidak pernah ganti tujuan.",f:0},
    {y:2022,j:"Kelulusan dan Pekerjaan",t:"Setelah kita lulus,jarak semakin jauh hati kita mulai runtuh.",f:0},
    {y:2023,j:"Tahun Terberat Bagi Kita",t:"Pada tahun ini kita di dalam momen-momen krusial, tapi hatiku tetap memilih kamu",f:7},
    {y:2024,j:"Perjuangan",t:"Tugas, praktikum, dan lelah. Doa dan semangatmu jadi tenagaku.",f:0},
    {y:2025,j:"Hampir di Garis Akhir",t:"Menuju kelulusan, kamu selalu percaya aku bisa, bahkan saat aku ragu.",f:0},
    {y:2026,j:"Sembilan Tahun",t:"Aku lulus, dan kamu berdiri di sampingku. Terima kasih sudah setia sampai hari ini.",f:3}
  ],

  /* GALERI KENANGAN — taruh foto di photos/galeri/ dengan nama 1.jpg, 2.jpg ... 50.jpg
     Nomor yang tidak ada fotonya otomatis dilewati. */
  galeri:{
    jumlah:50,                 // batas nomor foto di photos/galeri/
    tampil:12,                 // jumlah foto yang tampil sebelum tombol "Lihat Lebih Banyak"
    utama:[1,2,3,4,5,6,7,8,9], // foto bawaan di photos/ (kosongkan [] jika tidak ingin ditampilkan)
    keterangan:{               // teks kecil di bawah foto (opsional), contoh:
      // 1:"Pertama kali kita foto bersama",
      // 12:"Liburan favoritku"
    }
  },

  cerita:[
    {f:6,j:"17 Oktober 2017",t:"Semuanya dimulai saat kita masih SMP. Dari anak sekolah yang malu-malu, aku tidak pernah menyangka kamu akan jadi orang paling berarti dalam hidupku."},
    {f:7,j:"Tumbuh Bersama",t:"Kita melewati seragam sekolah, ujian, dan mimpi-mimpi yang dulu terasa begitu jauh. Kamu selalu ada di setiap langkahnya."},
    {f:3,j:"Hari Kelulusanku",t:"Kamu berdiri di sampingku di hari kelulusan, setia menemani dari awal sampai akhir perjuangan kuliahku. Terima kasih, Wahidha."},
    {f:9,j:"Petualangan Kita",t:"Dari tempat-tempat baru sampai tawa-tawa kecil yang tak terduga, bersamamu semuanya jadi kenangan yang hangat."},
    {f:8,j:"Selamanya?",t:"Sembilan tahun berlalu, dan aku masih memilihmu. Semoga kita selalu bersama, selamanya."}
  ],

  alasan:[
    ["Baik Hatimu","Kebaikanmu tulus dan tidak pernah dibuat-buat. Itu yang membuatku jatuh cinta setiap hari."],
    ["Cantikmu","Bukan hanya wajahmu, tapi caramu memperlakukan orang lain membuatmu cantik sepenuhnya."],
    ["Manismu","Senyum dan tingkahmu yang manis selalu bisa menenangkan hari-hariku."],
    ["Penurutmu","Kamu mau mendengarkan dan mengerti. Terima kasih sudah selalu menghargaiku."],
    ["Ramahmu","Kamu hangat kepada siapa saja. Aku bangga memilikimu di sisiku."],
    ["Setiamu","Kamu menemaniku sejak SMP sampai aku lulus kuliah. Kesetiaanmu adalah hadiah terbesarku."],
    ["Sabarmu","Sembilan tahun bukan waktu singkat, dan kamu bertahan dengan sabar dan cinta."],
    ["Kamu, Apa Adanya","Masih banyak lagi alasan yang tidak cukup kutulis di sini. Intinya, aku mencintaimu."]
  ],

  /* 3. KUIS — a = nomor jawaban benar (0 = pilihan pertama) */
  kuis:[
    {q:"Sejak kapan aku mulai menyukaimu?",o:["17 Oktober 2017","17 Oktober 2016","7 Oktober 2017","1 November 2017"],a:0,ok:"Betul! Tanggal itu tidak akan pernah kulupa ♥",no:"Hampir! Tanggalnya 17 Oktober 2017 ♥"},
    {q:"Kita mulai bersama saat masih duduk di bangku…",o:["SD","SMP","SMA","Kuliah"],a:1,ok:"Betul, anak SMP yang malu-malu ♥",no:"Bukan itu, kita mulai sejak SMP ♥"},
    {q:"Di kota mana Wahidha lahir?",o:["Madiun","Ngawi","Magetan","Ponorogo"],a:2,ok:"Magetan, kota kelahiran perempuan terbaikku ♥",no:"Kota kelahiranmu Magetan ♥"},
    {q:"Kapan ulang tahun Wahidha?",o:["23 November","23 Oktober","3 November","13 November"],a:0,ok:"Tepat! Tanggal paling istimewa di tahun ini ♥",no:"Ulang tahunmu 23 November ♥"},
    {q:"Siapa yang setia menemaniku sampai lulus kuliah?",o:["Siapa lagi kalau bukan kamu ♥","Tukang bakso","Kucing tetangga","Rahasia"],a:0,ok:"Iya, kamu. Terima kasih untuk semuanya ♥",no:"Jawabannya kamu, Sayang ♥"}
  ],

  /* 4. KUPON GOSOK — tambah/ubah sesuka hati */
  kupon:[
    "1x Traktir makan di tempat favoritmu",
    "1x Pelukan lama tanpa batas waktu",
    "1x Kamu yang pilih tempat jalan",
    "1x Aku dengarkan ceritamu tanpa menyela"
  ],

  /* 6. JANJI-JANJIKU */
  janji:[
    "Aku akan terus jujur dan setia kepadamu.",
    "Aku akan belajar jadi lebih dewasa dan bertanggung jawab.",
    "Aku akan mendukung setiap mimpimu, sebesar apa pun itu.",
    "Aku akan mendengarkanmu, di saat senang maupun sedih.",
    "Aku akan menjaga doa dan hubungan kita.",
    "Aku akan berusaha mewujudkan masa depan yang kita impikan, bersamamu."
  ],

  surat:[
    "Selamat ulang tahun yang ke-23, Wahidha Khoizullisa, perempuan terbaik dalam hidupku.",
    "Sejak 17 Oktober 2017 kita sudah berjalan bersama, dari seragam SMP sampai hari aku lulus kuliah. Kamu selalu setia menemaniku, di saat aku semangat maupun di saat aku lelah. Aku tidak akan pernah lupa itu.",
    "Kamu baik, cantik, manis, penurut, ramah, dan masih banyak lagi hal indah dalam dirimu yang tidak bisa kutulis semuanya. Terima kasih sudah menjadi rumah untukku.",
    "Semoga di usia yang baru ini, Allah mudahkan setiap langkahmu, kabulkan setiap doamu, dan semoga kita selalu bersama selamanya. Aku mencintaimu."
  ],

  /* 7. PESAN SUARA / VIDEO — taruh file di folder media/, lalu isi namanya.
     Kosongkan "" jika tidak dipakai. Contoh: suara:"media/pesan.mp3" */
  media:{
    suara:"",  judulSuara:"Pesan Suara Untukmu",
    video:"",  judulVideo:"Video Untukmu",  poster:""
  }
};
