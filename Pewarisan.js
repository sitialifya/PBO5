class Orang {
    constructor(mahasiswa, alamat) {
        this.mahasiswa = mahasiswa;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        console.log(`Mahasiswa: ${this.mahasiswa}, Alamat: ${this.alamat}`);
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(mahasiswa, alamat, nim, kelas, prodi) {
        super(mahasiswa, alamat); // Memanggil konstruktor kelas induk
        this.nim = nim;
        this.kelas = kelas;
        this.prodi = prodi;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM: ${this.nim}`);
        console.log(`Kelas :${this.kelas}`);
        console.log(`Prodi: ${this.prodi}`);
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Budi", "Jl. Merdeka", "123456", "IP231", "Informatika");
mahasiswa1.tampilkanInformasi();

