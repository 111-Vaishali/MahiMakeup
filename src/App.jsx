import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [showMain, setShowMain] = useState(false);

  if (!showMain) {
    return (
      <div style={styles.videoContainer}>
        <video
          src="/intro.mp4"
          autoPlay
          muted
          style={styles.video}
          onEnded={() => setShowMain(true)}
        />

        <button style={styles.skipBtn} onClick={() => setShowMain(true)}>
          Enter Website
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

const styles = {
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
    objectFit: "cover",
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