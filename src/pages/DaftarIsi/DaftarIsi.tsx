import "./DaftarIsi.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function DaftarIsi() {
    const navigate = useNavigate()

    const onNavigateToQuiz = () => {
        navigate("/quiz-cover")
    }
    const onNavigateToFAQ = () => {
        navigate("/faq")
    }
    const onNavigateToAnimasi = () => {
        navigate("/animasi")
    }
    const onNavigateToPsikolog = () => {
        navigate("/psikologi")
    }

    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>

                <Link to="/definisi">
                    <div className="card-container-definisi">
                        <img src="/ListGambar/Definisi Pernikahan.png" alt="Definisi Pernikahan" className="definisi-pernikahan"></img>
                        <p>Definisi Pernikahan Dini</p>
                    </div>
                </Link>

                <Link to="/faktor-risiko">
                    <div className="card-container-general">
                        <img src="/ListGambar/Faktor Risiko Pernikahan Dini.png" alt="Faktor Pernikahan" className="general-image"></img>
                        <p>Faktor Risiko Pernikahan Dini</p>
                    </div>
                </Link>

                <Link to="/angka-kejadian">
                    <div className="card-container-general">
                        <img src="/ListGambar/Angka Kejadian.png" alt="Faktor Pernikahan" className="general-image"></img>
                        <p>Angka Kejadian Pernikahan Dini di Indonesia</p>
                    </div>
                </Link>

                <Link to="/pencegahan-pernikahan">
                    <div className="card-container-general">
                        <img src="/ListGambar/Pencegahan Pernikahan.png" alt="Faktor Pernikahan" className="general-image"></img>
                        <p>Pencegahan Pernikahan Dini</p>
                    </div>
                </Link>

                <Link to="/dampak-pernikahan">
                    <div className="card-container-general">
                        <img src="/ListGambar/Dampak Pernikahan.png" alt="Faktor Pernikahan" className="general-image"></img>
                        <p>Dampak Pernikahan Dini</p>
                    </div>
                </Link>

                <Link to="/peran">
                    <div className="card-container-general">
                        <img src="/ListGambar/Peran dan Tanggung Jawab.png" alt="Faktor Pernikahan" className="general-image"></img>
                        <p>Peran dan Tanggung Jawab Dalam Pernikahan Dini</p>
                    </div>
                </Link>

                <Link to="/kesiapan-mental">
                    <div className="card-container-general">
                        <img src="/ListGambar/Emosi dan Kesiapan.png" alt="Faktor Pernikahan" className="general-image"></img>
                        <p>Emosi dan Kesiapan Mental Menghadapi Pernikahan Dini</p>
                    </div>
                </Link>

                <button className="quiz-button" onClick={onNavigateToQuiz}>Mainkan Quiz</button>
                <button className="faq-button" onClick={onNavigateToFAQ}>FAQs</button>
                <button className="faq-button" onClick={onNavigateToAnimasi}>Video Animasi</button>
                <button className="faq-button" onClick={onNavigateToPsikolog}>Hubungi Psikolog dan Dokter Umum</button>
            </div>
        </>
    )
}

export default DaftarIsi