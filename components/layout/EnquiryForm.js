export default function () {
  return (
    <form className="enquiry">
      <div>
        <label for="hotel">Choose hotel</label>
        <input type="text" id="hotel" name="hotel" required minlength="4" />
      </div>
      <div>
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" required minlength="4" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" pattern="[a-z]{0,9}+@[a-z]{0,9}" />
      </div>
      <div>
        <label for="indate">Check in date</label>
        <input type="text" id="indate" name="indate" />
      </div>
      <div>
        <label for="outdate">Chech out date</label>
        <input type="text" id="outdate" name="outdate" r />
      </div>
      <div>
        <label for="guests">Nr of guests</label>
        <input type="text" id="guests" name="guests" />
      </div>
      <div>
        <label for="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          className="message"
          required
          minlength="10"
        />
      </div>
      <button type="submit">Send enquiry</button>
    </form>
  );
}
