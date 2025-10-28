import "./Quiz.css"
import { Link } from "react-router-dom"
import { useScore } from "./ScoreContext"

function HasilAkhir() {
  const { score, resetScore } = useScore()

  const shareText = `Aku baru saja menyelesaikan kuis edukini dengan skor ${score}! Yuk coba juga!`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  const handleShare = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div className="wrapper">
        <img src="/Logo Samping.png" alt="Logo" className="full-image" />
        <img src="/Assets/White Burger Icon Asset.png" className="burger-icon-white" />
        <img src="/Quiz/Medal.png" className="quiz-medal" />

        <p className="hasil-akhir-paragraph">
          Selamat! Skor quizmu adalah...
        </p>
        <p className="score-paragraph">
          {score}
        </p>

        <p className="share-paragraph">Share Quiz ini ke<br/>teman terdekatmu!</p>
        <button className="button-share" onClick={handleShare}>
          <img src="/Assets/share.png" className="share-icon"></img>
        </button>

        <Link to="/daftar-isi" onClick={resetScore}>
          <img src="/Assets/White Arrow Asset.png" alt="white arrow" className="back-white-arrow" />
        </Link>
      </div>
    </>
  )
}

export default HasilAkhir