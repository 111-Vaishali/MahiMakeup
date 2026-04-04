import { useEffect, useState } from "react";


function Feedback() {

  const [feedbackData, setFeedbackData] = useState([
    ["Aditi", "The bridal makeup was absolutely stunning!"],
    ["Kiran", "Loved the soft glam look, very elegant."],
    ["Meera", "Makeup stayed perfect throughout the wedding."],
    ["Nisha", "Very professional and friendly artist."],
    ["Rohini", "Hairstyle and makeup combination was perfect."],
    ["Tanvi", "Natural and glowing bridal look."]
  ]);

  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [showModal, setShowModal] = useState(false);

 const addFeedback = async () => {
  if (name.trim() === "" || suggestion.trim() === "") {
    alert("Fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: suggestion,
      }),
    });

    alert("Feedback submitted ✅");

    setName("");
    setSuggestion("");
    setShowModal(false);

    fetchFeedback(); // 🔥 refresh data
  } catch (err) {
    console.log(err);
    alert("Error ❌");
  }
};

  const createCard = (fb, i) => (
    <div key={i} style={styles.card}>
      <h4>{fb[0]}</h4>
      <div style={styles.suggestion}>{fb[1]}</div>
    </div>
  );
  const fetchFeedback = async () => {
  try {
    const res = await fetch("http://localhost:5000/feedback");
    const data = await res.json();

    const dbData = data.map((item) => [item.name, item.message]);
    setFeedbackData((prev) => [...dbData, ...prev]);
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div style={styles.section}>
      <p></p>
      <p></p>
      <p></p>
      <br />
      <br />

      <h2>Client Feedback</h2>

      {/* Slider 1 */}
      <div style={styles.slider}>
        <div style={{ ...styles.track }}>
          {[...feedbackData, ...feedbackData].map(createCard)}
        </div>
      </div>

      {/* Slider 2 */}
      <div style={styles.slider}>
        <div style={{ ...styles.track, animation: "scrollReverse 12s linear infinite" }}>
          {[...feedbackData, ...feedbackData].map(createCard)}
        </div>
      </div>

      <button style={styles.button} onClick={() => setShowModal(true)}>
        Give Feedback
      </button>

      {/* Modal */}
      {showModal && (
        <div style={styles.modal} onClick={() => setShowModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>Add Feedback</h3>

            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />

            <textarea
              placeholder="Your feedback"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              style={styles.input}
            />

            <button style={styles.button} onClick={addFeedback}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  section: {
    width: "100%",
    height: "100%",
    margin: "40px auto",
    background: "black",
    padding: window.innerWidth < 768 ? "20px 0" : "40px 0",
    // borderRadius: "12px",
    // border: "3px solid #7b001c",
    textAlign: "center",
    color: "#f5e6a8"
  },
  slider: {
    overflow: "hidden",
    margin: "20px 0"
  },
  track: {
    display: "flex",
    gap: "0px",
    animation: "scroll 12s linear infinite",
    width: "max-content" // 👈 VERY IMPORTANT
  },
  card: {
    background: "#4d080d",
    padding: "15px",
    margin: "10px",
    width: window.innerWidth < 768 ? "160px" : "230px",
    minHeight: "90px",
    borderRadius: "8px",
    border: "2px solid #7b001c",
    boxShadow: "0 0 12px rgba(123,0,28,0.7)",
    flexShrink: 0
  },
  suggestion: {
    fontSize: window.innerWidth < 768 ? "12px" : "14px",
    marginTop: "6px",
    color: "#ffeaa7"
  },
  button: {
    background: "#4d080d",
    color: "#fff2cc",
    border: "none",
    padding: "12px 25px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px"
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    background: "black",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #7b001c",
    width: "300px"
  },
  input: {
    width: "90%",
    padding: "8px",
    margin: "5px 0",
    border: "1px solid #7b001c",
    borderRadius: "5px",
    background: "#111",
    color: "#fff2cc"
  }
  
};

export default Feedback;