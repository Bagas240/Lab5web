# Praktikum 5: JavaScript 

## Identitas Praktikum
Nama : Bagas Arya Ramadhan 
Nim : 312510328
Kelas : I251D
Fakultas : Teknik
Jurusan : Informatika


## Latihan 1 Menampilkan Output

### A. Tujuan

Mengenali dua cara menampilkan output menggunakan JavaScript, yaitu melalui elemen HTML dan melalui Console browser.

### B. Kode Program

Kode berikut merupakan kode latihan yang tercantum dalam modul:

```javascript
// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

![image alt]()

### C. Langkah Kerja

1. Buka file `index.html` dan pastikan terdapat elemen dengan `id="pesan"`.
2. Buka file `script.js`.
3. Masukkan kode program sesuai contoh modul.
4. Simpan perubahan pada kedua file.
5. Jalankan `index.html` melalui browser.
6. Periksa apakah teks pada halaman berubah menjadi `Hello World`.
7. Buka Developer Tools dengan menekan `F12`.
8. Pilih tab **Console** dan periksa apakah pesan `Hello World` muncul.
9. Catat perbedaan keluaran pada halaman web dan Console.

### D. Penjelasan Kode

**1. `document.getElementById("pesan")`**

Digunakan untuk memilih elemen HTML yang memiliki atribut `id="pesan"`. JavaScript dapat mengakses elemen tersebut karena ID menjadi identitas unik bagi elemen yang dituju.

**2. `.textContent = "Hello World"`**

Properti `textContent` digunakan untuk mengatur teks yang terdapat di dalam elemen HTML. Pada latihan ini, teks awal pada elemen `pesan` diganti menjadi `Hello World`.

**3. `console.log("Hello World")`**

Digunakan untuk menampilkan teks `Hello World` pada Console browser. Keluaran ini berguna untuk memeriksa jalannya program tanpa harus menampilkan pesan pada halaman web.

### E. Hasil Pengujian

Program menghasilkan dua keluaran:

- **Pada halaman web:** teks elemen `pesan` berubah menjadi `Hello World`.
- **Pada Console:** pesan `Hello World` ditampilkan melalui `console.log()`.

Perbedaan utamanya adalah `textContent` menampilkan teks pada halaman web, sedangkan `console.log()` menampilkan informasi pada Console browser.

### F. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20104732.png?raw=true)

---

## Latihan 2 Alert dan Prompt

### A. Tujuan

Memahami penggunaan `prompt()` untuk menerima masukan pengguna, `alert()` untuk menampilkan pesan, serta percabangan `if–else` untuk memeriksa apakah nama telah diisi.

### B. Kode Program

```javascript
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}
```
![image alt]()

### C. Langkah Kerja

1. Buka file `script.js`.
2. Masukkan kode latihan sesuai contoh modul.
3. Simpan perubahan dan jalankan halaman web.
4. Ketika dialog input muncul, masukkan nama, misalnya `Bagas`.
5. Perhatikan pesan sapaan yang ditampilkan oleh `alert()`.
6. Periksa apakah teks pada elemen `pesan` berubah menjadi sapaan.
7. Jalankan kembali program dan tekan tombol **Cancel**.
8. Jalankan sekali lagi, lalu biarkan kolom nama kosong dan tekan **OK**.
9. Catat perilaku program pada setiap kondisi.

### D. Penjelasan Kode

**1. `const namaPengguna = prompt(...)`**

Fungsi `prompt()` menampilkan dialog yang meminta pengguna memasukkan nama. Hasil input disimpan dalam variabel `namaPengguna`.

Kata kunci `const` digunakan karena variabel tersebut tidak perlu diberi nilai baru melalui penugasan ulang.

**2. `namaPengguna && namaPengguna.trim() !== ""`**

Kondisi ini memeriksa apakah input memiliki nilai dan bukan hanya berisi spasi.

- `namaPengguna` memeriksa apakah nilai input tersedia.
- `trim()` menghapus spasi pada awal dan akhir teks.
- `!== ""` memeriksa bahwa hasilnya bukan string kosong.
- `&&` berarti kedua kondisi harus terpenuhi.

**3. `alert("Halo, " + namaPengguna + "!")`**

Menampilkan sapaan sesuai nama yang dimasukkan pengguna. Operator `+` digunakan untuk menggabungkan teks dengan nilai variabel.

**4. `textContent`**

Mengubah teks elemen HTML menjadi `Selamat datang, [nama].`.

**5. `else`**

Dijalankan apabila nama tidak tersedia atau input hanya berisi spasi. Program kemudian menampilkan pesan `Nama belum diisi.`.

### E. Hasil Pengujian

| Skenario | Hasil yang diharapkan |
|---|---|
| Memasukkan nama `Bagas` | Muncul `Halo, Bagas!` dan teks halaman diperbarui |
| Menekan Cancel | Muncul `Nama belum diisi.` |
| Membiarkan input kosong | Muncul `Nama belum diisi.` |
| Memasukkan spasi saja | Muncul `Nama belum diisi.` |

### F. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20104822.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20104834.png?raw=true)
![image alt]()
![image alt]()
---

## Latihan 3 Function dan Operasi Aritmetika

### A. Tujuan

Memahami pembuatan function dengan parameter serta penggunaan operator aritmetika untuk melakukan penjumlahan, pengurangan, perkalian, pembagian, dan perhitungan sisa bagi.

### B. Kode Program

```javascript
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log(
    "Pembagian:",
    b !== 0 ? a / b : "Tidak dapat dibagi nol"
  );
  console.log("Modulus:", a % b);
}

