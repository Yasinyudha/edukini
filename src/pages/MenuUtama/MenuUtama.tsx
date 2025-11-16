import "./MenuUtama.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function MenuUtama() {
    const navigate = useNavigate()
    const [transitioning, setTransitioning] = useState(false)

    const handleStart = () => {
        // start global music
        (window as any).startAppMusic?.();

        // fade-out old UI
        setTransitioning(true)

        // go to next page after 2 seconds
        setTimeout(() => {
            navigate("/daftar-isi")
        }, 2000)
    }

    return (
        <>
            {/* MAIN SCREEN (fade-out when transitioning) */}
            <div className={`wrapper ${transitioning ? "fade-out" : ""}`}>
                {!transitioning && (
                    <>
                        <img src="/Logo Samping.png" alt="Logo" className="full-image" />
                        <img src="/MenuUtama/Marriages.png" alt="marriage image" className="marriage-image" />
                        <button className="button-mulai" onClick={handleStart}>MULAI</button>
                        <p className="app-title">
                            EDUKASI PENCEGAHAN PERNIKAHAN DINI
                        </p>

                        <div className="powered-by-wrapper">
                            <p className="powered-by-p">Powered by</p>
                        </div>
                    </>
                )}
            </div>

            {/* TRANSITION SCREEN (fade-in) */}
            {transitioning && (
                <>
                    <div className="wrapper fade-in">
                        <img src="/Logo Samping.png" alt="Logo" className="full-image" />
                        <img src="/MenuUtama/thinker.png" alt="Transition" className="transition-image" />
                        <p className="transition-text">Apakah kalian tau pernikahan dini?</p>
                    </div>
                </>
            )}
        </>
    )
}

export default MenuUtama
