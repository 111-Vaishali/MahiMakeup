function Carousel() {
  return (
    <div style={styles.container}>
      <div style={styles.container}>
      <div id="slider" className="carousel slide" data-bs-ride="carousel" style={styles.carousel}>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/images/BridalMakeup.jpg" className="d-block w-100" style={styles.image} />
          </div>

          <div className="carousel-item">
            <img src="/images/AirbrushMakeup.jpg" className="d-block w-100" style={styles.image} />
          </div>

          <div className="carousel-item">
            <img src="/images/HennaPoster.jpg" className="d-block w-100" style={styles.image} />
          </div>

          <div className="carousel-item">
            <img src="/images/BabyShowerPoster.jpg" className="d-block w-100" style={styles.image} />
          </div>

          <div className="carousel-item">
            <img src="/images/JewelleryRentals.jpg" className="d-block w-100" style={styles.image} />
          </div>

          <div className="carousel-item">
            <img src="/images/Hairstyles.png" className="d-block w-100" style={styles.image} />
          </div>

          <div className="carousel-item">
            <img src="/images/PartyMakeup.jpg" className="d-block w-100" style={styles.image} />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    background: "black",
    alignItems: "center",
    padding: "10px",
    
    
  },
  carouselBox: {
    width: "100px",     // controls size
    maxWidth: "900px",
    // display: "flex",
    // justifyContent: "center",
  },
    carousel: {
    width: "100%",        // controls width
    maxWidth: "900px"    // prevents it from becoming too big
  },
  image: {
    height: "100%",     // controls height
    objectFit: "contain",
    borderRadius: "15px"
  }
};

export default Carousel;