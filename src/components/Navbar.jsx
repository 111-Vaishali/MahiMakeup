import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MAHI</div>

      <ul style={styles.menu}>
        <li>Home</li>

        <li 
          style={styles.dropdown}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Our Services ▾

          {open && (
            <ul style={styles.dropdownMenu}>
              <li>Makeup</li>
              <li>Nails</li>
              <li>Mehendi</li>
              <li>Classes</li>
            </ul>
          )}
        </li>

        <li>Feedback</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    backgroundColor: "#a81212dc",
    position: "relative",
    zIndex: 1,
    borderBottomLeftRadius:"15px",
    borderBottomRightRadius:"15px",
   
    
  },
  logo: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    fontSize: "18px",
    listStyle: "none",
    gap: "30px",
    cursor: "pointer",
  },
  dropdown: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "30px",
    left: "0",
    backgroundColor: "white",
    padding: "10px",
    listStyle: "none",
    boxShadow: "0 4px 8px rgba(178, 40, 40, 0.2)",
  },
};

export default Navbar;