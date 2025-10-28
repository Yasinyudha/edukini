import "./AngkaKejadian.css";
import { Link } from "react-router-dom";

function AngkaKejadian() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Angka Kejadian.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">
            Angka Kejadian Pernikahan Dini di Indonesia
          </p>
          <p className="general-paragraph">
            Berdasarkan Laporan Profil Anak Indonesia Tahun 2018 menunjukan
            bahwa sekitar 39.17% atau 2 dari anak perempuan usia 10-17 menikah
            sebelum usia 15 tahun dimana sekitar 37.91% menikah di usia 16 tahun
            kemudian 22.92% menikah di usia 17 tahun. Angka tersebut menempatkan
            Indonesia pada peringkat ke-7 tertinggi di dunia serta menduduki
            peringkat kedua di ASEAN. Berdasarkan data Badan Pusat Statistik
            (BPS) tahun 2020 jumlah pernikahan dini pada tahun 2019 ada sebanyak
            10.82% dan pada tahun 2020 terdapat penurunan menjadi 10.8% dan
            setelah di nilai, pernikahan dini ini banyak terjadi di wilayah
            pedesaan dibandingkan di wilayah perkotaan dilihat dari hasil yang
            didapatkan pada tahun 2020 terdapat 15.24% pernikahan dini terjadi
            di wilayah pedesaan dan 6.82% pernikahan dini yang
            terjadi di perkotaan.
          </p>
        </div>

        <Link to="/daftar-isi">
          <img
            src="/Assets/Back Arrow Asset.png"
            alt="back arrow"
            className="back-arrow"
          ></img>
        </Link>
      </div>
    </>
  );
}

export default AngkaKejadian;
