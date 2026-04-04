
// import logo from "../images/logo.jpeg"; // adjust path if needed
// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
  <img src="/images/logo.jpeg" alt="Mahi Logo" style={styles.logoImg} />
  <span style={styles.logoText}>MAHI</span>
</div>

      {/* Hamburger */}
      <div style={styles.hamburger} onClick={() => {
          setMenuOpen(!menuOpen);
          setServiceOpen(false);
        }}>
          ☰
      </div>

      {/* MENU */}
      <ul
        style={{
          ...styles.menu,
          display: menuOpen ? "flex" : "none",
        }}
      >
        <li style={styles.menuItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>

        {/* SERVICES DROPDOWN */}
        <li
          style={styles.dropdown}
          onClick={() => setServiceOpen(!serviceOpen)}
        >
          Our Services ▾

          {serviceOpen && (
            <ul style={styles.dropdownMenu}>
              <li><a href="#bridal" style={styles.dropdownLink}>Bridal</a></li>
              <li><a href="#party" style={styles.dropdownLink}>Party</a></li>
              <li><a href="#mehendi" style={styles.dropdownLink}>Mehendi</a></li>
              <li><a href="#hair" style={styles.dropdownLink}>Hair</a></li>
              <li><a href="#maternity" style={styles.dropdownLink}>Maternity</a></li>
              <li><a href="#jewellery" style={styles.dropdownLink}>Jewellery</a></li>
            </ul>
          )}
        </li>
        {/* <li>
          <Link to="/booking" style={styles.link}>Book Now</Link>
        </li> */}

        <li>
          <Link to="/feedback" style={styles.link}>Feedback</Link>
        </li>

        <li>
          <a href="#faq" style={styles.link}>FAQ</a>
        </li>

        <li>
          <Link to="/about" style={styles.link}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",   // 🔥 FIX navbar overlap
    top: 0
    ,
    left: 0,

    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
    zIndex: 9999,   // 🔥 ABOVE everything
  },

  logoContainer: {
  display: "flex",
  alignItems: "center",
  gap: "8px",
},

logoImg: {
  height: "32px",   // adjust if needed
  width: "auto",
},

logoText: {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#fff",
},
  menuItem: {
  width: "100%",   // ✅ FIX
  textAlign: "left",
},

  hamburger: {
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer",
    display: "block",
  },

  menu: {
    position: "absolute",
    top: "60px",
    // left: "10px",
    right: "10px",
    background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
    flexDirection: "column",
    width: "220px",
    padding: "20px",
    listStyle: "none",
    gap: "20px",
    transition: "0.3s ease",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    display: "block",   // ✅ IMPORTANT
    width: "100%",
  },

  dropdown: {
    color: "#fff",
    cursor: "pointer",
     position: "relative",
  },

  dropdownMenu: {
    marginTop: "10px",
    background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
    borderRadius: "10px",
    padding: "10px",
  },

  dropdownLink: {
    display: "block",
    padding: "8px 0",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;