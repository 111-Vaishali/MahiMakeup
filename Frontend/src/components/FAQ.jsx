import { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you provide bridal makeup services at home?",
      answer: "Yes, home service is available. Travel charges apply for locations outside Degloor."
    },
    {
      question: "What products do you use for makeup?",
      answer: "We use professional branded and skin-safe makeup products for long lasting results."
    },
    {
      question: "Do you provide mehendi services?",
      answer: "Yes, mehendi services can be arranged along with bridal bookings."
    },
    {
      question: "Do you offer makeup training classes?",
      answer: "Yes, professional makeup training classes are available for beginners."
    },
    {
      question: "Do you offer hairstyling along with makeup?",
      answer: "Yes. All bridal packages include hairstyle and one-time draping."
    },
    {
      question: "Are the makeup products branded and skin-safe?",
      answer: "Yes, we only use branded and skin-safe products suitable for different skin types."
    },
    {
      question: "Do you customize makeup based on skin type and tone?",
      answer: "Yes, makeup is customized based on skin type, skin tone and event requirements."
    },
    {
      question: "Do you provide a makeup trial before the wedding day?",
      answer: "Yes, makeup trials can be arranged before the event depending on availability."
    },
    {
      question: "Do you provide pre-bridal skincare services?",
      answer: "Yes, pre-bridal skincare guidance and services are available."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={styles.section}>

      <h2 style={styles.title}>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} style={styles.card}>

          <div
            style={styles.question}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>

          {openIndex === index && (
            <div style={styles.answer}>
              {faq.answer}
            </div>
          )}

        </div>
      ))}

    </section>
  );
}

const styles = {

  section: {
    padding: "60px 20px",
    background: "#000000",
    textAlign: "center"
  },

  title: {
    fontSize: "32px",
    marginBottom: "40px",
    color:"white",
  },

  card: {
    maxWidth: "750px",
    margin: "10px auto",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden"
  },

  question: {
    padding: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    background: "#88626f"
  },

  answer: {
    padding: "18px",
    textAlign: "left",
    background: "#d99dbf",
     textAlign: "center"
  }

};

export default FAQ;