operasiDasar(9, 4);
```
![image alt]()

### C. Langkah Kerja

1. Buka file `script.js`.
2. Buat function bernama `operasiDasar` dengan parameter `a` dan `b`.
3. Tambahkan perintah `console.log()` untuk setiap operasi aritmetika.
4. Gunakan kondisi untuk memeriksa apakah nilai pembagi tidak sama dengan nol.
5. Panggil function menggunakan `operasiDasar(9, 4)`.
6. Simpan file dan jalankan halaman.
7. Buka tab **Console** pada browser.
8. Amati hasil setiap operasi yang ditampilkan.

### D. Penjelasan Kode

**1. `function operasiDasar(a, b)`**

Mendefinisikan function bernama `operasiDasar`. Parameter `a` dan `b` digunakan untuk menerima dua nilai yang akan dihitung.

**2. Operator aritmetika**

| Operator | Kegunaan | Contoh |
|---|---|---|
| `+` | Penjumlahan | `9 + 4` |
| `-` | Pengurangan | `9 - 4` |
| `*` | Perkalian | `9 * 4` |
| `/` | Pembagian | `9 / 4` |
| `%` | Sisa bagi | `9 % 4` |

**3. `console.log()`**

Digunakan untuk menampilkan nama operasi dan hasil perhitungannya pada Console browser.

**4. `b !== 0 ? a / b : "Tidak dapat dibagi nol"`**

Ini merupakan operator ternary yang memeriksa nilai `b`.

- Jika `b !== 0` bernilai benar, hasil pembagian `a / b` ditampilkan.
- Jika `b` bernilai nol, program menampilkan teks `Tidak dapat dibagi nol`.

### E. Hasil Pengujian

Karena function dipanggil menggunakan `operasiDasar(9, 4)`, hasilnya adalah:

| Operasi | Perhitungan | Hasil |
|---|---|---:|
| Penjumlahan | `9 + 4` | 13 |
| Pengurangan | `9 - 4` | 5 |
| Perkalian | `9 * 4` | 36 |
| Pembagian | `9 / 4` | 2.25 |
| Modulus | `9 % 4` | 1 |

Hasil ditampilkan pada Console browser, bukan sebagai teks utama pada halaman web.

### F. Screenshot

![image alt]()
![image alt]()
![image alt]()
![image alt]()
---

## Latihan 4 Seleksi Kondisi `if–else`

### A. Tujuan

Memahami penggunaan percabangan `if–else` untuk menentukan status kelulusan berdasarkan nilai yang dimasukkan pengguna, sekaligus mempelajari konversi tipe data dan validasi input.

### B. Kode Program

```javascript
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
```

### C. Langkah Kerja

1. Buat program yang meminta pengguna memasukkan nilai melalui `prompt()`.
2. Simpan masukan ke dalam variabel `inputNilai`.
3. Konversikan masukan menjadi angka menggunakan `Number()`.
4. Periksa apakah pengguna membatalkan input.
5. Periksa apakah input kosong, bukan angka, kurang dari 0, atau lebih dari 100.
6. Jika input tidak valid, tampilkan pesan `Input nilai tidak valid.`.
7. Jika nilai valid dan minimal 60, tampilkan `Lulus`.
8. Jika nilai valid tetapi kurang dari 60, tampilkan `Belum lulus`.
9. Uji program menggunakan beberapa nilai yang berbeda.

### D. Penjelasan Kode

**1. `prompt("Masukkan nilai (0–100):")`**

Meminta pengguna memasukkan nilai dalam rentang 0 sampai 100. Hasil `prompt()` pada awalnya berupa string, bukan angka.

**2. `Number(inputNilai)`**

Mengonversi nilai input menjadi tipe data angka agar dapat digunakan dalam perbandingan numerik.

**3. `inputNilai === null`**

Memeriksa apakah pengguna menekan tombol Cancel. Pada kondisi ini, `prompt()` menghasilkan `null`.

**4. `inputNilai.trim() === ""`**

Memeriksa apakah input kosong atau hanya berisi spasi.

**5. `Number.isNaN(nilaiMahasiswa)`**

Memeriksa apakah hasil konversi merupakan nilai `NaN` (*Not a Number*).

**6. Pemeriksaan rentang nilai**

Kondisi `nilaiMahasiswa < 0` dan `nilaiMahasiswa > 100` digunakan untuk menolak nilai yang berada di luar rentang yang diperbolehkan.

**7. Percabangan kelulusan**

- `nilaiMahasiswa >= 60` menghasilkan status `Lulus`.
- Nilai valid yang kurang dari 60 menghasilkan status `Belum lulus`.

### E. Hasil Pengujian

| Input | Hasil yang diharapkan |
|---|---|
| `85` | Lulus |
| `60` | Lulus |
| `59` | Belum lulus |
| `0` | Belum lulus |
| `101` | Input nilai tidak valid. |
| `-1` | Input nilai tidak valid. |
| Input kosong | Input nilai tidak valid. |
| Teks bukan angka | Input nilai tidak valid. |
| Cancel | Input nilai tidak valid. |

### F. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20104928.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20104940.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105009.png?raw=true)

---

## Latihan 5 Seleksi Kondisi `switch`

### A. Tujuan

Memahami penggunaan `switch` untuk memilih keluaran berdasarkan angka yang dimasukkan pengguna.

### B. Kode Program

```javascript
const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}
```

### C. Langkah Kerja

1. Buat program yang meminta pengguna memasukkan angka 1 sampai 5.
2. Simpan hasil `prompt()` ke dalam variabel `inputPilihan`.
3. Gunakan `switch` untuk memeriksa nilai variabel tersebut.
4. Buat `case` untuk setiap pilihan dari `"1"` sampai `"5"`.
5. Tampilkan pesan menggunakan `alert()` sesuai pilihan.
6. Tambahkan `break` pada setiap kasus agar program tidak berlanjut ke kasus berikutnya.
7. Tambahkan `default` untuk menangani pilihan yang tidak tersedia.
8. Jalankan program dan uji setiap pilihan.

### D. Penjelasan Kode

**1. `switch (inputPilihan)`**

Memeriksa nilai `inputPilihan` untuk menentukan kasus yang akan dijalankan.

**2. `case "1"` sampai `case "5"`**

Setiap `case` menentukan keluaran berdasarkan input. Karena nilai dari `prompt()` berupa string, kasus pada contoh menggunakan `"1"`, `"2"`, dan seterusnya.

**3. `alert()`**

Menampilkan pesan sesuai pilihan pengguna.

**4. `break`**

Mengakhiri eksekusi pada kasus yang sedang berjalan sehingga tidak berlanjut ke kasus berikutnya.

**5. `default`**

Dijalankan ketika input tidak cocok dengan kasus yang tersedia.

### E. Hasil Pengujian

| Input | Keluaran |
|---|---|
| `1` | Bilangan satu |
| `2` | Bilangan dua |
| `3` | Bilangan tiga |
| `4` | Bilangan empat |
| `5` | Bilangan lima |
| `6` | Pilihan tidak tersedia |
| `abc` | Pilihan tidak tersedia |

Perlu diperhatikan bahwa input seperti `"01"` juga tidak cocok dengan `case "1"` karena nilai string-nya berbeda.

### F. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105029.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105043.png?raw=true)

---

## Latihan 6 Form Bilangan Genap atau Ganjil

### A. Tujuan

Mempraktikkan penggunaan form HTML, pengambilan nilai input menggunakan DOM, validasi bilangan bulat, dan penentuan bilangan genap atau ganjil.

### B. Kode HTML

Tambahkan elemen berikut pada bagian `<body>` di `index.html`.

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">

<button type="button" onclick="cekBilangan()">Periksa</button>

<p id="hasilBilangan"></p>
```

