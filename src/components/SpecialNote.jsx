function SpecialNote() {
  return (
    <section style={styles.container}>

      <h2 style={styles.title}>Special Note</h2>

      <p style={styles.text}>
        At Makeup Artist Mahi, we create flawless looks for every occasion — 
        from bridal and party makeup to mehendi, maternity shoots, and special events. 
        Every service is customized to match your style, outfit, and occasion.
      </p>

      <p style={styles.text}>
        We use high-quality products and maintain proper hygiene to ensure you feel 
        confident, comfortable, and radiant throughout your special day.
      </p>

      <div style={styles.box}>
        <p>✔ Advance booking is required</p>
        <p>✔ Booking is confirmed after advance payment</p>
        <p>✔ Pricing may vary based on look, location & requirements</p>
      </div>

      <p style={styles.footerText}>
        Let us be a part of your special moments and make them truly memorable ✨
      </p>

    </section>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to bottom, #000, #0f0f0f)",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
    // borderRadius: "12px",
  },

  title: {
    fontSize: "36px",
    color: "#ff4d6d",
    marginBottom: "20px",
  },

  text: {
    maxWidth: "800px",
    margin: "10px auto",
    color: "#ddd",
    lineHeight: "1.7",
  },

  box: {
    marginTop: "25px",
    background: "#1a1a1a",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    textAlign: "left",
  },

  footerText: {
    marginTop: "25px",
    fontStyle: "italic",
    color: "#aaa",
  },
};

export default SpecialNote;