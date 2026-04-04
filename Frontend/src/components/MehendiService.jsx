import { useState } from "react";

function MehendiService() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="mehendi" style={styles.container}>

      {/* IMAGE LEFT */}
      <div style={styles.imageBox}>
        <img 
          src="/images/Mehandi.jpg"
          alt="Mehendi Service"
          style={styles.image}
        />
      </div>

      {/* CONTENT RIGHT */}
      <div style={styles.content}>
        <h2 style={styles.title}>Mehendi Services</h2>

        <p style={styles.desc}>
          Add a touch of tradition with beautiful, customized mehendi designs 
          <br></br>ranging from classic bridal patterns to modern stylish art.
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
              <p>Bridal & Wedding Mehendi</p>
              <p>Party & Small Functions</p>
              <p>Maternity Shoot Designs</p>
              <p>Festivals & Traditional Events</p>
              <p>Family Functions</p>
            </ul>

            <h3>Pricing</h3>
            <p>Bridal: Starts from ₹5000</p>
            <p>Guest: ₹200 – ₹1000 per hand</p>
            <p>Custom: Based on design</p>

            <h3>Notes</h3>
            <p>✔ Natural mehendi used</p>
            <p>✔ Safe & skin-friendly</p>
            <p>✔ Clean hands before application</p>

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

export default MehendiService;