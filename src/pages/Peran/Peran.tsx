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
              <ol className="general-paragraph">
                <li>
                  Tanggung Jawab Emosional:
                  <ul className="general-paragraph">
                    <li>Pernikahan butuh skill mengelola emosi seperti marah, cemburu, dan konflik.</li>
                    <li>⁠Harus bisa mendukung pasangan dan komunikasi dengan baik.</li>
                  </ul>
                  Contoh: Menikah bukan cuma cinta, tapi kelola emosi & saling dukung saat ada masalah.
                </li>

                <br/>

                <li>
                  Tanggung Jawab Finansial:
                  <ul className="general-paragraph">
                    <li>Perlu mencari uang, atur pengeluaran, dan nabung: suami biasanya penyedia utama.</li>
                    <li>⁠Remaja sering belum punya kerja tetap, gaji stabil, atau skill keuangan bisa membuat tekanan tinggi.</li>
                  </ul>
                  Contoh: Menikah berarti menanggung beban ekonomi, padahal remaja belum siap terhadap finansial.
                </li>

                <br/>

                <li>
                  Tanggung Jawab Rumah Tangga:
                  <ul className="general-paragraph">
                    <li>Meliputi urus kebutuhan sehari-hari, bersih-bersih rumah, masak, dan atur jadwal keluarga.</li>
                    <li>⁠⁠Beban ini terlalu berat buat remaja yang masih tumbuh dan sekolah.</li>
                  </ul>
                  Contoh: Bayangin pagi masak sarapan, siang bersih rumah, malam urus anak, sementara besok ada ujian sekolah. Pasti terasa capek kan?
                </li>

                <br/>

                <li>
                  Tanggung Jawab Sosial:
                  <ul className="general-paragraph">
                    <li>Harus cocok sama keluarga mertua, hadapi tekanan budaya, dan adaptasi lingkungan baru.</li>
                    <li>⁠⁠Remaja biasanya belum matang atasi dinamika sosial ini.</li>
                  </ul>
                  Contoh: Orang tua pasangan nyuruh tinggal serumah, tapi kamu nggak nyaman. Harus sabar sesuaikan diri biar nggak konflik keluarga.
                </li>

                <br/>

                <li>
                  Tanggung Jawab Reproduksi (Sangat Berisiko):
                  <ul className="general-paragraph">
                    <li>Pernikahan dini sering bikin hamil muda; harus rawat anak, jaga kesehatan ibu-bayi, dan hadapi perubahan fisik/emosi.</li>
                    <li>⁠Kehamilan dini bahaya buat nyawa ibu dan bayi.</li>
                  </ul>
                  Contoh: Umur 16 hamil, tubuh belum siap melahirkan, risiko pendarahan tinggi. Dan harus bisa mengurus bayi sambil belajar, biasanya mengalami stres berat.
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

export default Peran;
