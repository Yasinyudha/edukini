import "./Animasi.css"
import { Link } from "react-router-dom"

function Animasi() {

    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/Assets/Burger Icon Asset.png" className="burger-icon-white"></img>

                <p className="video-animasi-p">Video Animasi</p>
                <video 
                    src="/Assets/Video Animasi.mp4" 
                    controls 
                    width="100%"
                    className="video-animasi"
                />

                <Link to="/daftar-isi">
                    <img src="/Assets/Back Arrow Asset.png" alt="white arrow" className="back-white-arrow"></img>
                </Link>
            </div>
        </>
    )
}

export default Animasi