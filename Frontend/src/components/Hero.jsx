
function Hero() {
  return (
    <section style={styles.hero}>

      <a href="/booking" style={styles.link}>
        <button style={styles.button}>Book This Service</button>
      </a>

    </section>
  );
}
const styles = {
  hero: {
    width: "100%",
    // height: "1%",
    background: "linear-gradient(to right, #000000, #000000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
  },

  button: {
    padding: "12px 30px",
    background: "linear-gradient(45deg, #ff4d6d, #ff1e4d)",
    border: "none",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",

    /* 🔥 effects */
    boxShadow: "0 0 15px rgba(255, 77, 109, 0.6)",
    transition: "all 0.3s ease",
  },
};

export default Hero;