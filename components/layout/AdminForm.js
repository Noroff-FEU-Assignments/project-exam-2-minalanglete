export default function AdminForm() {
  return (
    <form className="addhotel">
      <h2>Add new hotel</h2>
      <hr />
      <div>
        <label>Hotel name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label f>Address</label>
        <input type="text" id="address" name="address" />
      </div>
      <div>
        <label>Description</label>
        <input type="text" id="description" name="description" />
      </div>
      <div>
        <label>Price</label>
        <input type="text" id="price" name="price" />
      </div>
      <p>Facilities</p>
      <div>
        <label>Nr of beds</label>
        <input type="text" id="beds" name="beds" />
      </div>
      <div>
        <label>Breakfast</label>
        <input type="text" id="breakfast" name="breakfast" />
      </div>
      <div>
        <label>Wifi</label>
        <input type="text" id="wifi" name="wifi" />
      </div>
      <div>
        <label>Parking</label>
        <input type="text" id="parking" name="parking" />
      </div>

      <button type="submit">Add hotel</button>
    </form>
  );
}