### C. Kode JavaScript

Tambahkan fungsi berikut pada `script.js`.

```javascript
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
```

### D. Langkah Kerja

1. Buka file `index.html`.
2. Tambahkan label untuk menjelaskan bahwa pengguna harus memasukkan bilangan bulat.
3. Tambahkan input dengan `id="bilangan"` dan `step="1"`.
4. Tambahkan tombol `Periksa` yang menjalankan fungsi `cekBilangan()`.
5. Tambahkan elemen paragraf dengan `id="hasilBilangan"` untuk menampilkan hasil.
6. Buka file `script.js` dan tambahkan fungsi `cekBilangan()`.
7. Simpan kedua file dan jalankan halaman melalui browser.
8. Masukkan bilangan, kemudian tekan tombol `Periksa`.
9. Uji angka positif, angka negatif, nol, bilangan desimal, dan input kosong sesuai instruksi modul.

### E. Penjelasan Kode

**1. Elemen input**

```html
<input type="number" id="bilangan" step="1">
```

- `type="number"` menyediakan input untuk nilai numerik.
- `id="bilangan"` memungkinkan JavaScript mengambil elemen tersebut.
- `step="1"` menentukan interval nilai input dalam kelipatan satu.

**2. Tombol pemeriksaan**

```html
<button type="button" onclick="cekBilangan()">Periksa</button>
```

