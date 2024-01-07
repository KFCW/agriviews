import "../styles/Components/NavBar/ContactSection/style.css";
import image from "../../../assets/images/contact/help.jpg";
import { useState, ChangeEvent, FormEvent } from "react";

interface DataContact {
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [contactData, setContactData] = useState<DataContact>({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Add your logic here to handle the form submission
    // console.log("Data submitted:", contactData);
  };

  return (
    <div className="contact__container">
      <div className="description">
        <h2>Contactez-nous</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Vitae ad natus nulla ab unde illo atque rerum praesentium.<br />
          Quia consectetur quaerat nulla, expedita assumenda est <br />.
          Repellendus reprehenderit repellat adipisci? Quis vero eum .
        </p>
      </div>
      <div className="contact__content">
        <form onSubmit={handleSubmit} className="left">
          <div className="box__input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Votre email"
              onChange={handleChange}
              value={contactData.email}
            />
          </div>
          <div className="box__input">
            <label htmlFor="subject">Objet</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Objet"
              onChange={handleChange}
              value={contactData.subject}
            />
          </div>
          <div className="box__input">
            <label htmlFor="message" className="msg">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              cols={80}
              placeholder="Votre message..."
              onChange={handleChange}
              value={contactData.message}
            />
          </div>
          <div className="btn__box">
            <button type="submit">Envoyer le message</button>
          </div>
        </form>
        <div className="rightContact">
          <img src={image} alt="image de contacts" className="cont__img" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
