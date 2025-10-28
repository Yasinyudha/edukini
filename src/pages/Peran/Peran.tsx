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
            Pernikahan dini bukan sekadar wujud ikatan cinta di usia muda,
            tetapi juga membawa berbagai tanggung jawab besar yang menuntut
            kesiapan fisik, mental, dan sosial dari pasangan yang menjalaninya.
            Di balik kebahagiaan yang mungkin tampak di awal, terdapat tantangan
            nyata yang harus dihadapi dengan kedewasaan dan kesiapan yang
            matang. Berikut ini adalah berbagai peran dan tanggung jawab yang
            perlu dipahami oleh pasangan dalam pernikahan dini:
            <br />
            <br />
            1. Kesiapan Ekonomi: Pasangan seringkali belum siap secara ekonomi,
            menyebabkan ketergantungan pada keluarga lain dan rentan terhadap
            konflik.
            <br />
            <br />
            2. Kesehatan Fisik dan Reproduksi: Alat reproduksi yang belum matang
            dapat menyebabkan komplikasi saat kehamilan dan melahirkan, serta
            risiko infeksi dan trauma fisik.
            <br />
            <br />
            ⁠3. Kesehatan Mental dan Emosional: Pernikahan dini dapat berdampak
            pada kesehatan mental dan emosional pasangan, serta meningkatkan
            risiko depresi dan kekerasan dalam rumah tangga.
            <br />
            <br />
            4. Perlindungan Anak: Pasangan muda mungkin belum mampu melindungi
            diri dan anak dari kekerasan fisik, psikis, seksual, maupun
            penelantaran.
            <br />
            <br />
            5. Pendidikan dan Perkembangan: Keterbatasan usia membuat pasangan,
            terutama perempuan, tidak dapat menyelesaikan pendidikan dan
            berpartisipasi optimal dalam pembangunan.
            <br />
            <br />
            ⁠6. Tanggung Jawab Sosial dan Budaya: Pasangan muda harus mampu
            menjalankan fungsi sosial budaya dan keagamaan keluarga, yang
            membutuhkan kedewasaan dalam menghadapi tuntutan masyarakat dan
            norma.
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
