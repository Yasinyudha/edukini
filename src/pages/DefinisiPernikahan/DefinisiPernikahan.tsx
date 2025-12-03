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
            Pernikahan yang melibatkan individu di bawah usia 19 tahun
            dikategorikan sebagai pernikahan dini oleh WHO, sedangkan menurut
            hukum di Indonesia, pernikahan dianggap sah jika pria berusia
            minimal 19 tahun dan wanita minimal 16 tahun.
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
