import "./Psikolog.css"
import { Link } from "react-router-dom"

function PsikologDokterUmum() {
    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/Assets/White Burger Icon Asset.png" className="burger-icon-white"></img>

                <Link to="/meet-doctor">
                    <img src="/Contact/Doctor.png" alt="quiz image" className="therapist-image"></img>
                    <p className="psy-doc-paragraph">
                        Hubungi Dokter Umum
                    </p>
                </Link>

                <Link to="/meet-psychologist">
                    <img src="/Contact/Psikologi.png" alt="quiz image" className="therapist-image psychologist"></img>
                    <p className="psy-doc-paragraph">
                        Hubungi Psikolog
                    </p>
                </Link>

                <Link to="/psikologi">
                    <img src="/Assets/White Arrow Asset.png" alt="white arrow" className="back-white-arrow"></img>
                </Link>
            </div>
        </>
    )
}

export default PsikologDokterUmum