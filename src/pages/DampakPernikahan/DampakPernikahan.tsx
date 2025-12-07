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
            Bagi remaja perempuan:
            <ol className="general-paragraph">
              <li>Pernikahan dini bisa menghambat masa depan meninggalkan sekolah dan peluang karir yang lebih baik, sehingga sulit untuk mencapai impian.</li>
              <li>Punya kesempatan untuk mengatur tubuh dan keputusan sendiri Jangan biarkan orang lain memaksa melakukan sesuatu yang tidak kamu inginkan, termasuk memiliki anak sebelum siap.</li>
              <li>⁠Pernikahan dini bisa membahayakan kesehatan  mengalami kesulitan saat hamil dan melahirkan, dan anak juga bisa memiliki risiko kesehatan yang lebih tinggi.</li>
              <li>Jangan membiarkan diri menjadi korban kekerasan setiap orang berhak hidup aman dan bahagia, tanpa kekerasan fisik, emosional, atau seksual.</li>
            </ol>
            <br />
            
            Bagi remaja laki-laki:
            <ol className="general-paragraph">
              <li>Pernikahan dini bisa membuat tidak siap menjadi suami dan ayah Belum mengetahui bagaimana cara menjadi kepala keluarga yang baik dan memberikan dukungan pada pasangan dan anak.</li>
              <li>Harus siap mengambil tanggung jawab Pernikahan dini bisa membuat tidak tahu bagaimana cara mengelola keuangan dan membuat keputusan yang tepat untuk keluarga.</li>
            </ol>
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
