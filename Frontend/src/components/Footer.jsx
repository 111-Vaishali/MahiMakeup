function Footer() {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.footerTitle}>Mahesh Aulwar</h3>

      <p>Luxury Makeup Artist • Bridal • HD • Glam</p>

      <div style={styles.links}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/booking">Book</a>
      </div>

      <p style={styles.copy}>
        © 2026 Mahesh Aulwar
      </p>
    </footer>
  );
}
const styles = {
footer: {
  background: "#000",
  color: "#ccc",
  textAlign: "center",
//   padding: "40px 20px",
  marginTop: "0px",
  borderTop: "1px solid #222",
},

footerTitle: {
  color: "#f5e6a8",
  marginBottom: "10px",
  fontSize: "22px",
},

links: {
  margin: "15px 0",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
},

link: {
  color: "#ff4d6d",
  textDecoration: "none",
  fontSize: "14px",
},

copy: {
  marginTop: "15px",
  fontSize: "12px",
  color: "#777",
},
}

export default Footer;