import { useState } from "react";

function BridalService() {
  const [showMore, setShowMore] = useState(false);
    
  return (
    
    <section id="bridal" style={styles.container}>
        

      {/* IMAGE */}
      <div style={styles.imageBox}>
        <img 
          src="images/Bridal.jpg" 
          alt="Bridal Makeup"
          style={styles.image}
        />
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <h2 style={styles.title}>Bridal Makeup</h2>

        <p style={styles.desc}>
          Experience luxury bridal makeup with flawless HD & Airbrush finish.<br />
          Designed to enhance your natural beauty with long-lasting elegance.
        </p>

        {/* BUTTON */}
        <button 
          style={styles.button}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Hide Details ↑" : "View Details ↓"}
        </button>

        {/* EXPANDABLE CONTENT */}
        {showMore && (
          <div style={styles.moreContent}>
            <h3>Includes</h3>
            <ul>
              <p>Makeup + Hairstyling + Draping</p>
              <p>Lashes & Lenses</p>
              <p>Jewellery & Accessories</p>
              <p>Hair Extensions</p>
            </ul>

            <h3>Pricing</h3>
            <p>HD Makeup: ₹20,000 – ₹25,000</p>
            <p>Basic Makeup: ₹15,000 – ₹20,000</p>
            <p>Normal Makeup: ₹10,000 – ₹15,000</p>

            <h3>Includes</h3>
            <ul>
              <p>Makeup + Hairstyling + Draping</p>
              <p>Lashes & Lenses</p>
              <p>Jewellery & Accessories</p>
              <p>Hair Extensions</p>
            </ul>

            <h3>Extra Info</h3>
            <p>✔ Trial available</p>
            <p>✔ Home service available</p>
            <p>✔ Advance booking required</p>

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
    background: "#000000",
    color: "white",
    alignItems: "center",
  },

  imageBox: {
    flex: "1",
    minWidth: "300px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },

  content: {
    flex: "1",
    padding: "40px",
    minWidth: "300px",
  },

  title: {
    fontSize: "34px",
    marginBottom: "15px",
    color: "#ff4d6d",
  },

  desc: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#ddd",
  },

  button: {
    padding: "10px 20px",
    background: "#ff4d6d",
    position: "relative",
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
    animation: "fadeIn 0.4s ease",
  },
};

export default BridalService;