import "./Quiz.css"
import { Link, useNavigate } from "react-router-dom"
import { useScore } from "./ScoreContext"

function Quiz1() {
  const navigate = useNavigate()
  const { addScore, score } = useScore()

  const handleAnswer = (isFakta: boolean) => {
    if (isFakta) {
      addScore()
    }
    // optional: go to next question
    navigate("/quiz-number-2")
  }

  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image" />
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon-white" />

        <div className="wrapper-card">
          <img
            src="/Quiz/Box Chat 1.png"
            alt="Definisi Pernikahan"
            className="box-chat"
          />
          <p className="box-question">
            Pernikahan dini dapat membantu mengurangi risiko perceraian karena pasangan lebih muda dan lebih fleksibel untuk beradaptasi?
          </p>
        </div>

        <div className="mitos-fakta-wrapper">
          <button className="mitos-button" onClick={() => handleAnswer(false)}>MITOS</button>
          <button className="fakta-button" onClick={() => handleAnswer(true)}>FAKTA</button>
        </div>

        <p className="score-display">Score Anda saat ini:<br/>{score}</p>

        <Link to="/daftar-isi">
          <img src="/Assets/Back Arrow Asset.png" alt="white arrow" className="back-white-arrow" />
        </Link>
      </div>
    </>
  )
}

export default Quiz1