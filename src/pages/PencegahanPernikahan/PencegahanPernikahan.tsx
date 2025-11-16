import "./PencegahanPernikahan.css";
import { Link } from "react-router-dom";

function PencegahanPernikahan() {
  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon"></img>

        <div className="general-penjelasan">
          <img
            src="/ListGambar/Pencegahan Pernikahan.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">Pencegahan Pernikahan Dini</p>
          <p className="general-paragraph">
            <ul className="general-paragraph">
              <li>
                Menyediakan akses pendidikan yang layak bagi anak laki-laki dan
                perempuan agar fokus pada belajar.
              </li>
              <li>
                Memberikan penyuluhan pendidikan seksual untuk meningkatkan
                pengetahuan kesehatan reproduksi remaja.
              </li>
              <li>
                Memberdayakan masyarakat dan orang tua agar memahami risiko
                pernikahan dini.
              </li>
              <li>
                Memperkuat peran pemerintah dengan menetapkan batas usia minimum
                pernikahan yang lebih tinggi.
              </li>
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

export default PencegahanPernikahan;
