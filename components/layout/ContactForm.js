export default function () {
  return (
    <form className="contactform">
      <div>
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" required minlength="3" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" pattern="[a-z]{0,9}+@[a-z]{0,9}" />
      </div>
      <div>
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
      </div>
      <div>
        <label for="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          required
          minlength="10"
          className="message"
        />
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}
