import "./Quiz.css"
import { Link } from "react-router-dom"
import { useScore } from "./ScoreContext"

function HasilAkhir() {
  const { score, resetScore } = useScore()

  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image" />
        <img src="/Assets/White Burger Icon Asset.png" className="burger-icon-white" />
        <img src="/Quiz/Medal.png" className="quiz-medal"></img>

        <p className="hasil-akhir-paragraph">
          Selamat! Skor quizmu adalah...
        </p>
        <p className="score-paragraph">
          {score}
        </p>

        <Link to="/daftar-isi" onClick={resetScore}>
          <img src="/Assets/White Arrow Asset.png" alt="white arrow" className="back-white-arrow" />
        </Link>
      </div>
    </>
  )
}

export default HasilAkhir