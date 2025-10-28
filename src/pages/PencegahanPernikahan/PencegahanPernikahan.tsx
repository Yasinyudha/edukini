import "./PencegahanPernikahan.css";
import { Link } from "react-router-dom";

function PencegahanPernikahan() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Pencegahan Pernikahan.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">Pencegahan Pernikahan Dini</p>
          <p className="general-paragraph">
            1. Menyediakan akses pendidikan formal yang layak bagi anak
            laki-laki maupun perempuan sangat penting dalam pencegahan
            pernikahan dini, dengan adanya kesetaraan dalam memperoleh
            pendidikan, anak-anak akan memiliki rasa ingin tahu yang seimbang
            dan cenderung lebih fokus pada proses belajar.
            <br />
            <br />
            2. Memberikan penyuluhan mengenai pendidikan seksual sangat penting
            untuk generasi muda tentang kesehatan reproduksi. 
            <br />
            <br />
            3. Pemberdayaan masyarakat sangat penting agar lebih memahami
            risiko pernikahan dini. Orang tua dan lingkungan sekitar merupakan
            pihak terdekat yang berperan besar dalam mencegah terjadinya
            pernikahan usia dini. 
            <br />
            <br />
            4. Memperkuat peran pemerintah merupakan upaya penting dalam
            mencegah pernikahan dini, khususnya untuk menghindari risiko
            komplikasi kehamilan. Salah satu langkah yang dapat diambil adalah
            dengan mendorong penetapan batas usia minimum pernikahan yang lebih
            tinggi.
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

export default PencegahanPernikahan;
