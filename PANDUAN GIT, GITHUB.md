 
  # Panduan Push Project Node.js ke Github: Dokumentasi Todo List API

  ---

  ![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

  Panduan langkah demi langkah cara melakukan *push* proyek **Node.js** dari komputer lokal ke repository **GitHub** secara rapi.

  --- 

  ## 🗒️ Langkah-langkah Utama

  1. [Persiapan Proyek Lokal (Langkah Git)](#1-persiapan-proyek-lokal)

  2. [Koneksi ke Github & Hub](#3-koneksi-ke-github--push)

  3. [Commit ke Repository Lokal](#2-commit-ke-repository-lokal)

  ---


  ## 1. Persiapan Proyek Lokal

  ### Perbedaan Git & Github

  - Git = Merupakan *program* yang berjalan di komputermu untuk mencatat riwayat perubahan kode(*version control*).
  - GitHub = Merupakan *website/layanan online* tempat riwayat itu dapat disimpan dan dibagikan.

  Namun keduanya saling berkaitan karena Github membutuhkan Git agar dapat dipakai, meski begitu Git tetap dapat dipakai tanpa menggunakan GitHub sama sekali(riwayatnya cuma tersimpan di lokal).
  
  ### Hal-hal yang Harus Diperhatikan

  Sebelum mengupload kode ke GitHub, pastikan berkas sensitif seperti `.env` atau folder `node_module` tidak ikut terupload. 

  - Berkas seperti `.env` atau `.env.test` tidak boleh ikut ter-upload ke GitHub dikarenakan berisi `JWT_SECRET`, `MONGODB_URI`, dan   `EXTERNAL_API_KEY`. Kalau file ini ter-upload ke Github Public, siapa pun dapat melihat kredensialmu. 

  - Berkas seperti `node_module/` dikecualikan karena isinya bisa di-generate ulang kapan saja melalui `npm install` (membuang-buang tempat dan waktu upload jika menguploadnya). 


  ## 2. Koneksi ke Git & Github

  ### A. Membuat Akun GitHub

  Github adalah **layanan hosting untuk repository Git**, ia menyimpan riwayat perubahan kode project kamu secara online. Akun Github ini juga nantinya dipakai untuk membuat repository(folder project yang di-hosting online) tempat kode Todo List API disimpan.

  1. Buka github.com lewat browser.

  2. Klik tombol **Sign Up**.

  3. Masukkan alamat Gmail kamu, buat username, serta buat passwordnya. 

  4. Verifikasi email --- Github akan mengirim kode konfirmasi ke Gmail kamu, lalu masukkan kodenya di halaman pendaftaran.

  5. Setelah akun jadi, kamu akan diarahkan ke halaman utama(dashboard) GitHub.

  ### B. Pastikan Git Sudah Terinstall

  Buka terminal, lalu jalankan perintah dibawah ini:

  ```text
  git --version

  ```

  Jika muncul nomor versi(misalnya `git version 2.43.0`), berarti Git sudah siap dipakai. Kalau muncul pesan "command not found", download dan install Git dari git-scm.com terlebih dahulu, lalu ulangi perintah di atas untuk memastikan.

  ### C. Mengenalkan Diri ke Git

  Ini perlu diatur **satu kali saja** pada **Terminal / Git Bash** per komputer, agar Git dapat menyimpan perubahan kode yang kamu simpan(*commit*) akan mencatat nama dan email pembuatnya. Gunakan email yang **sama persis** dengan email yang kamu daftarkan di GitHub, jika sama GitHub akan otomatis mengaitkan setiap commit-mu dengan foto profil dan username Github-mu di halaman repository, kalau berbeda commit tetap tersimpan tapi tidak "dikenali" sebagai milikmu secara visual di GitHub.


  ```text
  git config --global user.name "Nama Kamu"
  git config --global user.email "email-kamu@gmail.com"

  ```
  
  ## 3. Commit ke Repository Lokal
  
  ### A. Buat File `.gitignore` (Pastikan Harus Sesuai / Benar)

  Buat file bernama `.gitignore` di akar (*root*) folder proyek kamu, lalu isi dengan baris berikut:

  ```text
  node_modules/
  .env
  .env.test

  ```

  ### B. Menyimpan Project Secara Lokal dengan Git

  Di root folder `todo-api`, lalu jalankan pada **terminal / git bash**:

  ```text
  git init
  git add .
  git commit -m "Initial commit: Todo List API boilerplate"

  ```

  Fungsi-fungsinya:
  
  - `git init`: Mengubah folder `todo-api` menjadi **repository Git**, Git mulai mencatat riwayat perubahan sejak perintah ini dijalankan. Ini membuat folder tersembunyi `.git/` di dalam project(ini "otak" penyimpanan riwayat Git, jangan dihapus).

  - `git add .`: Memasukkan **semua file yang berubah** di folder saat ini ke staging area, **kecuali** file/folder yang terdaftar di `.gitignore`. Inilah mengapa file `.gitignore` harus dipastikan dengan benar sebelum `git add`, supaya `node_modules/` dan `.env` tidak ikut ter-stage.

  - `git commit -m "pesan"`: Menyimpan permanen isi staging area sebagai satu titik riwayat. Pesan commit sebaiknya singkat tapi jelas menjelaskan apa yang berubah, kebiasaan menulis pesan commit yang baik ini akan sangat membantu ketika project sudah punya ratusan commit dan kamu perlu melacak kapan sebuah bug pertama kali muncul.

  ### C. Membuat Repository Baru di GitHub

  1. Di halaman utama GitHub, klik tombol **+** di pojok kanan atas, lalu pilih **New repository**.

  2. Isi **Repository name**, misalnya `todo-api`. 

  3. Pilih **Public**(bisa dilihat siapa saja) atau **Private**(hanya kamu dan yang diundang).

  4. **Jangan centang** opsi "Add a README file", atau "license" apa pun di halaman ini.

  5. Klik **Create repository**

  Mengapa pada langkah 4, kita tidak men-centang opsi "Add a README file" dan sejenisnya **dengan sengaja**? Karena kita sudah punya `README.md`, `.gitignore`, dan seluruh kode sungguhan di komputer lokal. Kalau opsi itu dicentang, GitHub akan membuat commit pertama secara otomatis di repository online, sehingga riwayat di GitHub dan riwayat di laptop kita jadi `tidak sinkron` sejak awal. Hal ini dapat menyebabkan konflik yang membingungkan buat pemula saat mencoba menghubungkan keduanya. Dengan membuat repository benar-benar kosong, kita bisa mengisi riwayatnya langsung dari commmit yang sudah kita buat di langkah sebelumnya, tanpa bentrok. 
  
  ### D. Menghubungkan Project Lokal ke GitHub

  Setelah repository kosong berhasil dibuat, GitHub akan menampilkan halaman berisi beberapa baris perintah. Salin perintah di bagian
   "...or push an existing repository from the command line", bentuknya seperti ini(ganti `username-kamu` dan `todo-api` sesuai punyamu):

   ```text
   git remote add origin https://github.com/username-kamu/todo-api.git
   git branch -M main
   git push -u origin main

   ```

   Fungsi-fungsinya:

   - `git remote add origin <url>`: Memberi tahu Git lokal: "repository online-nya ada di alamat ini, namai koneksinya `origin`"(`origin` adalah nama standar yang dipakai hampir semua orang untuk remote utama, meskipun sebenarnya bisa dinamai bebas).

   - `git branch -M main`: Memastikan nama *branch*(cabang riwayat) utama kita bernama `main`, sesuai standar yang dipakai GitHub saat ini. Satu *branch* itu seperti satu "jalur cerita" riwayat perubahan kode, untuk project sesederhana ini kita cukup memakai satu jalur cerita saja.

   - `git push -u origin main`: Perintah yang benar benar **mengunggah** seluruh commit dari komputer lokal ke repository GitHub. Flag `-u`(singkatan --set-upstream) menghubungkan branch lokal `main` dengan branch `main` di `origin` secara permanen, sehingga di kemudian hari kamu cukup mengetik `git push` saja(tanpa perlu menulis `origin main` lagi setiap kali).

  ### E. Kalau GitHub Meminta Login

  Saat menjalankan `git push` pertama kali, kemungkinan besar akan muncul jendela login GitHub di browser(untuk pengguna Git versi baru), tinggal login dengan akun GitHub yang sudah dibuat, lalu izinkan aksesnya. Proses push akan otomatis lanjut setelah login berhasil.

  Kalau yang muncul justru **kolom isian passsword di terminal**(bukan jendela browser), GitHub **tidak lagi menerima password akun biasa** untuk proses ini, sehingga kamu perlu membuat **Personal Access Token (PAT)** sebagai gantinya:

  1. Di GitHub, klik foto profil di pojok kanan atas → **Settings**

  2. Scroll ke bawah, klik **Developer settings**(paling bawah sidebar kiri).

  3. Klik **Personal access tokens → Tokens (classic) → Generate new token (classic)**.

  4. Beri nama token, centang scope `repo`, lalu klik **Generate token**.

  5. Salin token yang muncul(hanya ditampilkan satu kali!).

  6. Saat terminal minta password, tempelkan token ini sebagai gantinya(bukan password akun biasa).

  **Personal Access Token (PAT)**: Merupakan "password khusus" yang dibuat spesifik untuk mengakses GitHub lewat command line, terpisah dari password akun utamamu. Ini konsepnya mirip dengan `EXTERNAL_API_KEY` yang mana ia sama-sama string acak yang berfungsi sebagai "kunci akses" terpisah dari identitas login utama, sehingga kalau token ini bocor atau tidak dipakai lagi, kamu bisa mencabutnya tanpa perlu mengganti password akun GitHub-mu secara keseluruhan.
  
  ### F. Verifikasi di GitHub

  Buka kembali halaman repository di browser(`https://github.com/username-kamu/todo-api), refresh halamannya. 
  Kamu akan melihat:

  - Seluruh folder `src/`, `tests`, dan file-file lain sudah muncul di daftar file.

  - Isi `README.md` otomatis ditampilkan sebagai halaman utama repository.

  - Folder `node_modules/` dan file `.env` **tidak muncul** di daftar file, ini konfirmasi bahwa `gitignore` bekerja dengan benar.

  ### G. Alur Kerja Setelah Push Pertama
  
  ```text
  git add .
  git commit -m "Deskripsi singkat perubahan yang kamu buat"
  git push

  ```

  Perhatikan `git push` di sini tidak perlu lagi menuliskan `-u origin main`, itu hanya diperlukan sekali di push pertama, karena flag `-u` sudah "mengingat" hubungan antara branch lokal dan remote untuk push-push berikutnya. Biasakan menjalankan perintah ini setiap kali kamu menyelesaikan satu perubahan yang cukup berarti untuk disimpan, misalnya setelah menambah satu endpoint baru, memperbaiki satu bug, atau menyelesaikan satu artikel tutorial yang kamu praktikkan.


  ### 4. Perbandingan Sebelum dan Sesudah


  |             Aspek             |             Sebelum             |             Sesudah           |
  |-------------------------------|---------------------------------|-------------------------------|
  |                               |                                 |                               |
  | Lokasi penyimpanan kode       | Hanya di satu laptop            | Tersimpan online di GitHub,   | 
  |                               |                                 | bisa diakses dari mana saja   |
  |                               |                                 |                               |
  | Riwayat perubahan             | Tidak tercatat                  | Tercatat lewat commit history |
  |                               |                                 |                               | 
  | Berbagi project ke orang lain | Kirim file manual(zip, WA, dll) | Cukup bagikan link repository |
  |                               |                                 |                               |
  | Risiko kehilangan kode        | Tinggi(laptop rusak/hilang)     | Rendah, tersimpan aman di     |
  |                               |                                 | server GitHub                 |

  ### 5. Kesimpulan

  Materi ini mengajarkan cara mengelola serta mengamankan proyek pemrograman dengan lebih profesional. Melalui alur pembelajaran ini, kamu belajar menggunakan Git sebagai pencatat riwayat otomatis yang merekam setiap perubahan kode di komputer lokal. Selanjutnya, GitHub berperan sebagai wadah penyimpan online di mana kode yang sudah rapi dan aman dapat diunggah dari komputer lokal. Dengan menyimpan proyek di GitHub, kamu memiliki cadangan kode di Cloud, mempermudah kolaborasi dengan developer lain.