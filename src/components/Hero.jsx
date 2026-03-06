function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heading}>Welcome to MAHI Makeup Studio</h1>
      <p style={styles.text}>Bridal • Mehendi • Nails • Professional Classes</p>
      <button style={styles.button}>Book Now</button>
    </section>
  );
}

const styles = {
  hero: {
      width: "100%",
    height: "100vh",
    background: "linear-gradient(to right, #1f1b1b, #000000)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
     background: "linear-gradient(to right, #252020, #000000)",
  },
  heading: {
    color: "white",
    fontSize: "40px",
  },

  text: {
    color: "white",
    fontSize: "18px",
    marginTop: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 25px",
    border: "none",
    backgroundColor: "#f5064d",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Hero;