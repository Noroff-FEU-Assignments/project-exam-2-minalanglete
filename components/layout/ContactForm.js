export default function ContactForm() {
  return (
    <form className="contactform">
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" pattern="[a-z]{0,9}+@[a-z]{0,9}" />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" required className="message" />
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}