Ketika tombol ditekan, atribut `onclick` memanggil fungsi `cekBilangan()`.

**3. Mengambil input**

```javascript
const input = document.getElementById("bilangan").value;
```

Mengambil nilai dari input dengan ID `bilangan`. Nilai `.value` pada elemen input dibaca sebagai string.

**4. Konversi angka**

```javascript
const angka = Number(input);
```

Mengubah input menjadi angka agar dapat digunakan dalam perhitungan.

**5. Mengambil elemen hasil**

```javascript
const hasil = document.getElementById("hasilBilangan");
```

Memilih elemen yang akan digunakan untuk menampilkan hasil pemeriksaan.

**6. Validasi input**

```javascript
if (input.trim() === "" || !Number.isInteger(angka))
```

Memeriksa apakah input kosong atau bukan bilangan bulat. Jika kondisi terpenuhi, program menampilkan pesan validasi.

**7. Memeriksa bilangan genap**

```javascript
angka % 2 === 0
```

Operator `%` menghitung sisa pembagian. Jika bilangan dibagi 2 dan sisanya 0, bilangan tersebut termasuk genap.

**8. Menampilkan hasil**

Properti `hasil.textContent` digunakan untuk menampilkan pesan `Bilangan genap`, `Bilangan ganjil`, atau pesan validasi pada halaman web.

### F. Hasil Pengujian

| Input | Hasil yang diharapkan |
|---:|---|
| `2` | Bilangan genap |
| `7` | Bilangan ganjil |
| `-4` | Bilangan genap |
| `-3` | Bilangan ganjil |
| `0` | Bilangan genap |
| `2.5` | Masukkan bilangan bulat yang valid. |
| Input kosong | Masukkan bilangan bulat yang valid. |

### G. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105101.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105143.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105154.png?raw=true)

