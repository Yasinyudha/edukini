import "./DampakPernikahan.css";
import { Link } from "react-router-dom";

function DampakPernikahan() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Dampak Pernikahan.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">Dampak Pernikahan Dini</p>
          <p className="general-paragraph">
            Dampak negatif pernikahan dini diberikan pada poin-poin di bawah
            ini: 
            <br/>
            <br/>
            1. Secara biologis, organ reproduksi remaja masih dalam tahap
            perkembangan menuju kematangan, sehingga belum siap melakukan
            aktivitas seksual. Jika dipaksakan, hal ini dapat menimbulkan risiko
            trauma fisik maupun psikologis, terutama jika terjadi kehamilan dan
            persalinan. 
            <br/>
            <br/>
            2. Secara psikologis, remaja yang belum memiliki
            pemahaman cukup tentang hubungan seksual berisiko mengalami trauma
            emosional yang mendalam dan sulit disembuhkan, mereka cenderung
            merasa murung, menyesal atas keputusan yang diambil, dan kesulitan
            membentuk keluarga yang sehat dan berkualitas. 
            <br/>
            <br/>
            3. Secara sosial,
            pernikahan dini membatasi ruang gerak remaja dalam mengembangkan
            potensi diri, sehingga mereka kehilangan kesempatan untuk
            berpartisipasi aktif dalam masyarakat. 
            <br/>
            <br/>
            4. Secara ekonomi, pernikahan
            di usia muda dapat menghambat peningkatan pendapatan keluarga dan
            meningkatkan beban finansial, yang pada akhirnya berisiko
            menimbulkan perceraian. 
            <br/>
            <br/>
            Sementara itu, dampak positif dari
            pernikahan dini adalah: 
            <br/>
            <br/>
            1. Secara ekonomi, pernikahan usia muda bisa
            membantu meringankan beban keluarga dan membuat pengeluaran menjadi
            lebih efisien, terutama jika mendapat dukungan dari kedua belah
            pihak keluarga. 
            <br/>
            <br/>
            2. Secara psikologis pernikahan dini dapat menjadi
            sarana bagi remaja untuk belajar memikul tanggung jawab sejak dini,
            banyak dari mereka yang sebelum menikah masih bergantung pada orang
            tua, namun setelah menikah, mereka dituntut untuk mandiri dan
            mengelola kehidupan rumah tangga secara lebih dewasa.
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

export default DampakPernikahan;
