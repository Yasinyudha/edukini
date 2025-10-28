import "./FaktorRisiko.css";
import { Link } from "react-router-dom";

function FaktorRisiko() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Faktor Risiko Pernikahan Dini.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">Faktor Risiko Pernikahan Dini</p>
          <p className="general-paragraph">
            Pertama faktor ekonomi menjadi salah satu pendorong utama, di mana
            keluarga dengan kondisi finansial yang sulit kerap memilih untuk
            menikahkan anak mereka guna mengurangi beban ekonomi, dengan harapan
            sang anak dapat memperoleh kehidupan yang lebih layak
            <br />
            <br />
            Kedua, faktor pendidikan juga berpengaruh signifikan, remaja dengan
            tingkat pendidikan rendah cenderung lebih mudah terlibat dalam
            pernikahan dini karena kurangnya aktivitas atau tujuan jangka
            panjang yang dapat menunda keputusan untuk menikah
            <br />
            <br />
            Ketiga, faktor orang tua turut memengaruhi, terutama mereka yang
            memiliki latar belakang pendidikan rendah, yang sering kali
            mendorong anak menikah muda karena kekhawatiran terhadap pergaulan
            bebas atau keinginan menjaga hubungan baik antar keluarga. Keempat,
            adat dan kebiasaan setempat juga memiliki peran penting, terutama di
            daerah yang masih memegang teguh tradisi, seperti anggapan bahwa
            lamaran tidak boleh ditolak meskipun calon mempelai masih di bawah
            umur.
            <br />
            <br />
            Kelima kasus married by accident atau kehamilan di luar nikah juga
            menjadi penyebab umum pernikahan dini.
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

export default FaktorRisiko;
