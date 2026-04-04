import { useState } from "react";

function PreMaternityService() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="maternity" style={styles.container}>

      {/* IMAGE LEFT */}
      <div style={styles.imageBox}>
        <img 
          src="/images/Maternity.png"
          alt="Pre Maternity Shoot"
          style={styles.image}
        />
      </div>

      {/* CONTENT RIGHT */}
      <div style={styles.content}>
        <h2 style={styles.title}>Pre-Maternity Shoot Styling</h2>

        <p style={styles.desc}>
          Celebrate motherhood with soft, glowing and camera-ready styling <br />
          designed for beautiful and memorable photoshoots.
        </p>

        <button 
          style={styles.button}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Hide Details ↑" : "View Details ↓"}
        </button>

        {showMore && (
          <div style={styles.moreContent}>

            <h3>Occasions</h3>
            <ul>
              <p>Pre-Maternity Photoshoots</p>
              <p>Studio & Indoor Shoots</p>
              <p>Outdoor Locations</p>
              <p>Couple Shoots</p>
            </ul>

            <h3>Types</h3>
            <ul>
              <p>Soft Glam Look</p>
              <p>Minimal Natural Look</p>
              <p>HD Makeup Finish</p>
              <p>Elegant Hairstyles</p>
            </ul>

            <h3>Pricing</h3>
            <p>Basic: ₹8000 – ₹12000</p>
            <p>Advanced: ₹12000 – ₹18000</p>
            <p>HD: ₹18000 – ₹22000</p>

          </div>
        )}
      </div>

    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    background: "#000000",
    color: "white",
  },

  imageBox: {
    flex: "1",
    minWidth: "300px",
  },

  content: {
    flex: "1",
    padding: "40px",
    minWidth: "300px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },

  title: {
    fontSize: "34px",
    color: "#ff4d6d",
    marginBottom: "15px",
  },

  desc: {
    color: "#ddd",
    marginBottom: "20px",
  },

  button: {
    padding: "10px 20px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "20px",
  },

  moreContent: {
    background: "#1a1a1a",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "10px",
  },
};

export default PreMaternityService;