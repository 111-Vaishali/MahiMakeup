import { useState } from "react";

function HairService() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="hair" style={styles.container}>

      {/* CONTENT LEFT */}
      <div style={styles.content}>
        <h2 style={styles.title}>Hairstyling Services</h2>

        <p style={styles.desc}>
          Complete your look with elegant buns, modern curls, and trendy braids 
         <br /> designed to match your outfit, face shape, and occasion.
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
              <p>Bridal Hairstyling</p>
              <p>Party & Event Styling</p>
              <p>Photoshoot Looks</p>
              <p>Festivals & Functions</p>
              <p>Family Events</p>
            </ul>

            <h3>Types</h3>
            <ul>
              <p>Elegant Buns (sleek / messy / braided)</p>
              <p>Open Styles (curls & waves)</p>
              <p>Braids (fishtail, French, custom)</p>
              <p>Glam Waves</p>
              <p>Traditional styles with accessories</p>
            </ul>

            <h3>Pricing</h3>
            <p>Basic: ₹2000 – ₹4000</p>
            <p>Advanced: ₹4000 – ₹7000</p>
            <p>Bridal: ₹8000+</p>

          </div>
        )}
      </div>

      {/* IMAGE RIGHT */}
      <div style={styles.imageBox}>
        <img 
          src="/images/Hair.jpg"
          alt="Hairstyling"
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

export default HairService;