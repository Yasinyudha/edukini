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
            <ul className="general-paragraph ul-pencegahan">
              <li>
                Fokus pada pendidikan dan karir.
              </li>
              <li>
                Tidak terburu-buru dalam membuat keputusan tentang pernikahan.
              </li>
              <li>
                Mengikuti kegiatan positif dan mengembangkan hobi.
              </li>
              <li>
                Meningkatkan kesadaran diri tentang risiko dan dampak pernikahan dini.
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
