export default function EnquiryForm() {
  return (
    <form className="enquiry">
      <div>
        <label htmlFor="hotel">Choose hotel</label>
        <input type="text" id="hotel" name="hotel" required minLength="4" />
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" required minLength="4" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" pattern="[a-z]{0,9}+@[a-z]{0,9}" />
      </div>
      <div>
        <label htmlFor="indate">Check in date</label>
        <input type="text" id="indate" name="indate" />
      </div>
      <div>
        <label htmlFor="outdate">Chech out date</label>
        <input type="text" id="outdate" name="outdate" r />
      </div>
      <div>
        <label htmlFor="guests">Nr of guests</label>
        <input type="text" id="guests" name="guests" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" className="message" required />
      </div>
      <button type="submit">Send enquiry</button>
    </form>
  );
}
