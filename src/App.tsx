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

function App() {
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    if (location.pathname === "/") {
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
      <Route path="/faktor-risiko" element={<FaktorRisiko  />} />
      <Route path="/angka-kejadian" element={<AngkaKejadian/>} />
      <Route path="/pencegahan-pernikahan" element={<PencegahanPernikahan/>} />
      <Route path="/dampak-pernikahan" element={<DampakPernikahan/>} />
      <Route path="/peran" element={<Peran/>} />
      <Route path="/kesiapan-mental" element={<Emosi/>} />
    </Routes>
  );
}

export default App;
