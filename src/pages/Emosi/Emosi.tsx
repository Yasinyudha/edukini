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
            src="/ListGambar/Emosi dan Kesiapan.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">
            Emosi dan Kesiapan Mental Menghadapi Pernikahan Dini
          </p>
          <p className="general-paragraph">
            Masa remaja disebutkan sebagai satu periode Hieghtened Emotional
            yaitu suatu keadaan kondisi emosi Nampak lebih tinggi atau Nampak
            intens dibanding dengan keadaan yang normal, Emosi yang biasanya
            tinggi tersebut pada akhirnya dapat termanifestasikan ke dalam
            berbagai bentuk tingkah laku seperti halnya:
            <br />
            <br />
            Emosi tinggi tersebut tidak berlangsung terus selama masa remaja.
            Dengan bertambahnya umur para remaja, maka emosi yang tinggipun akan
            mulai mereda atau menuju kondisi yang stabil. Emosi yang tinggi pada
            masa remaja sebaiknya tidak dibiarkan begitu saja, akan tetapi perlu
            kiranya untuk mendapatkan penyaluran atau penanganan yang baik, agar
            nantinya tidak menimbulkan hal-hal merugikan.
          </p>

          <ol className="list-definisi">
            <li>Merasa bingung</li>
            <li>Emosi berkobar-kobar ataupun mudah meledak</li>
            <li>Pertengkaran</li>
            <li>Tidak bergairah</li>
            <li>Pemalas</li>
            <li>
              Membentuk <i>self-defense mechanism</i>, yaitu strategi bawah
              sadar yang digunakan seseorang untuk melindungi diri dari perasaan
              cemas, tekanan, atau stres yang tidak menyenangkan.
            </li>
          </ol>

          <p className="general-paragraph">
            Emosi tinggi tersebut tidak berlangsung terus selama masa remaja.
            Dengan bertambahnya umur para remaja, maka emosi yang tinggipun akan
            mulai mereda atau menuju kondisi yang stabil. Emosi yang tinggi pada
            masa remaja sebaiknya tidak dibiarkan begitu saja, akan tetapi perlu
            kiranya untuk mendapatkan penyaluran atau penanganan yang baik, agar
            nantinya tidak menimbulkan hal-hal merugikan.
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
