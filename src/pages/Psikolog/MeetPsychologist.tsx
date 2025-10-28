import "./Psikolog.css"
import { Link } from "react-router-dom"

function MeetPsychologist() {
    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/Assets/White Burger Icon Asset.png" className="burger-icon-white"></img>

                <p className="meet-doctor-paragraph">Meet Our Psychologist</p>

                <div className="doctors-container">
                    <img src="/Contact/Profile.png" alt="profile picture" className="profile-picture"/>
                    <div className="profile-doctor-container">
                        <p className="doctor-name">Dr. Alpha Romeo, S.Psi.</p>
                        <p className="doctor-contact">
                            Contact Information<br/>
                            0812 3456 7819
                        </p>
                    </div>
                </div>

                <div className="doctors-container general">
                    <img src="/Contact/Profile.png" alt="profile picture" className="profile-picture"/>
                    <div className="profile-doctor-container">
                        <p className="doctor-name">Dr. Alpha Romeo, S.Psi.</p>
                        <p className="doctor-contact">
                            Contact Information<br/>
                            0812 3456 7819
                        </p>
                    </div>
                </div>

                <div className="doctors-container general">
                    <img src="/Contact/Profile.png" alt="profile picture" className="profile-picture"/>
                    <div className="profile-doctor-container">
                        <p className="doctor-name">Dr. Alpha Romeo, S.Psi.</p>
                        <p className="doctor-contact">
                            Contact Information<br/>
                            0812 3456 7819
                        </p>
                    </div>
                </div>

                <Link to="/psikolog-dokter-umum">
                    <img src="/Assets/White Arrow Asset.png" alt="white arrow" className="back-white-arrow"></img>
                </Link>
            </div>
        </>
    )
}

export default MeetPsychologist