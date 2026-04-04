import { useState } from "react";

function PartyService() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="party" style={styles.container}>

      {/* CONTENT LEFT */}
      <div style={styles.content}>
        <h2 style={styles.title}>Party Makeup</h2>

        <p style={styles.desc}>
          Get ready to shine at every celebration with customized, 
          camera-ready <br />party makeup looks that match your outfit and occasion.
        </p>

        <button 
          style={styles.button}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Hide Details ↑" : "View Details ↓"}
        </button>

        {showMore && (
          <div style={styles.moreContent}>

            <h3>Types</h3>
            <ul>
              <p>Soft Glam – natural glowing finish</p>
              <p>HD Makeup – perfect for photos</p>
              <p>Bold Glam – dramatic look</p>
              <p>Traditional – festive & cultural</p>
            </ul>

            <h3>Pricing</h3>
            <p>Normal: ₹10,000 – ₹15,000</p>
            <p>Basic: ₹15,000 – ₹20,000</p>
            <p>HD: ₹20,000 – ₹25,000</p>

            <h3>Includes</h3>
            <ul>
              <p>Makeup + Hairstyling + Draping</p>
              <p>Lashes & Lenses</p>
              <p>Hair accessories & extensions</p>
              <p>Jewellery (on request)</p>
            </ul>

            
          </div>
        )}
      </div>

      {/* IMAGE RIGHT */}
      <div style={styles.imageBox}>
        <img 
          src="/images/Party.jpg"
          alt="Party Makeup"
          style={styles.image}
        />
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

  content: {
    flex: "1",
    padding: "40px",
    minWidth: "300px",
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

export default PartyService;