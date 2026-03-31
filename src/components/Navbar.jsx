// // import { useState } from "react";
// // import { Link } from "react-router-dom";



// // function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const isMobile = window.innerWidth < 768;
// //   // detect screen resize
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);
// //   return (
// //     <nav style={styles.nav}>
// //       <div style={styles.logo}>MAHI</div>
// //       <div style={styles.hamburger} onClick={() => setOpen(!open)}>
// //         ☰
// //       </div>

// //       <ul style={styles.menu}>
// //         <li>
// //           <Link to="/" style={styles.link}>Home</Link>
// //         </li>

// //         <li
// //   style={styles.dropdown}
// //   onClick={() => setOpen(!open)}
// // >
// //   Our Services ▾

// //   {open && (
// //     <ul style={styles.dropdownMenu}>
// //       <li style={styles.dropdownItem}>
// //         <a href="#bridal">Bridal Makeup</a>
// //       </li>

// //       <li style={styles.dropdownItem}>
// //         <a href="#party">Party Makeup</a>
// //       </li>

// //       <li style={styles.dropdownItem}>
// //         <a href="#mehendi">Mehendi</a>
// //       </li>

// //       <li style={styles.dropdownItem}>
// //         <a href="#hair">Hairstyling</a>
// //       </li>

// //       <li style={styles.dropdownItem}>
// //         <a href="#maternity">Maternity Shoot</a>
// //       </li>

// //       <li style={styles.dropdownItem}>
// //         <a href="#jewellery">Jewellery</a>
// //       </li>
// //     </ul>
// //   )}
// // </li>

// //         <li>
// //           <a href="#feedback" style={styles.link}>Feedback</a>
// //         </li>
// //         <li>
// //           <a href="#faq" style={styles.link}>FAQ</a>
// //         </li>

// //         <li>
// //           <a href="/about" style={styles.link}>About</a>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // const styles = {
// //   nav: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "18px 50px",
// //     background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
// //     borderBottomLeftRadius: "15px",
// //     borderBottomRightRadius: "15px",
// //     boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
// //     position: "relative",
// //     zIndex: 1000, 
// //   },
// //   link: {
// //     color: "#fff",
// //     textDecoration: "none",
    
// //   },

// //  logo: {
// //     fontSize: "42px",
// //     fontWeight: "bold",
// //     color: "#fff",
// //     letterSpacing: "3px",
// //     textShadow: "0 0 10px #d50b30, 0 0 20px #ff4d6d", // 🔥 glow
// //   },
// //   menu: {
// //     display: "flex",
// //     fontSize: "18px",
// //     listStyle: "none",
// //     gap: "30px",
// //     cursor: "pointer",
// //     color:"#ffffff",
// //     /* 👇 ADD THIS */
// //   position: "absolute",
// //   top: "70px",
// //   right: 0,
// //   background: "#7b1e26",
// //   flexDirection: "column",
// //   width: "100%",
// //   padding: "20px",
// //   display: open ? "flex" : "none"
// //   },
// //   hamburger: {
// //   fontSize: "28px",
// //   color: "#fff",
// //   cursor: "pointer",
// //   display: "none"
// // },
// //    dropdown: {
// //     position: "relative",
// //     color: "#fff",
// //     cursor: "pointer",
// //   },
// //   dropdownMenu: {
// //     position: "absolute",
// //     top: "40px",
// //     left: "0",
// //     background: "#8a2222", // ✅ dark instead of white
// //     borderRadius: "10px",
// //     padding: "10px 0",
// //     minWidth: "180px",
// //     boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
// //     zIndex: 2000, 
// //   },
// //   dropdownItem: {
// //     padding: "10px 20px",
// //     color: "#ddd",
// //     cursor: "pointer",
// //     transition: "0.3s",
// //   },
// //   nav: {
// //   display: "flex",
// //   justifyContent: "space-between",
// //   alignItems: "center",
// //   padding: "15px 20px", // smaller for mobile
// //   background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
// //   position: "relative",
// // },
  

// // };

// // export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logo}>MAHI</div>

//       {/* Hamburger */}
//       {isMobile && (
//         <div style={styles.hamburger} onClick={() => setOpen(!open)}>
//           ☰
//         </div>
//       )}

//       <ul
//         style={{
//           ...styles.menu,
//           ...(isMobile ? styles.mobileMenu : styles.desktopMenu),
//           display: isMobile ? (open ? "flex" : "none") : "flex",
//         }}
//       >
//         <li><Link to="/" style={styles.link}>Home</Link></li>

//         <li style={styles.dropdown}
//         onClick={() => setOpen(!open)}>
           
//           Our Services ▾
//           <ul style={styles.dropdownMenu}>
//             <li><a href="#bridal">Bridal Makeup</a></li>
//             <li><a href="#party">Party Makeup</a></li>
//             <li><a href="#mehendi">Mehendi</a></li>
//             <li><a href="#hair">Hair Styling</a></li>
//             <li><a href="#maternity">Maternity</a></li>
//             <li><a href="#jewellery">Jewellery</a></li>
//           </ul>
//         </li>

//         <li><a href="#feedback" style={styles.link}>Feedback</a></li>
//         <li><a href="#faq" style={styles.link}>FAQ</a></li>
//         <li><Link to="/about" style={styles.link}>About</Link></li>
//       </ul>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "18px 20px",
//     background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     zIndex: 1000,
//   },

//   logo: {
//     fontSize: "28px",
//     fontWeight: "bold",
//     color: "#fff",
//   },

//   link: {
//     color: "#fff",
//     textDecoration: "none",
//   },

//   menu: {
//     listStyle: "none",
//     gap: "30px",
//   },

//   desktopMenu: {
//     display: "flex",
//     alignItems: "center",
//   },

//   mobileMenu: {
//     flexDirection: "column",
//     position: "absolute",
//     top: "60px",
//     left: 0,
//     width: "100%",
//     background: "#7b1e26",
//     padding: "20px",
//   },

//   hamburger: {
//     fontSize: "28px",
//     color: "#fff",
//     cursor: "pointer",
//   },

//   dropdown: {
//     position: "relative",
//     color: "#fff",
//   },

//   dropdownMenu: {
//     position: "absolute",
//     top: "30px",
//     left: 0,
//     background: "#8a2222",
//     padding: "10px",
//     borderRadius: "8px",
//   },
// };

// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MAHI</div>

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

        <li>
          <a href="#feedback" style={styles.link}>Feedback</a>
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
    top: 0,
    left: 0,

    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    background: "linear-gradient(to right, #ff4d6d, #7b1e26)",
    zIndex: 9999,   // 🔥 ABOVE everything
  },

  logo: {
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
    left: "10px",
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