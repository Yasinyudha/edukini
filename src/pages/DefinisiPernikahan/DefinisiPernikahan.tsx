import "./DefinisiPernikahan.css"
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
            Menurut Organisasi Kesehatan Dunia (WHO), pernikahan dini merujuk
            pada pernikahan yang melibatkan individu yang berusia di bawah 19
            tahun. UNICEF mendefinisikan pernikahan dini sebagai pernikahan yang
            terjadi sebelum usia 18 tahun, baik melalui prosedur resmi maupun
            tidak. Sementara itu, menurut Undang-Undang Republik Indonesia,
            pernikahan dianggap sah apabila pria telah berusia minimal 19 tahun
            dan wanita minimal 16 tahun. Jika dilakukan di bawah batas usia
            tersebut, maka termasuk dalam kategori pernikahan dini
            (Mutiah et al., n.d.).
          </p>
        </div>

        <Link to="/daftar-isi">
            <img src="/Assets/Back Arrow Asset.png" alt="back arrow" className="back-arrow"></img>
        </Link>
      </div>
    </>
  );
}

export default DefinisiPernikahan;
