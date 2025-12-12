import { useState } from "react"
import "./faq.css"
import { Link } from "react-router-dom"

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const faqs = [
        {
            question: "Apa saja komplikasi kesehatan yang dapat terjadi pada remaja yang menikah dini?",
            answer: `Berikut beberapa komplikasi kesehatan yang dapat terjadi pada remaja yang menikah dini:
        - Komplikasi kehamilan: Risiko meningkat terhadap preeklamsia, anemia berat, perdarahan saat melahirkan, dan kelahiran prematur.
        - Kematian ibu dan bayi: Kondisi fisik ibu yang belum matang dapat menyebabkan komplikasi serius bahkan berakibat fatal bagi ibu maupun bayi.
        - Stunting dan malnutrisi: Anak dari ibu yang menikah muda berisiko tinggi mengalami kekurangan gizi dan stunting.
        - Penyakit menular seksual: Kurangnya edukasi tentang kesehatan reproduksi membuat pasangan muda lebih rentan terhadap infeksi menular seksual.
            `,
        },
        {
            question: "Bagaimana cara meningkatkan kesehatan reproduksi pada remaja?",
            answer: `Untuk meningkatkan kesehatan reproduksi pada remaja, beberapa langkah yang dapat diambil adalah:
        - Pendidikan seksual yang komprehensif: Memberikan pendidikan yang memadai mengenai kesehatan reproduksi, termasuk cara mencegah kehamilan dan penyakit menular seksual.
        - Akses ke layanan kesehatan: Memastikan remaja memiliki akses yang mudah dan terjangkau ke layanan kesehatan reproduksi.
        - Dukungan keluarga dan komunitas: Menciptakan lingkungan yang mendukung di dalam keluarga dan komunitas, di mana remaja merasa nyaman untuk berbicara tentang kesehatan reproduksi.
        `,
        },
        {
            question: "Apa saja tanda-tanda bahaya kehamilan pada remaja?",
            answer: `Tanda-tanda bahaya kehamilan pada remaja antara lain:
        - Pendarahan abnormal: Pendarahan yang tidak biasa atau berat saat hamil.
        - Sakit kepala hebat: Sakit kepala yang parah dan tidak hilang.
        - Penglihatan kabur: Gangguan penglihatan yang tiba-tiba.
        - Nyeri perut hebat: Nyeri perut yang parah dan tidak hilang.
        `,
        },
        {
            question: "Bagaimana pernikahan dini bisa dapat mempengaruhi kesehatan mental remaja?",
            answer: `Pernikahan dini dapat mempengaruhi kesehatan mental remaja dengan:
        - Stres dan kecemasan: Tekanan untuk menjadi orang dewasa dengan tanggung jawab yang besar di usia muda.
        - Depresi: Perubahan drastis dalam hidup dan kurangnya dukungan dapat memicu depresi.
        - Gangguan mental: Pernikahan dini dapat menyebabkan gangguan mental seperti PTSD.
        `,
        },
        {
            question: "Apa gejala depresi dan stress pada remaja yang menikah dini?",
            answer: `Gejala depresi dan stres pada remaja yang menikah dini antara lain:
        - Perubahan mood: Perubahan suasana hati yang ekstrem.
        - Kurangnya minat: Kurangnya minat pada aktivitas yang biasanya dinikmati.
        - Kesulitan tidur: Gangguan tidur atau insomnia.
        - Pikiran negatif: Pikiran negatif tentang diri sendiri atau masa depan.
        `,
        },
        {
            question: "Bagaimana cara mengatasi tekanan dan stress dalam pernikahan dini?",
            answer: `Untuk mengatasi tekanan dan stres dalam pernikahan dini, beberapa cara yang dapat dilakukan adalah:
        - Komunikasi yang baik: Berbicara terbuka dengan pasangan tentang perasaan dan kebutuhan masing-masing.
        - Dukungan keluarga: Mendapatkan dukungan dari keluarga dan teman.
        - Konsultasi profesional: Mencari bantuan profesional dari psikolog atau konselor.
        - Aktivitas relaksasi: Melakukan aktivitas yang membantu relaksasi, seperti olahraga atau meditasi.
        `,
        }
    ]

    return (
        <>
            <div className="wrapper">
                <img src="/Logo Samping.png" alt="Logo" className="full-image"></img>
                <img src="/Assets/Burger Icon Asset.png" className="burger-icon-white"></img>

                <p className="headline">
                    Questions and Answers
                </p>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div className="faq-item">
                            <p className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                            </p>
                            <img
                                src="/Assets/Down Arrow Black.png"
                                alt="toggle arrow"
                                className={`arrow-icon ${openIndex === index ? "open" : ""}`}
                                onClick={() => toggleFAQ(index)}
                            />
                            </div>
                            {openIndex === index && (
                                <p className="faq-answer">
                                    {faq.answer.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br/>
                                        <br/>
                                    </span>
                                    ))}
                                </p>
                            )}
                            <div className="separator"></div>
                        </div>
                        ))}
                </div>

                <Link to="/daftar-isi">
                    <img src="/Assets/Back Arrow Asset.png" alt="white arrow" className="back-white-arrow"></img>
                </Link>
            </div>
        </>
    )
}

export default FAQ