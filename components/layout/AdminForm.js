export default function () {
  return (
    <form className="addhotel">
      <h2>Add new hotel</h2>
      <hr />
      <div>
        <label for="name">Hotel name</label>
        <input type="text" id="name" name="name" required minlength="3" />
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text" id="address" name="address" />
      </div>
      <div>
        <label for="description">Description</label>
        <input type="text" id="description" name="description" required minlength="3" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="text" id="price" name="price" />
      </div>
      <p>Facilities</p>
      <div>
        <label for="beds">Nr of beds</label>
        <input type="text" id="beds" name="beds" />
      </div>
      <div>
        <label for="breakfast">Breakfast</label>
        <input type="text" id="breakfast" name="breakfast" />
      </div>
      <div>
        <label for="wifi">Wifi</label>
        <input type="text" id="wifi" name="wifi" />
      </div>
      <div>
        <label for="parking">Parking</label>
        <input type="text" id="parking" name="parking" />
      </div>

      <button type="submit">Add hotel</button>
    </form>
  );
}
