import "./Peran.css";
import { Link } from "react-router-dom";

function Peran() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Peran dan Tanggung Jawab.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">
            Peran dan Tanggung Jawab Dalam Pernikahan Dini
          </p>
          <p className="general-paragraph">
            Pernikahan dini menimbulkan tantangan: 
              <ul className="general-paragraph">
                <li>Ekonomi</li>
                <li>Kesehatan fisik dan mental</li>
                <li>Perlindungan anak</li>
                <li>Pendidikan</li>
                <li>Tanggung jawab sosial dan budaya karena pasangan belum cukup matang dan siap menghadapi peran tersebut</li>
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

export default Peran;
