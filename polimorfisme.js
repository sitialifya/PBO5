// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Siswa");
    }
}

// Definisi kelas turunan
class Guru extends Orang {
    tampilkanPeran() {
        console.log("Peran: Guru");
    }
}

class KepalaSekolah extends Orang {
    tampilkanPeran() {
        console.log("Peran: Kepala Sekolah");
    }
}
class ibukantin extends Orang {
    tampilkanPeran() {
        console.log("Peran: ibu kantin");
    }
}


// Menggunakan polimorfisme
const orang1 = new Orang();
const guru1 = new Guru();
const kepalasekolah1 = new KepalaSekolah();
const ibukantin1 = new ibukantin();


orang1.tampilkanPeran();    // Output: Peran: Orang 
guru1.tampilkanPeran();     // Output: Peran: Guru
kepalasekolah1.tampilkanPeran();    // Output: Peran: Kepala Sekolah
ibukantin1.tampilkanPeran(); // Output: Peran: Ibu kantin
