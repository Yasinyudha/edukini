import "./Quiz.css"
import { Link, useNavigate } from "react-router-dom"
import { useScore } from "./ScoreContext"

function Quiz2() {
  const navigate = useNavigate()
  const { addScore, score } = useScore()

  const handleAnswer = (isFakta: boolean) => {
    if (isFakta) {
      addScore()
    }
    navigate("/quiz-number-3")
  }

  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image" />
        <img src="/Assets/Burger Icon Asset.png" className="burger-icon-white" />

        <div className="wrapper-card">
          <img
            src="/Quiz/Box Chat 2.png"
            alt="Definisi Pernikahan"
            className="box-chat"
          />
          <p className="box-question">
            Pernikahan dini dapat membantu meningkatkan status sosial dan ekonomi keluarga?
          </p>
        </div>

        <div className="mitos-fakta-wrapper">
          <button className="mitos-button" onClick={() => handleAnswer(true)}>MITOS</button>
          <button className="fakta-button" onClick={() => handleAnswer(false)}>FAKTA</button>
        </div>

        <p className="score-display">Score Anda saat ini:<br/>{score}</p>

        <Link to="/quiz-number-1">
          <img src="/Assets/Back Arrow Asset.png" alt="white arrow" className="back-white-arrow" />
        </Link>
      </div>
    </>
  )
}

export default Quiz2