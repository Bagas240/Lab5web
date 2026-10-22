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

function prosesNilai() {
  const inputTugas = document.getElementById("tugas").value;
  const inputUts = document.getElementById("uts").value;
  const inputUas = document.getElementById("uas").value;
  const hasil = document.getElementById("hasilNilai");

  const tugas = Number(inputTugas);
  const uts = Number(inputUts);
  const uas = Number(inputUas);

  if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "" ||
      tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
    hasil.textContent = "Masukkan semua nilai pada rentang 0–100.";
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  hasil.textContent = "Nilai akhir: " + akhir.toFixed(2) +
    " | Predikat: " + predikat + " | Status: " + status;
  console.log("Nilai akhir:", akhir.toFixed(2));
  console.log("Predikat:", predikat);
  console.log("Status:", status);
}

const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);

console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
