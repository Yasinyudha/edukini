import "./Emosi.css";
import { Link } from "react-router-dom";

function Emosi() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Emosi dan Kesiapan-min.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">
            Emosi dan Kesiapan Mental Menghadapi Pernikahan Dini
          </p>
          <p className="general-paragraph">
            <p>
              Emosi dan Kesiapan Mental Menghadapi Pernikahan Dini Masa remaja
              ditandai dengan:
            </p>
            <ul className="general-paragraph">
              <li>Emosi yang tinggi dan tidak stabil</li>
              <li>Mudah marah</li>
              <li>Bingung</li>
              <li>Malas atau bertengkar</li>
            </ul>
            <p>
              Kondisi ini perlu diarahkan dan dikelola dengan baik agar tidak
              menimbulkan masalah, terutama jika remaja menghadapi tanggung
              jawab besar seperti pernikahan dini.
            </p>{" "}
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

export default Emosi;
