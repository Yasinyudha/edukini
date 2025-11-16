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
            Pernikahan dini dipengaruhi oleh faktor 
            <ul className="general-paragraph">
              <li>Ekonomi (keluarga miskin ingin mengurangi beban)</li>
              <li>Pendidikan rendah</li>
              <li>Pengaruh orang tua</li>
              <li>Adat dan tradisi kuat</li>
              <li>Kehamilan di luar nikah</li>
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

export default FaktorRisiko;
