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
            Dampak Negatif:
            <ul className="general-paragraph">
              <li>Risiko fisik dan psikologis karena organ belum matang.</li>
              <li>Trauma emosional dan penyesalan.</li>
              <li>⁠Terbatasnya pengembangan diri dan partisipasi sosial.</li>
              <li>⁠Beban ekonomi meningkat dan risiko perceraian.</li>
            </ul>
            <br />
            Dampak Positif:
            <ul className="general-paragraph">
              <li>Meringankan beban keluarga.</li>
              <li>⁠Melatih tanggung jawab dan kemandirian remaja.</li>
            </ul>
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
