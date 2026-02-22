function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Welcome to MAHI Makeup Studio</h1>
      <p>Bridal • Mehendi • Nails • Professional Classes</p>
      <button style={styles.button}>Book Now</button>
    </section>
  );
}

const styles = {
  hero: {
      width: "100%",
    height: "100vh",
    background: "linear-gradient(to right, #b56565, #b56565)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
     background: "linear-gradient(to right, #bb6c69, #9f5656)",
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