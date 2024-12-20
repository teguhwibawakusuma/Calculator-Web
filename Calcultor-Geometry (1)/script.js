// script.js

// Fungsi untuk menghitung Lingkaran
function hitungLingkaran() {
  let radius = parseFloat(document.getElementById('radius').value);
  let hasil = document.getElementById('lingkaranHasil');
  if (radius > 0) {
    let luas = Math.PI * Math.pow(radius, 2);
    let keliling = 2 * Math.PI * radius;
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Luas = π × ${radius}² = ${luas.toFixed(2)}<br>
      Keliling = 2 × π × ${radius} = ${keliling.toFixed(2)}`;
  } else {
    alert("Masukkan nilai radius yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Persegi
function hitungPersegi() {
  let sisi = parseFloat(document.getElementById('sisi').value);
  let hasil = document.getElementById('persegiHasil');
  if (sisi > 0) {
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Luas = ${sisi} × ${sisi} = ${luas}<br>
      Keliling = 4 × ${sisi} = ${keliling}`;
  } else {
    alert("Masukkan nilai sisi yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Segitiga
function hitungSegitiga() {
  let alas = parseFloat(document.getElementById('alas').value);
  let tinggi = parseFloat(document.getElementById('tinggi').value);
  let hasil = document.getElementById('segitigaHasil');
  if (alas > 0 && tinggi > 0) {
    let luas = 0.5 * alas * tinggi;
    // Asumsi segitiga sama kaki untuk keliling
    let sisiMiring = Math.sqrt(Math.pow(alas / 2, 2) + Math.pow(tinggi, 2));
    let keliling = alas + 2 * sisiMiring;
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Luas = 0.5 × ${alas} × ${tinggi} = ${luas.toFixed(2)}<br>
      Keliling (asumsi segitiga sama kaki) = ${alas} + 2 × √[(${alas}/2)² + ${tinggi}²] = ${keliling.toFixed(2)}`;
  } else {
    alert("Masukkan nilai alas dan tinggi yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Persegi Panjang
function hitungPersegiPanjang() {
  let panjang = parseFloat(document.getElementById('panjang').value);
  let lebar = parseFloat(document.getElementById('lebar').value);
  let hasil = document.getElementById('persegiPanjangHasil');
  if (panjang > 0 && lebar > 0) {
    let luas = panjang * lebar;
    let keliling = 2 * (panjang + lebar);
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Luas = ${panjang} × ${lebar} = ${luas}<br>
      Keliling = 2 × (${panjang} + ${lebar}) = ${keliling}`;
  } else {
    alert("Masukkan nilai panjang dan lebar yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Kubus
function hitungKubus() {
  let sisi = parseFloat(document.getElementById('sisiKubus').value);
  let hasil = document.getElementById('kubusHasil');
  if (sisi > 0) {
    let volume = Math.pow(sisi, 3);
    let luasPermukaan = 6 * Math.pow(sisi, 2);
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Volume = ${sisi}³ = ${volume}<br>
      Luas Permukaan = 6 × ${sisi}² = ${luasPermukaan}`;
  } else {
    alert("Masukkan nilai sisi yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Balok
function hitungBalok() {
  let panjang = parseFloat(document.getElementById('panjangBalok').value);
  let lebar = parseFloat(document.getElementById('lebarBalok').value);
  let tinggi = parseFloat(document.getElementById('tinggiBalok').value);
  let hasil = document.getElementById('balokHasil');
  if (panjang > 0 && lebar > 0 && tinggi > 0) {
    let volume = panjang * lebar * tinggi;
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Volume = ${panjang} × ${lebar} × ${tinggi} = ${volume}<br>
      Luas Permukaan = 2 × (${panjang} × ${lebar} + ${panjang} × ${tinggi} + ${lebar} × ${tinggi}) = ${luasPermukaan}`;
  } else {
    alert("Masukkan nilai panjang, lebar, dan tinggi yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Bola
function hitungBola() {
  let radius = parseFloat(document.getElementById('radiusBola').value);
  let hasil = document.getElementById('bolaHasil');
  if (radius > 0) {
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    let luasPermukaan = 4 * Math.PI * Math.pow(radius, 2);
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Volume = (4/3) × π × ${radius}³ = ${volume.toFixed(2)}<br>
      Luas Permukaan = 4 × π × ${radius}² = ${luasPermukaan.toFixed(2)}`;
  } else {
    alert("Masukkan nilai radius yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}

// Fungsi untuk menghitung Tabung
function hitungTabung() {
  let radius = parseFloat(document.getElementById('radiusTabung').value);
  let tinggi = parseFloat(document.getElementById('tinggiTabung').value);
  let hasil = document.getElementById('tabungHasil');
  if (radius > 0 && tinggi > 0) {
    let volume = Math.PI * Math.pow(radius, 2) * tinggi;
    let luasPermukaan = 2 * Math.PI * radius * (radius + tinggi);
    hasil.innerHTML = `<strong>Hasil:</strong><br>
      Volume = π × ${radius}² × ${tinggi} = ${volume.toFixed(2)}<br>
      Luas Permukaan = 2 × π × ${radius} × (${radius} + ${tinggi}) = ${luasPermukaan.toFixed(2)}`;
  } else {
    alert("Masukkan nilai radius dan tinggi yang valid!");
    hasil.innerHTML = `<strong>Hasil:</strong> -`;
  }
}
