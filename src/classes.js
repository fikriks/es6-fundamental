/*
    Classes
*/

class Siswa
{
    constructor(username, password, nama_kelas){
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung(){
        console.log(`${this.username} telah bergabung pada kelas ${this.nama_kelas}`);
    }
}

let tambahSiswa = new Siswa("fikriks", "fikri", "Web Development");
tambahSiswa.gabung();