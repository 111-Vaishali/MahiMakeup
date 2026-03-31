import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import BridalService from "./components/BridalService";
import PartyService from "./components/PartyService";
import MehendiService from "./components/MehendiService";
import HairService from "./components/HairService";
import PreMaternityService from "./components/PreMaternityService";
import JewelleryService from "./components/JewelleryService";
import SpecialNote from "./components/SpecialNote";
import Feedback from "./components/Feedback";
import "./index.css";

function App() {
  const [showMain, setShowMain] = useState(false);

  // if (!showMain) {
  //   return (
  //     <div style={styles.videoContainer}>
  //       <video
  //         src="/intro.mp4"
  //         autoPlay
  //         muted
  //         style={styles.video}
  //         onEnded={() => setShowMain(true)}
  //       />

  //       <button style={styles.skipBtn} onClick={() => setShowMain(true)}>
  //         Enter Website
  //       </button>
  //     </div>
  //   );
  // }

  return (
  <Router style={{ backgroundColor: "black" }}>

    <Navbar />

    <Routes>
      <Route path="/" element={
        <>
          <div style={{ marginTop: "90px" }}>
            <Carousel />
          </div>
          <div style={styles.sectionTitle}>
            <h1>We Provide</h1>
        </div>
          <BridalService />
          <PartyService />
          <MehendiService />
          <HairService />
          <PreMaternityService />
          <JewelleryService />
          <SpecialNote />
          {/* <Feedback /> */}
          <FAQ />
        </>
      } />

      <Route path="/about" element={<About />} />
    </Routes>

  </Router>
);
}

const styles = {
  sectionTitle: {
    background: "#000000",
    color: "#fdfdfd",
    
    textAlign: "center",
    padding: "50px 20px 10px",
  },

  videoContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
    // objectFit: "cover",
    objectFit: "contain"
  },
  skipBtn: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    padding: "10px 20px",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default App;