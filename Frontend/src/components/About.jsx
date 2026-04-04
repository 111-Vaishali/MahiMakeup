import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  

  return (
    <>
      {/* HERO */}
      <>mscnms</>
      <>mscnms</>
      <header className="hero">
        <div className="hero-content">
          <h1 className="name-box">Mahesh Aulwar</h1>
          <p>Luxury Makeup Artist • Bridal • HD • Glam</p>
        </div>
      </header>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a professional makeup artist specializing in bridal, party,
          HD and airbrush makeup. My style focuses on enhancing natural beauty
          with a touch of luxury and elegance.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Services</h2>

        <div className="service-grid">

          <div className="service-card" >
            <h3>Bridal Makeup</h3>
            <p>Elegant, long-lasting bridal looks for your big day.</p>
          </div>

          <div className="service-card" >
            <h3>Party Makeup</h3>
            <p>Bold and glamorous looks for events & celebrations.</p>
          </div>

          <div className="service-card" >
            <h3>Mehendi Services</h3>
            <p>Tradition with beautiful, customized mehendi designs.</p>
          </div>

          <div className="service-card" >
            <h3>Hair Styling</h3>
            <p>Creative hairstyles to complete your look.</p>
          </div>

          <div className="service-card" >
            <h3>Pre-Maternity Shoot Makeup</h3>
            <p>Natural, glowing makeup for maternity shoots.</p>
          </div>

          <div className="service-card" >
            <h3>Luxe Jewellery Rentals</h3>
            <p>Premium bridal & fashion jewellery on rental basis.</p>
          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <h2>Why Choose Me</h2>
        <div className="why-box">
          <span>✔ Luxury MUA</span>
          <span>✔ 8+ Years</span>
          <span>✔ Premium Products</span>
          <span>✔ 600+ Brides</span>
          <span>✔ Long Lasting</span>
          <span>✔ 70+ Students</span>
        </div>
      </section>

      {/* CONTACT */}
      {/* CONTACT */}
<section className="contact">
  <h2>Contact</h2>

  {/* <p>Email: maheshaulwar19@gmail.com</p>
  <p>Phone: +91 8421502249</p> */}

  {/* 🔥 SOCIAL LINKS */}
  <div style={{ marginTop: "15px" }}>
    
    <p>
      📺 YouTube:{" "}
      <a 
        href="https://youtube.com/@professionalmakeupartistmahi?si=7BAMfMa1M6Nu9JTo" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Visit Channel
      </a>
    </p>

    <p>
      📍 Location:{" "}
      <a 
        href="https://maps.app.goo.gl/QCsgxTHvwU9MJp2c7" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View on Map
      </a>
    </p>

    <p>
      📸 Instagram:{" "}
      <a 
        href="https://www.instagram.com/makeu_p_artist_mahi/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Follow Page
      </a>
    </p>
    <p>Email: maheshaulwar19@gmail.com</p>
  <p>Phone: +91 8421502249</p>

  </div>
</section>
    </>
  );
}

export default About;