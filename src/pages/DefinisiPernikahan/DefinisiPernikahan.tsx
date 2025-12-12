import "./DefinisiPernikahan.css";
import { Link } from "react-router-dom";

function DefinisiPernikahan() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="definisi">
          <img
            src="/ListGambar/Definisi Pernikahan-min.png"
            alt="Definisi Pernikahan"
            className="definisi-pernikahan-definisi"
          ></img>
          <p className="title-definisi">Definisi Pernikahan Dini</p>
          <p className="paragraph-definisi">
            Pernikahan dini adalah pernikahan yang terjadi ketika pasangan masih
            berusia di bawah 19 tahun, yaitu masih dalam tahap remaja.
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

export default DefinisiPernikahan;
