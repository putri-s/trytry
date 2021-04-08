const jadwalSholat = (latitude, longitude) => {
  fetch (`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2`)
  .then(response => response.json()) //dijadikan data json
  .then(responseJson = (response) => { //mengeluarkan hasil response dr url API
    const tanggal = new Date();
    const hariIni = tanggal.getDate() -1; //tanggal berbentuk array, -1 untuk mendapatkan tanggal hari ini
    const tanggalData = response.data[hariIni].date.readable;
    const data    = response.data[hariIni].timings; //menyimpan data jadwal sholat
    // console.log(hariIni);
    // console.log(response.data[hariIni])
    // console.log(tanggalData);

    const aplikasi   = document.getElementById(`aplikasi`); //sm dgn variabel yg dibuat di func index
    const tabel      = document.getElementById(`listJadwal`);
    const tampilTanggal = document.querySelector(`.tanggal`);
    tampilTanggal.innerHTML = `Hari ini, ${tanggalData}`;

    const tBodyTabel = document.createElement(`tbody`);
    for (i in data) {
      const row         = tBodyTabel.insertRow(); //membuat row baru di tBodyTabel
      const waktuSholat = row.insertCell(0); //dlm row td masukkan kolom pertama utk waktu sholat
      const jam         = row.insertCell(1); //kolom kedua utk jam ny

      waktuSholat.innerHTML = i; //mengisi kolom waktu sholat dengan tiap properti i
      jam.innerHTML         = data[i]; //mengisi kolom jam berdasar data waktu sholat dgn index yg tepat
      tBodyTabel.appendChild(row); //mengisi tbody dgn baris" sesuai data yg telah dilakukan pd 2 step sblm ini
    }
    tabel.appendChild(tBodyTabel); //mengisi tabel dgn kumpulan tbody
    aplikasi.appendChild(tabel); //masukkan tabel hasil proses ke elemen aplikasi
  })
}

const getLokasi = () => {
  navigator.geolocation.getCurrentPosition(success, error) //callback success dan error
}

const success = (lokasi) => {
  jadwalSholat(lokasi.coords.latitude, lokasi.coords.longitude);
  alert(`Berikut jadwal sholat sesuai lokasimu!`)
}

const error = () => {
  alert(`Gagal mengakses lokasi.`);
}

const main = () => {
  getLokasi();
}


