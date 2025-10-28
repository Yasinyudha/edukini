import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MenuUtama from "./pages/MenuUtama/MenuUtama";
import "./App.css";
import DaftarIsi from "./pages/DaftarIsi/DaftarIsi";
import DefinisiPernikahan from "./pages/DefinisiPernikahan/DefinisiPernikahan";
import FaktorRisiko from "./pages/FaktorRisiko/FaktorRisiko";
import AngkaKejadian from "./pages/AngkaKejadian/AngkaKejadian";
import PencegahanPernikahan from "./pages/PencegahanPernikahan/PencegahanPernikahan";
import DampakPernikahan from "./pages/DampakPernikahan/DampakPernikahan";
import Peran from "./pages/Peran/Peran";
import Emosi from "./pages/Emosi/Emosi";
import Quiz from "./pages/Quiz/Quiz";
import Quiz1 from "./pages/Quiz/Quiz1";
import Quiz2 from "./pages/Quiz/Quiz2";
import Quiz3 from "./pages/Quiz/Quiz3";
import Quiz4 from "./pages/Quiz/Quiz4";
import Quiz5 from "./pages/Quiz/Quiz5";
import HasilAkhir from "./pages/Quiz/HasilAkhir";

function App() {
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    if (
      location.pathname === "/" ||
      location.pathname === "/quiz-cover" ||
      location.pathname === "/quiz-number-1" ||
      location.pathname === "/quiz-number-2" ||
      location.pathname === "/quiz-number-3" ||
      location.pathname === "/quiz-number-4" ||
      location.pathname === "/quiz-number-5" ||
      location.pathname === "/hasil-akhir"
    ) {
      html.style.backgroundColor = "#2c2c2c";
    } else if (
      location.pathname === "/daftar-isi" ||
      location.pathname === "/definisi" ||
      location.pathname === "/faktor-risiko" ||
      location.pathname === "/angka-kejadian" ||
      location.pathname === "/pencegahan-pernikahan" ||
      location.pathname === "/dampak-pernikahan" ||
      location.pathname === "/peran" ||
      location.pathname === "/kesiapan-mental"
    ) {
      html.style.backgroundColor = "#FFD7A8";
      html.style.backgroundImage = 'url("/ListGambar/Vector Uncropped.png")';
      html.style.backgroundSize = "80% auto";
      html.style.backgroundRepeat = "no-repeat";
    } else {
      html.style.backgroundColor = "white";
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MenuUtama />} />
      <Route path="/daftar-isi" element={<DaftarIsi />} />
      <Route path="/definisi" element={<DefinisiPernikahan />} />
      <Route path="/faktor-risiko" element={<FaktorRisiko />} />
      <Route path="/angka-kejadian" element={<AngkaKejadian />} />
      <Route path="/pencegahan-pernikahan" element={<PencegahanPernikahan />} />
      <Route path="/dampak-pernikahan" element={<DampakPernikahan />} />
      <Route path="/peran" element={<Peran />} />
      <Route path="/kesiapan-mental" element={<Emosi />} />
      <Route path="/quiz-cover" element={<Quiz />} />
      <Route path="/quiz-number-1" element={<Quiz1 />} />
      <Route path="/quiz-number-2" element={<Quiz2 />} />
      <Route path="/quiz-number-3" element={<Quiz3 />} />
      <Route path="/quiz-number-4" element={<Quiz4 />} />
      <Route path="/quiz-number-5" element={<Quiz5 />} />
      <Route path="/hasil-akhir" element={<HasilAkhir />} />
    </Routes>
  );
}

export default App;
