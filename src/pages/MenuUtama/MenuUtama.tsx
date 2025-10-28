import "./MenuUtama.css"
import { useNavigate } from "react-router-dom"

function MenuUtama() {
    const navigate = useNavigate()
    const handleStart = () => {
        navigate("/daftar-isi")
    }

    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/MenuUtama/Marriages.png" alt="marriage image" className="marriage-image"></img>
                <button className="button-mulai" onClick={handleStart}>MULAI</button>
                <p className="app-title">
                    EDUKASI PENCEGAHAN PERNIKAHAN DINI
                </p>
            </div>

            <div className="powered-by-wrapper">
                <p className="powered-by-p">
                    Powered by
                </p>
            </div>
        </>
    )
}

export default MenuUtama