## Latihan 7 Mengubah Warna Halaman

### A. Tujuan

Memahami manipulasi gaya elemen HTML menggunakan JavaScript dan penggunaan parameter function agar satu fungsi dapat digunakan untuk beberapa pilihan warna.

### B. Kode JavaScript

```javascript
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
```

### C. Kode HTML

Tambahkan tiga tombol berikut pada bagian `<body>` di `index.html`.

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">
  Latar Hijau
</button>

<button type="button" onclick="ubahWarnaLatar('white')">
  Latar Putih
</button>

<button type="button" onclick="ubahWarnaLatar('lightyellow')">
  Latar Kuning
</button>
```

### D. Langkah Kerja

1. Buat fungsi `ubahWarnaLatar(warna)` di `script.js`.
2. Gunakan `document.body.style.backgroundColor` untuk mengatur warna latar halaman.
3. Tambahkan tiga tombol pada `index.html`.
4. Hubungkan masing-masing tombol dengan fungsi `ubahWarnaLatar()`.
5. Berikan parameter `lightgreen`, `white`, dan `lightyellow` sesuai contoh modul.
6. Simpan file dan jalankan halaman.
7. Tekan setiap tombol dan amati perubahan warna latar belakang.

### E. Penjelasan Kode

**1. `function ubahWarnaLatar(warna)`**

Mendefinisikan function yang menerima parameter `warna`. Parameter tersebut menentukan warna yang akan diterapkan pada halaman.

**2. `document.body`**

Digunakan untuk mengakses elemen `<body>` pada dokumen HTML.

**3. `style.backgroundColor = warna`**

Mengubah warna latar belakang halaman sesuai nilai parameter yang diterima fungsi.

**4. Atribut `onclick`**

Menjalankan fungsi ketika pengguna menekan tombol. Setiap tombol mengirimkan nilai warna yang berbeda ke fungsi yang sama.

Dengan menggunakan parameter, program tidak perlu membuat tiga fungsi terpisah untuk mengatur tiga warna.

### F. Hasil Pengujian

| Tombol | Parameter | Hasil |
|---|---|---|
| Latar Hijau | `lightgreen` | Latar belakang menjadi hijau muda |
| Latar Putih | `white` | Latar belakang menjadi putih |
| Latar Kuning | `lightyellow` | Latar belakang menjadi kuning muda |

### G. Screenshot
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105228.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105250.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105321.png?raw=true)

---

## Latihan 8 DOM dan Checkbox Menu Makanan

### A. Tujuan

Memahami penggunaan DOM untuk memilih elemen HTML, penggunaan checkbox sebagai input pilihan, serta pemanfaatan event listener untuk menghitung total harga secara otomatis.

### B. Kode HTML

Tambahkan daftar menu berikut pada bagian `<body>` di `index.html`.

```html
<h3>Daftar Menu Makanan</h3>

<label>
  <input type="checkbox" class="menu" value="5000">
  Ayam Goreng — Rp5.000
</label>
<br>

<label>
  <input type="checkbox" class="menu" value="500">
  Tempe — Rp500
</label>
<br>

<label>
  <input type="checkbox" class="menu" value="2500">
  Telur Dadar — Rp2.500
</label>
<br>

