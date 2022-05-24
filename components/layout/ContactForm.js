export default function () {
  return (
    <form className="contactform">
      <label for="first">First name</label>
      <input type="text" id="first" name="first" required minlength="3" />
      <label for="last">Last name</label>
      <input type="text" id="last" name="last" required minlength="4" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" pattern="[a-z]{0,9}+@[a-z]{0,9}" />
      <label for="subject">Subject</label>
      <input type="checkbox" id="subject" name="subject" />
      <input type="checkbox" id="subject" name="subject" />
      <label for="message">Message</label>
      <input type="text" id="message" name="message" required minlength="10" />
      <button type="submit">Submit</button>
    </form>
  );
}
