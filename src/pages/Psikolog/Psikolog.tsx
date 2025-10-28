import "./Psikolog.css"
import { Link } from "react-router-dom"

function Psikolog() {
    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/Assets/White Burger Icon Asset.png" className="burger-icon-white"></img>

                <Link to="/psikolog-dokter-umum">
                    <img src="/Contact/Therapist.png" alt="quiz image" className="therapist-image therapist"></img>
                    <p className="psy-doc-paragraph">
                        Konseling Dengan Tenaga Kesehatan Profesional
                    </p>
                </Link>

                <Link to="/daftar-isi">
                    <img src="/Assets/White Arrow Asset.png" alt="white arrow" className="back-white-arrow"></img>
                </Link>
            </div>
        </>
    )
}

export default Psikolog