<p>Total: Rp<span id="total">0</span></p>
```

### C. Kode JavaScript

Tambahkan kode berikut pada `script.js`.

```javascript
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;

  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });

  document.getElementById("total").textContent =
    total.toLocaleString("id-ID");
}
```

### D. Langkah Kerja

1. Buka file `index.html`.
2. Tambahkan judul `Daftar Menu Makanan`.
3. Tambahkan checkbox untuk Ayam Goreng, Tempe, dan Telur Dadar.
4. Pastikan setiap checkbox memiliki class `menu` dan nilai harga sesuai contoh.
5. Tambahkan elemen `<span id="total">0</span>` untuk menampilkan total harga awal.
6. Buka file `script.js`.
7. Gunakan `document.querySelectorAll(".menu")` untuk mengambil semua checkbox menu.
8. Tambahkan event listener `change` agar fungsi `hitungTotal()` dijalankan ketika pilihan berubah.
9. Buat fungsi `hitungTotal()` untuk menjumlahkan harga dari semua menu yang dicentang.
10. Tampilkan hasil perhitungan pada elemen dengan ID `total`.
11. Simpan file dan jalankan halaman web.
12. Centang dan lepaskan pilihan menu secara bergantian untuk memeriksa perubahan total harga.

### E. Penjelasan Kode

**1. `document.querySelectorAll(".menu")`**

Memilih seluruh elemen HTML yang memiliki class `menu`. Hasilnya disimpan dalam variabel `daftarMenu`.

**2. `forEach()`**

Digunakan untuk menjalankan perintah pada setiap elemen checkbox dalam `daftarMenu`.

**3. `addEventListener("change", hitungTotal)`**

Memasang event listener pada setiap checkbox. Ketika pengguna mencentang atau membatalkan pilihan, fungsi `hitungTotal()` dijalankan.

**4. `let total = 0`**

Membuat variabel total dengan nilai awal nol. Kata kunci `let` digunakan karena nilai total akan diperbarui selama proses penjumlahan.

**5. `item.checked`**

Memeriksa apakah checkbox tertentu sedang dicentang. Hanya menu yang dipilih yang akan ditambahkan ke total harga.

**6. `Number(item.value)`**

Mengonversi nilai harga pada checkbox menjadi angka agar dapat dijumlahkan.

**7. `document.getElementById("total")`**

Memilih elemen dengan ID `total`, yaitu elemen yang menampilkan hasil perhitungan.

**8. `toLocaleString("id-ID")`**

Memformat angka menggunakan format lokal Indonesia sehingga hasil penjumlahan lebih mudah dibaca.

**9. Penempatan script**

Pastikan elemen HTML sudah tersedia sebelum JavaScript dijalankan. Sesuai catatan modul, menempatkan `<script src="script.js"></script>` menjelang akhir elemen `<body>` merupakan pilihan sederhana.

### F. Hasil Pengujian

Harga menu sesuai dengan kode modul:

| Menu | Harga |
|---|---:|
| Ayam Goreng | Rp5.000 |
| Tempe | Rp500 |
| Telur Dadar | Rp2.500 |

Contoh hasil perhitungan:

| Pilihan | Total |
|---|---:|
| Tidak ada menu yang dipilih | Rp0 |
| Ayam Goreng | Rp5.000 |
| Tempe | Rp500 |
| Ayam Goreng dan Tempe | Rp5.500 |
| Ayam Goreng dan Telur Dadar | Rp7.500 |
| Semua menu | Rp8.000 |

Total harga diperbarui ketika checkbox dicentang atau dilepas. Perhitungan hanya memasukkan harga dari menu yang sedang dipilih.

### G. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105506.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105513.png?raw=true)


---

# 5. Mini Project Kalkulator Nilai Mahasiswa

## A. Tujuan

Mengembangkan program kalkulator nilai mahasiswa yang menerima nilai tugas, UTS, dan UAS, menghitung nilai akhir berdasarkan bobot, menentukan predikat, serta menampilkan status kelulusan.

Mini Project ini menggabungkan konsep function, parameter, `return`, operasi aritmetika, percabangan, dan output pada Console.

## B. Kode Program Awal

Kode berikut mengikuti contoh Mini Project pada modul.

```javascript
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

const tugas = 85;
const uts = 78;
const uas = 88;

const akhir = hitungNilaiAkhir(tugas, uts, uas);

