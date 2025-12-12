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
            src="/ListGambar/Pencegahan Pernikahan-min.png"
            alt="Definisi Pernikahan"
            className="general-img"
          ></img>
          <p className="general-title">Pencegahan Pernikahan Dini</p>
          <p className="general-paragraph">
            <ol className="general-paragraph ul-pencegahan">
              <li>
                Fokus pada pendidikan dan jangan biarkan pernikahan dini
                menghalangi impian untuk mencapai tujuan karir yang diinginkan.
                <br />
                <br />
                Pendidikan adalah kunci untuk mencapai impian, jadi fokus pada
                pendidikan dan jangan biarkan apa pun menghalanginya.
              </li>
              <br />
              <li>
                Mengembangkan keterampilan dan mengikuti kegiatan yang positif
                dapat membantu mengembangkan diri dan kepercayaan diri.
                <br />
                <br />
                Kembangkan keterampilan dan ikuti kegiatan yang kamu suka,
                seperti olahraga, seni, atau kegiatan sosial, untuk menjadi diri
                yang lebih baik dan percaya diri.
              </li>
              <br />
              <li>
                Gunakan teknologi untuk mencari informasi tentang pernikahan
                dini dan mengetahui resiko dan dampaknya.
                <br />
                <br />
                Cari tahu tentang pernikahan dini dan resikonya, agar bisa
                membuat keputusan yang tepat untuk masa depan.
              </li>
              <br />
              <li>
                Tidak terburu-buru dalam membuat keputusan tentang pernikahan,
                ambil waktu untuk mempertimbangkan dan memikirkan apa yang ingin
                dicapai dalam hidup.
                <br />
                <br />
                Jangan terburu-buru membuat keputusan tentang pernikahan, ambil
                waktu untuk memikirkan apa yang ingin dicapai dalam hidup dan
                pastikan sudah siap untuk mengambil tanggung jawab sebagai
                suami/istri.
              </li>
            </ol>
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
