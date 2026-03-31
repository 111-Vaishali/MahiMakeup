import { useState } from "react";

function JewelleryService() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="jewellery" style={styles.container}>

      {/* CONTENT LEFT */}
      <div style={styles.content}>
        <h2 style={styles.title}>Jewellery Rental Services</h2>

        <p style={styles.desc}>
          Complete your look with our premium jewellery collection designed <br />
          to enhance every occasion with a luxurious touch.
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
              <p>Bridal Jewellery Sets</p>
              <p>Party & Event Jewellery</p>
              <p>Photoshoot Styling</p>
              <p>Festivals & Functions</p>
              <p>Family Events</p>
            </ul>

            <h3>Types</h3>
            <ul>
              <p>Bridal Sets (Necklace, Earrings, Maang Tikka)</p>
              <p>Temple Jewellery</p>
              <p>Kundan Jewellery</p>
              <p>American Diamond Sets</p>
              <p>Floral Jewellery (Haldi/Mehendi)</p>
            </ul>

            <h3>Pricing</h3>
            <p>Rental: ₹1000 onwards</p>
            <p>Bridal Sets: ₹3000 – ₹10000</p>
            <p>Premium Sets: ₹10000+</p>

            <p style={{ marginTop: "10px", color: "#aaa" }}>
              *Final pricing depends on design & duration
            </p>

          </div>
        )}
      </div>

      {/* IMAGE RIGHT */}
      <div style={styles.imageBox}>
        <img 
          src="/images/JewelleryRentals.jpg"
          alt="Jewellery Rental"
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

export default JewelleryService;