console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log(
  "Status:",
  akhir >= 60 ? "Lulus" : "Belum lulus"
);
```

## C. Langkah Kerja

1. Buat function `hitungNilaiAkhir(tugas, uts, uas)`.
2. Hitung kontribusi nilai tugas sebesar 30%, UTS sebesar 30%, dan UAS sebesar 40%.
3. Gunakan `return` untuk mengembalikan hasil perhitungan nilai akhir.
4. Buat function `tentukanPredikat(nilai)` untuk menentukan kategori nilai.
5. Gunakan percabangan untuk menetapkan predikat A, B, C, D, atau E.
6. Tentukan nilai tugas, UTS, dan UAS sesuai contoh.
7. Panggil function `hitungNilaiAkhir()` untuk memperoleh nilai akhir.
8. Tampilkan nilai akhir, predikat, dan status kelulusan menggunakan `console.log()`.
9. Jalankan program dan periksa hasilnya melalui Console browser.

## D. Penjelasan Kode

**1. Function `hitungNilaiAkhir()`**

```javascript
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
```

Function menerima tiga parameter, yaitu `tugas`, `uts`, dan `uas`.

Setiap parameter dikalikan dengan bobotnya. Hasil dari ketiga komponen kemudian dijumlahkan. Kata kunci `return` mengembalikan nilai akhir kepada bagian program yang memanggil function.

**2. Function `tentukanPredikat()`**

```javascript
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}
```

Function ini menerima nilai akhir dan menentukan predikat berdasarkan kondisi berikut:

| Kondisi | Predikat |
|---|---|
| `nilai >= 85` | A |
| `nilai >= 75` | B |
| `nilai >= 60` | C |
| `nilai >= 50` | D |
| Di bawah 50 | E |

Pemeriksaan dilakukan secara berurutan. Ketika suatu kondisi terpenuhi, function langsung mengembalikan predikat melalui `return`.

**3. Menentukan nilai komponen**

```javascript
const tugas = 85;
const uts = 78;
const uas = 88;
```

Ketiga variabel menyimpan nilai contoh yang digunakan dalam perhitungan.

**4. Menghitung nilai akhir**

```javascript
const akhir = hitungNilaiAkhir(tugas, uts, uas);
```

Memanggil function perhitungan menggunakan ketiga nilai tersebut dan menyimpan hasilnya dalam variabel `akhir`.

**5. Menampilkan hasil**

```javascript
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
```

- `console.log()` menampilkan informasi pada Console.
- `toFixed(2)` menampilkan nilai akhir dengan dua angka di belakang koma.
- `tentukanPredikat(akhir)` menentukan predikat berdasarkan nilai akhir.

**6. Menentukan status kelulusan**

```javascript
akhir >= 60 ? "Lulus" : "Belum lulus"
```

Operator ternary memeriksa apakah nilai akhir minimal 60. Jika benar, hasilnya `Lulus`; jika salah, hasilnya `Belum lulus`.

## E. Perhitungan Manual

Diketahui:

- Nilai tugas = 85
- Nilai UTS = 78
- Nilai UAS = 88

Rumus:

```text
Nilai Akhir = (Tugas × 0,30) + (UTS × 0,30) + (UAS × 0,40)
```

Substitusi nilai:

```text
Nilai Akhir = (85 × 0,30) + (78 × 0,30) + (88 × 0,40)
Nilai Akhir = 25,5 + 23,4 + 35,2
Nilai Akhir = 84,1
```

Nilai akhir yang diperoleh adalah `84,10` ketika ditampilkan dengan dua angka desimal.

Karena nilai akhir berada pada rentang `>= 75` dan `< 85`, predikat yang diperoleh adalah **B**. Nilai akhir juga lebih besar dari atau sama dengan 60 sehingga statusnya **Lulus**.

## F. Hasil yang Diharapkan

Pada Console browser, hasil program adalah:

```text
Nilai akhir: 84.10
Predikat: B
Status: Lulus
```

## G. Pengembangan Sesuai Instruksi Modul

Setelah kode awal berhasil dijalankan, modul meminta pengembangan berikut:

1. Tambahkan form input untuk ketiga komponen nilai.
2. Validasi agar setiap nilai berada pada rentang 0–100.
3. Tampilkan nilai akhir, predikat, dan status pada halaman HTML, bukan hanya Console.
4. Gunakan function untuk memisahkan proses perhitungan dari tampilan hasil.
5. Uji sekurang-kurangnya tiga skenario nilai yang berbeda.

Dengan demikian, Mini Project tidak berhenti pada kode contoh yang menggunakan nilai tetap. Form, validasi, dan tampilan hasil merupakan bagian pengembangan lanjutan yang diminta modul.

## H. Screenshot

![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105606.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105614.png?raw=true)
![image alt](https://github.com/Bagas240/Lab5web/blob/main/image/Screenshot%202026-10-22%20105628.png?raw=true)

---
