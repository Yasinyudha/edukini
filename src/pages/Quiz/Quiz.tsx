import "./Quiz.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useScore } from "./ScoreContext"

function Quiz() {
    const { resetScore } = useScore()
    const navigate = useNavigate()
    const handleStart = () => {
        navigate("/quiz-number-1")
        resetScore()
    }

    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/Assets/Burger Icon Asset.png" className="burger-icon-white"></img>

                <img src="/Quiz/Quiz Image Cover-min.png" alt="quiz image" className="quiz-image"></img>
                <button className="button-mulai" onClick={handleStart}>MULAI QUIZ</button>

                <Link to="/daftar-isi">
                    <img src="/Assets/Back Arrow Asset.png" alt="white arrow" className="back-white-arrow"></img>
                </Link>
            </div>
        </>
    )
}

export default Quiz