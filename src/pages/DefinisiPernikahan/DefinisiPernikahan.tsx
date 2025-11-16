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
            src="/ListGambar/Definisi Pernikahan.png"
            alt="Definisi Pernikahan"
            className="definisi-pernikahan-definisi"
          ></img>
          <p className="title-definisi">Definisi Pernikahan Dini</p>
          <p className="paragraph-definisi">
            Pernikahan dini adalah pernikahan yang melibatkan individu di bawah
            usia 19 tahun menurut WHO (badan kesehatan internasional) menurut
            UNICEF pernikahan dini di usia 18 tahun dan menurut hukum Indonesia
            pernikahan dianggap sah minimal jika pria 19 tahun dan wanita
            minimal 16 tahun. Jika pernikahan dilakukan di bawah usia tersebut,
            maka termasuk pernikahan dini.
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
