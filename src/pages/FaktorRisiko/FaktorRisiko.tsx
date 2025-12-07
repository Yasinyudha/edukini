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
            <ul className="general-paragraph ul-risiko">
              <li>Faktor ekonomi (kemiskinan yang memaksa orang tua menikahkan anak untuk mengurangi beban)</li>
              <li>Faktor pendidikan yang rendah (seringkali membuat anak putus sekolah dan tidak memiliki pengetahuan tentang dampak negatif pernikahan dini)</li>
              <li>Tekanan sosial dan budaya (menganggap pernikahan dini sebagai cara menjaga kehormatan keluarga, menghindari aib seperti kehamilan di luar nikah, dan melestarikan tradisi perjodohan turun-temurun)</li>
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
