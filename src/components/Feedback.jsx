import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {

const [feedbackData, setFeedbackData] = useState([
  ["Aditi","The bridal makeup was absolutely stunning!"],
  ["Kiran","Loved the soft glam look, very elegant."],
  ["Meera","Makeup stayed perfect throughout the wedding."],
  ["Nisha","Very professional and friendly artist."],
  ["Rohini","Hairstyle and makeup combination was perfect."],
  ["Tanvi","Natural and glowing bridal look."]
]);

const [showModal, setShowModal] = useState(false);
const [name, setName] = useState("");
const [suggestion, setSuggestion] = useState("");

function addFeedback(){

  if(name === "" || suggestion === ""){
    alert("Fill all fields");
    return;
  }

  const newFeedback = [name, suggestion];

  setFeedbackData([newFeedback, ...feedbackData]);

  setName("");
  setSuggestion("");
  setShowModal(false);
}

return (

<div className="feedback-section">

<h2>Client Feedback</h2>

<div className="slider">
<div className="track">
{feedbackData.map((fb,index)=>(
<div className="feedback-card" key={index}>
<h4>{fb[0]}</h4>
<div className="suggestion">{fb[1]}</div>
</div>
))}
</div>
</div>

<div className="slider">
<div className="track reverse">
{feedbackData.map((fb,index)=>(
<div className="feedback-card" key={index}>
<h4>{fb[0]}</h4>
<div className="suggestion">{fb[1]}</div>
</div>
))}
</div>
</div>

<button className="feedback-btn" onClick={()=>setShowModal(true)}>
Give Feedback
</button>

{showModal && (

<div className="modal">

<div className="modal-content">

<h3>Add Feedback</h3>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<textarea
placeholder="Your feedback"
value={suggestion}
onChange={(e)=>setSuggestion(e.target.value)}
/>

<button className="feedback-btn" onClick={addFeedback}>
Submit
</button>

</div>

</div>

)}

</div>

);
}

export default Feedback;