import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid =
    name.trim() !== "" && email.includes("@") && message.trim() !== "";

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mqargbpw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        // تفريغ الحقول
        setName("");
        setEmail("");
        setMessage("");
        // إغلاق النافذة فوراً
        setShowForm(false);
        // تم حذف الـ alert بناءً على طلبك
      } else {
        alert("حدث خطأ ما، يرجى المحاولة مرة أخرى.");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("مشكلة في الاتصال. تأكد من جودة الإنترنت.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact" className="Box">
      <div className="continer continerBoxcontact">
        <div className="BoxContact">
          <div className="TextContact">
            <h2>
              <span>Sweat now, shine later.</span>Your body is a reflection of
              your lifestyle choices.
            </h2>
          </div>
          <div className="ButtonContact">
            <button onClick={() => setShowForm(true)}>CONTACT</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="Overlay">
          <div className="FormBox">
            <form onSubmit={handleManualSubmit}>
              <h3>Contact Us</h3>

              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                rows={7}
                name="message"
                value={message}
                placeholder="Enter Your message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <div className="FormActions">
                <button type="button" onClick={() => setShowForm(false)}>
                  Close
                </button>

                {isFormValid && (
                  <button type="submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
